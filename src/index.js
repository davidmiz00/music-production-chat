/* eslint-disable no-console */
const logger = require('./logger');
const app = require('./app');
// const port = app.get('port');
// Added to make it work on Heroku
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
// app.listen(port);

const server = app.listen(port);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () =>
  logger.info('Feathers application started on http://%s:%d', app.get('host'), port)
);
