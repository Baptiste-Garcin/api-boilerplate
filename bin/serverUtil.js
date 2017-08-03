/* @flow */
import http from 'http';
import debugPackage from 'debug';
import type { $ErrnoError } from 'express';
import mongoose from 'mongoose';
import Application from '../app';

const app = new Application();
export const server: Server = http.createServer(app.express);

const debug = debugPackage('tourismatik:server');

/**
 * Normalize a port into a number, string, or false.
 */

export function normalizePort(val: string): string | number | boolean {
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
 * Event listener for HTTP server "listening" event.
 */

export function onListening(): void {
  const addr: net$Socket$address = server.address();
  const bind: string = typeof addr === 'string'
    ? `pipe ${addr}`
    : `pipe ${addr.port}`;
  debug(`Listening on + ${bind}`);
}

/**
 * Event listener for HTTP server "error" event.
 */

export function onError(error: $ErrnoError): void {
  const port = normalizePort(process.env.PORT || '3000');
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind: string = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port.toString()}`;

  // handle specific listen errors with friendly messages
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

/**
 * Connection to database
 */

export function dbConnect() {
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/tourismatik', { useMongoClient: true }, (err) => {
    if (err) {
      console.error(err);
    }
  });
}
