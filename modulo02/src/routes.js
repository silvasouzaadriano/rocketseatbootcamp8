import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

// Route for user creation
routes.post('/users', UserController.store);

export default routes;
