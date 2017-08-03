/* @flow */
import { Router } from 'express';

export default class MainRouter {
  router: Router;
  path: string;

  constructor(path: string = '/api'): void {
    this.router = Router();
    this.path = path;
    this.init();
  }

  static index(req: $Request, res: $Response): void {
    res.status(200).json({
      success: 'true',
    });
  }

  init(): void {
    this.router.get('/', (req: $Request, res: $Response) => {
      res.status(200).json({
        success: 'true',
      });
    });
  }
}
