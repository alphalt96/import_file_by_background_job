import { Router } from 'express';
import { UploadController } from '../controllers/upload';

const router = Router();
const uploadController = new UploadController();

router.get('/upload/item/signed-url', uploadController.getUploadItemUrl);

export default router;
