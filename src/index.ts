import express, { Request, Response } from 'express';
import * as Sentry from '@sentry/node';
import 'express-async-errors';
import Youch from 'youch';
import sentryConfig from './config/sentry';

import routes from './routes';

const app = express();

Sentry.init(sentryConfig);

app.use(Sentry.Handlers.requestHandler());

app.use(express.json());

app.use(routes);

app.listen(3000, () => {});

app.use(
  async (err: Error, req: Request, res: Response): Promise<Response> => {
    const errors = await new Youch(err, req).toJSON();

    return res.status(500).json(errors);
  },
);

app.use(Sentry.Handlers.errorHandler());
