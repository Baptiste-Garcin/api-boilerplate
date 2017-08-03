/* @flow */

/**
 * Module dependencies.
 */
import {
  normalizePort,
  onError,
  onListening,
  server,
  dbConnect,
} from './serverUtil';

const port = normalizePort(process.env.PORT || '3000');

/**
 * Listen on provided port, on all network interfaces.
 */

dbConnect();
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
