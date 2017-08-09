/* @flow */
import { Router } from 'express';
import postModel from '../models/post';

export default class PostRouter {
  router: Router;
  path: string;

  constructor(path: string = '/api'): void {
    this.router = Router();
    this.path = path;
    this.init();
  }

  static placeholder(req: $Request, res: $Response) {
    res.status(200).json({
      success: true,
    });
  }

  init(): void {
    this.router.get('/', PostRouter.placeholder);
  }
}
