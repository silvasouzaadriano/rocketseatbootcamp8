import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// Route for user creation
routes.post('/users', UserController.store);

// Route for session controller
routes.post('/sessions', SessionController.store);

// Router for determine the authMiddleware as global
// It means that from this point on all router will
// incorporate this middleware
routes.use(authMiddleware);

// Router for user update. This route must accessed when user is authenticated
routes.put('/users', UserController.update);

export default routes;
