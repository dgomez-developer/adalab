var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// When a route is used, then return 404
// app.use(function(req, res) {
//   res.status(404).send({url: req.originalUrl + ' not found'})
// });
var routes = require('./routes/routes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
