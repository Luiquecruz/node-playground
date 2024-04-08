const app = require('./app');
const debug = require('debug');
const http = require('http');

const port = 8000;

app.set('port', port);

const server = http.createServer(app);

server.listen(port);

server.on('listening', () => {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;

    debug('Listening on ' + bind);
});
