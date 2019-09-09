import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import authMiddleware from './app/middlewares/auth';
import MeetupController from './app/controllers/MeetupController';
import OrganizingController from './app/controllers/OrganizingController';
import SubscriptionController from './app/controllers/SubscriptionController';

const routes = new Router();
const upload = multer(multerConfig);

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

// Route for upload files
routes.post('/files', upload.single('file'), FileController.store);

// Route for get meetup
routes.get('/meetups', MeetupController.index);

// Route for meetuo creation
routes.post('/meetups', MeetupController.store);

// Route for meetup update
routes.put('/meetups/:id', MeetupController.update);

// Route for meetup deletion
routes.delete('/meetups/:id', MeetupController.delete);

// Route for get all meetups organized by an user
routes.get('/organizing', OrganizingController.index);

// Router for get all meetups which user is subscribed
routes.get('/subscriptions', SubscriptionController.index);

// Route for subscribe meetups
routes.post('/meetups/:meetupId/subscriptions', SubscriptionController.store);

export default routes;
