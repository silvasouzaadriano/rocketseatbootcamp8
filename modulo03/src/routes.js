import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

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

// Router to upload files
routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: true });
});
export default routes;
