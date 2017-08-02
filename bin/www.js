/* @flow */

/**
 * Module dependencies.
 */
import {
  normalizePort,
  onError,
  onListening,
  server,
} from './serverUtil';

const port = normalizePort(process.env.PORT || '3000');

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
