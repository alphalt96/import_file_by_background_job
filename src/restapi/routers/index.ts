import * as express from 'express';
import itemRouter from './item';
import uploadRouter from './upload';

export const useRouter = (app: express.Express): void => {
  app.use(itemRouter);
  app.use(uploadRouter);
}
