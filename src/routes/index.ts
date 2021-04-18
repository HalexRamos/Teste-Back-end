import { Router } from 'express';
import dataRouter from './data.routes';

const routes = Router();

routes.get('/', dataRouter);

export default routes;
