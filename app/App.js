/* @flow */
import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import debug from 'debug';
import type { Debugger } from 'debug';
import type { NextFunction, $ErrnoError } from 'express';
import PostRouter from './routes/PostRouter';

class Application {
  express: express$Application;
  port: string | number;
  mongodURI: string;
  debug: Debugger;
  DEFAULT_PORT: 3000

  constructor() {
    this.DEFAULT_PORT = 3000;
    this.port = this.normalizePort(process.env.PORT || '3000');
    this.mongodURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/tourismatik';
    this.express = express();
    this.debug = debug('tourismatik:server');
    this.dbConnect();
    this.middleware();
    this.routes();
    this.start();
  }

  normalizePort(val: string): string | number {
    const normalizedport = parseInt(val, 10);

    if (isNaN(normalizedport)) {
      // named pipe
      return val;
    }

    if (normalizedport >= 0) {
      // port number
      return normalizedport;
    }

    return this.DEFAULT_PORT;
  }

  onListening(): void {
    const addr: net$Socket$address = this.express.address();
    const bind: string = typeof addr === 'string'
      ? `pipe ${addr}`
      : `pipe ${addr.port}`;
    this.debug(`Listening on + ${bind}`);
  }

  onError(error: $ErrnoError): void {
    if (error.syscall !== 'listen') {
      throw error;
    }
    const bind: string = typeof this.port === 'string'
      ? `Pipe ${this.port}`
      : `Port ${this.port.toString()}`;

    switch (error.code) {
      case 'EACCES':
        console.error(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(`${bind} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  dbConnect(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongodURI, { useMongoClient: true }, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
  middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(cookieParser());
    /**
     * Error Handler
     */
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
    const postRouter = new PostRouter();
    this.express.use(postRouter.path, postRouter.router);
    this.express.use((req: $Request, res: $Response, next: NextFunction): void => {
      const err: $ErrnoError = new Error('Not Found');
      err.status = 404;
      next(err);
    });
  }

  start() {
    this.express.listen(this.port);
    this.express.on('error', this.onError);
    this.express.on('listening', this.onListening);
  }
}

const app = new Application();
export default app;
