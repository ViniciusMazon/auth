import { Router } from 'express';

const routes = Router();

import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';

import authMiddleware from './middlewares/auth';

routes.post('/sing-up', UserController.store);
routes.post('/sing-in', SessionController.store);

routes.use(authMiddleware);
routes.get('/authenticated', (request, response) => response.send());

export default routes;
