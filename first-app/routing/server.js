const http = require('http');
const app = require('./module');

http.createServer(app.handleRequest).listen(8000);