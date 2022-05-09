import * as express from 'express';
import { useRouter } from './routers';

const app = express();
useRouter(app);

export default app;
