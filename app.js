/* @flow */
import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import type { NextFunction, $ErrnoError } from 'express';
import MainRouter from './routes/MainRouter';

export default class Application {
  express: express$Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(cookieParser());
    this.express.use((error: ?Error, req: $Request, res: $Response, next: NextFunction) => {
      if (error) {
        res.locals.message = error.message;
        res.locals.error = req.app.get('env') === 'development' ? error : {};

        res.status(error.status || 500);
        res.json({ error: error.message });
      }
    });
  }

  routes(): void {
    const mainRouter = new MainRouter();
    this.express.use(mainRouter.path, mainRouter.router);
    this.express.use((req: $Request, res: $Response, next: NextFunction): void => {
      const err: $ErrnoError = new Error('Not Found');
      err.status = 404;
      next(err);
    });
  }
}
