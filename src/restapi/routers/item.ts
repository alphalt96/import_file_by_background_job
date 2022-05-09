import { Router } from 'express';
import { ItemController } from '../controllers/item';

const router = Router();
const itemController = new ItemController();

router.post('/upload-item', itemController.uploadItemByCSV);

export default router;
