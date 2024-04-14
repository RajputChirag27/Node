const express = require("express");
const reqFilter = require('./middlewares/middleware');

const route = express.Router();
route.use(reqFilter);

const app = express();

// MiddleWare
// const reqFilter = (req, res, next) => {
//   if (!req.query.age) {
//     res.send("Please Provide your Age");
//   } else if (req.query.age < 18) {
//     res.send("You cannot access this site");
//   } else {
//     next();
//   }
// };

// Using MiddleWares on all routes 

// app.use(reqFilter);

route.get("/", (req, res) => {
  res.send("Welcome to HomePage");
});

app.get("/users", (req, res) => {
  res.send("Welcome to Users Page");
});

app.use('/', route);

app.listen(4040);
