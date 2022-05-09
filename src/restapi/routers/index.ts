import * as express from 'express';
import itemRouter from './item';

export const useRouter = (app: express.Express): void => {
  app.use(itemRouter);
}
