import app from '../app';
import http from 'http';
import debugPackage from 'debug';
const debug = debugPackage('tourismatik:server');

/**
 * Normalize a port into a number, string, or false.
 */

export function normalizePort(val) {
  const normalizedport = parseInt(val, 10);

  if (isNaN(normalizedport)) {
    // named pipe
    return val;
  }

  if (normalizedport >= 0) {
    // port number
    return normalizedport;
  }

  return false;
}

/**
 * Create HTTP server.
 */

export const server = http.createServer(app);

/**
 * Event listener for HTTP server "listening" event.
 */

export function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

/**
 * Event listener for HTTP server "error" event.
 */

export function onError(error) {
  const port = normalizePort(process.env.PORT || '3000');
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
