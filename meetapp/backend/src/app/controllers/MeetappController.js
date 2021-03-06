import { Op } from 'sequelize';
import { isBefore, parseISO, startOfMonth, endOfMonth } from 'date-fns';
import Meetapp from '../models/Meetapp';
import File from '../models/File';
import User from '../models/User';
import Notification from '../schemas/Notification';

class MeetappController {
  async index(req, res) {
    let where;
    if (req.query.where === 'just-my-meetapps') {
      where = { owner_id: req.userId };
    } else {
      const { date } = req.query;
      const parsedDate = parseISO(date);
      const startMonth = startOfMonth(parsedDate);
      const endMonth = endOfMonth(parsedDate);
      where = {
        date: {
          [Op.between]: [startMonth, endMonth],
        },
        canceled_at: null,
      };
    }
    const meetapps = await Meetapp.findAll({
      where,
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

  async show(req, res) {
    const { id } = req.params;

    const meetapp = await Meetapp.findByPk(id, {
      include: [
        {
          model: User,
          as: 'owner',
          attributes: ['id', 'name'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],
        },
        {
          model: File,
          as: 'banner',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    if (!meetapp) return res.status(400).json({ error: 'Meetup não existe' });

    const {
      title,
      description,
      location,
      date,
      owner,
      past,
      cancelable,
      canceled_at,
      banner,
    } = meetapp;

    const subscribers = await User.findAll({
      where: {
        [Op.or]: meetapp.subscribers.map(user_id => ({
          id: user_id,
        })),
      },
      attributes: ['id', 'name'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    const subscribed = !!meetapp.subscribers.find(
      user_id => user_id === req.userId
    );

    return res.status(200).json({
      id,
      title,
      description,
      location,
      date,
      owner,
      past,
      cancelable,
      canceled_at,
      banner,
      subscribers,
      subscribed,
    });
  }

  async store(req, res) {
    const { title, description, location, date, banner_id } = req.body;
    /* VERIFYING THE BANNER */
    if (banner_id) {
      const image = await File.findByPk(banner_id);
      if (!image)
        return res.status(400).json({ error: 'Banner não encontrado' });
      if (image.type !== 'banner')
        return res.status(400).json({ error: 'Sua foto deve ser um banner' });
    }
    /* VERIFYING PAST DATE */
    if (isBefore(parseISO(date), new Date()))
      return res.status(400).json({
        error: 'You não pode criar um meetup para uma data que já passou!',
      });

    /* CREATING THE MEETAPP */
    const meetapp = await Meetapp.create({
      title,
      description,
      location,
      date,
      owner_id: req.userId,
      banner_id,
    });

    return res.status(201).json(meetapp);
  }

  async update(req, res) {
    const meetapp = await Meetapp.findOne({ where: { id: req.params.id } });
    const { date, banner_id } = req.body;

    try {
      if (!meetapp) throw new Error('Meetup não existe');
      if (meetapp.past) throw new Error('Meetup já finalizado');
      if (req.userId !== meetapp.owner_id)
        throw new Error(`Você não é o dono desse meetup`);

      /* VERIFYING THE BANNER */
      if (banner_id && banner_id !== meetapp.banner_id) {
        const image = await File.findByPk(banner_id);
        if (!image) throw new Error('Imagem não encontrada');
        if (image.type !== 'banner')
          throw new Error('Sua foto deve ser um banner');
      }

      /* VERIFYING THE PAST DATE */
      if (date && isBefore(parseISO(date), new Date()))
        throw new Error('Datas antigas não são permitidas');
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }

    await meetapp.update(req.body);

    await Notification.create(
      meetapp.subscribers.map(subscriber => ({
        user: subscriber,
        content: `${meetapp.title} foi alterado!`,
      }))
    );

    const {
      id,
      title,
      description,
      location,
      banner,
      subscribers,
    } = await Meetapp.findByPk(req.params.id, {
      include: [
        {
          model: File,
          as: 'banner',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.status(200).json({
      id,
      title,
      description,
      location,
      date,
      banner,
      subscribers,
    });
  }

  async delete(req, res) {
    const meetapp = await Meetapp.findOne({ where: { id: req.params.id } });

    try {
      if (!meetapp) throw new Error('Esse meetup não existe!');
      if (meetapp.canceled_at) throw new Error('Esse meetup já foi cancelado!');
      if (meetapp.past)
        throw new Error('You não pode apagar um meetup que já foi finalizado!');
      if (req.userId !== meetapp.owner_id)
        throw new Error('Você não é o dono desse meetup!');
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }

    meetapp.canceled_at = new Date();

    await Notification.create(
      meetapp.subscribers.map(subscriber => ({
        user: subscriber,
        content: `${meetapp.title} foi cancelado!`,
      }))
    );

    meetapp.subscribers = [];

    await meetapp.save();

    return res.status(200).send();
  }
}

export default new MeetappController();
