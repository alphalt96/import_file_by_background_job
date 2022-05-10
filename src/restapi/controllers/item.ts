import { Request, Response } from 'express';
import { itemDataSource } from '../../core';

export class ItemController {
  constructor() { }

  async uploadItemByCSV(req: Request, res: Response) {
    const uploadId = req.body.uploadId;

    if (!uploadId || typeof uploadId !== 'string') {
      return res.status(400).json({
        message: 'Invalid params.'
      });
    }

    const createdImportOrder = await itemDataSource.createImportItemOrder(uploadId);
    console.log('testt', createdImportOrder)

    return res.status(200).json({
      message: 'ok'
    });
  }
}
