const http = require("http");
const app = require("./module");
const auth = require("./auth");

http
  .createServer(() => {
    app.runOopMethods();
    auth.login();
  })
  .listen(8000);
