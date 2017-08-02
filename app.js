/* @flow */
import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import type { $Application, NextFunction, $ErrnoError } from 'express';
import index from './routes/index';

const app: $Application = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', index);

app.get('/favicon.ico', (req: $Request, res: $Response) => res.status(204));

// catch 404 and forward to error handler
app.use((req: $Request, res: $Response, next: NextFunction) => {
  const err: $ErrnoError = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((error: ?Error, req: $Request, res: $Response) => {
  // set locals, only providing error in development
  if (error) {
    res.locals.message = error.message;
    res.locals.error = req.app.get('env') === 'development' ? error : {};

    // render the error page
    res.status(error.status || 500);
    res.render('error');
  }
});

export default app;
