const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");
const expressValidator = require("express-validator");
const expressSession = require("express-session");

const routes = require("./routes/index");

const app = express();

// app engine setup
app.engine(
  "hbs",
  hbs.engine({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts/",
  })
);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(expressValidator());

app.use(express.static(path.join(__dirname, "public")));

app.use(
  expressSession({ secret: "max", saveUninitialized: false, resave: false })
);

app.use("/", routes);

// 404 forward handler
app.use((req, res, next) => {
  let err = new Error("Page not found!");
  err.status = 404;
  next(err);
});

// 500 forward handler
app.use((req, res, next) => {
  let err = new Error("Internal server error!");
  err.status = 500;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: err.status,
  });
});

module.exports = app;
