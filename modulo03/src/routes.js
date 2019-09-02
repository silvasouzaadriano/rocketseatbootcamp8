import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// Route for user creation
routes.post('/users', UserController.store);

// Route for session controller
routes.post('/sessions', SessionController.store);

// Route for determine the authMiddleware as global
// It means that from this point on all router will
// incorporate this middleware
routes.use(authMiddleware);

// Route for user update. This route must accessed when user is authenticated
routes.put('/users', UserController.update);

// Route for list the user providers
routes.get('/providers', ProviderController.index);

// Route for appointments creation
routes.post('/appointments', AppointmentController.store);

// Route for appointments list
routes.get('/appointments', AppointmentController.index);

// Route for provider appointments list by filter date
routes.get('/schedule', ScheduleController.index);

// Route for get the provider notifications
routes.get('/notifications', NotificationController.index);

// Route for mark notification as read
routes.put('/notifications/:id', NotificationController.update);

// Route to upload files
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
