import { Router } from 'express';
import { ItemController } from '../controllers/item';

const router = Router();
const itemController = new ItemController();

router.post('/item/upload', itemController.uploadItemByCSV);

export default router;
