import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { storage } from '../../core';

export class UploadController {
  constructor() { }

  async getUploadItemUrl(req: Request, res: Response) {
    const id = uuidv4();
    const signedUrl = await storage.getSignedUrl(id);

    return res.status(200).json({
      upload_id: id,
      url: signedUrl
    });
  }
}
