const url = require('url');
const fs = require('fs');

function renderHTML(path, res) {
  fs.readFile(path, null, (error, data) => {
    if (error) {
      res.writeHead(404);
    } else {
      res.write(data);
    }

    res.end();
  });
}

module.exports = {
  handleRequest: (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    let path = url.parse(req.url).pathname;

    switch(path) {
      case '/':
        renderHTML('./index.html', res);
        break;
      case '/login':
        renderHTML('./login.html', res);
        break;
      default:
        res.writeHead(404);
        // res.write('Page not found')
        // res.end()
        renderHTML('./not-found.html', res);
    }
  }
};