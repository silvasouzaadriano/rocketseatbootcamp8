import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Route for user creation
routes.post('/users', UserController.store);

// Route for session controller
routes.post('/sessions', SessionController.store);

export default routes;
