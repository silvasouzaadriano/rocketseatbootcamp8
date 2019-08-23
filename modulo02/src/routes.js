import { Router } from 'express';
import User from './app/models/User'; // just for test

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Adriano Souza',
    email: 'silva.souza.adriano@gmail.com',
    password_hash: '1234',
  });

  return res.json(user);
});

export default routes;
