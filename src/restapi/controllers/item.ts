import { Request, Response } from 'express';

export class ItemController {
  constructor() { }

  async uploadItemByCSV(req: Request, res: Response) {
    console.log('hello, this is upload sama');
    return res.status(200).json({
      message: 'ok'
    });
  }
}
