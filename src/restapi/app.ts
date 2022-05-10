import express from 'express';
import bodyParser from 'body-parser';
import { useRouter } from './routers';

const app = express();
app.use(bodyParser.json());
useRouter(app);

export default app;
