import { Op } from 'sequelize';
import {
  parseISO,
  startOfMonth,
  endOfMonth,
  startOfHour,
  addHours,
} from 'date-fns';

import Meetapp from '../models/Meetapp';
import User from '../models/User';
import File from '../models/File';

import SubscriptionMail from '../jobs/SubscriptionMail';
import Queue from '../../lib/Queue';
import Notification from '../schemas/Notification';

class SubscriptionController {
  async index(req, res) {
    const { date } = req.query;
    const parsedDate = parseISO(date);
    const startMonth = startOfMonth(parsedDate);
    const endMonth = endOfMonth(parsedDate);
    const meetapps = await Meetapp.findAll({
      where: {
        date: { [Op.between]: [startMonth, endMonth] },
        subscribers: { [Op.contains]: [req.userId] },
        canceled_at: null,
      },
      order: [['date', 'ASC']],
      include: [
        {
          model: File,
          as: 'banner',
          attributes: ['id', 'path', 'url'],
        },
        {
          model: User,
          as: 'owner',
          attributes: ['id', 'name'],
        },
      ],
    });

    const meetAppList = meetapps.map(m => ({
      ...m.toJSON(),
      canSubscribe: !m.subscribers.find(user_id => user_id === req.userId),
    }));

    return res.status(200).json(meetAppList);
  }

  async store(req, res) {
    const meetapp = await Meetapp.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: File,
          as: 'banner',
          attributes: ['id', 'path', 'url'],
        },
        {
          model: User,
          as: 'owner',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });

    try {
      if (!meetapp) throw new Error('Meetup não existe');
      if (meetapp.past) throw new Error('Meetup não existe');
      if (req.userId === meetapp.owner_id)
        throw new Error(
          `O dono do meetup não pode se inscrever no seu próprio meetup`
        );
      if (meetapp.subscribers.includes(req.userId))
        throw new Error('Você já está inscrito');
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }

    /* check hours of meetapp */
    const hourStart = startOfHour(Number(meetapp.date));
    const minimumMeetappHours = 2;

    const conflictMeetapps = await Meetapp.findOne({
      where: {
        subscribers: { [Op.contains]: [req.userId] },
        date: {
          [Op.between]: [hourStart, addHours(hourStart, minimumMeetappHours)],
        },
      },
      attributes: ['id', 'title', 'location', 'date'],
    });

    if (conflictMeetapps)
      return res.status(400).json({
        error: 'Você já se inscrever no meetup para essa mesma data e hora',
        conflict: conflictMeetapps,
      });

    const { title, description, location, date, banner } = await meetapp.update(
      {
        subscribers: [req.userId, ...meetapp.subscribers],
      }
    );
    const user = await User.findByPk(req.userId, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    /* SEND NOTIFICATION TO OWNER */
    await Notification.create({
      user: meetapp.owner_id,
      content: `${user.name} inscreveu-se para seu Meetup ${title}!`,
    });

    /* SEND NOTIFICATION TO SUBSCRIBED */
    await Notification.create({
      user: user.id,
      content: `Você está inscrito agora no meetup ${title}!`,
    });

    /* SEND EMAIL TO OWNER */
    const { name: userSubName, email: userSubEmail } = await User.findOne({
      where: { id: req.userId },
    });

    await Queue.add(SubscriptionMail.key, {
      userName: user.name,
      meetapp,
      title,
      date,
      userSubName,
      userSubEmail,
    });

    return res.status(200).json({
      title,
      description,
      location,
      date,
      banner,
    });
  }

  async delete(req, res) {
    const meetapp = await Meetapp.findOne({ where: { id: req.params.id } });

    if (!meetapp)
      return res.status(400).json({ error: 'Esse meetup não existe!' });

    if (meetapp.past)
      return res.status(400).json({
        error:
          'Você não pode retirar a inscrição de um meetup que já terminou!',
      });

    if (!meetapp.subscribers.includes(req.userId))
      return res.status(400).json({ error: 'Você não está inscrito!' });

    const removeFromSubs = subs => {
      subs.splice(subs.indexOf(req.userId), 1);
      return subs;
    };
    const subscribers = removeFromSubs(meetapp.subscribers);

    await meetapp.update({ subscribers });

    return res.send();
  }
}

export default new SubscriptionController();
