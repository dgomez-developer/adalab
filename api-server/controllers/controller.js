'use strict';

var model = require('../models/models');

exports.sayHello = function(request, response) {
  var tasksResponse = new Object();
  tasksResponse.message = "Hello, I am your nightmare :P";
  response.json(tasksResponse);
};
