'use strict';

var model = require('../models/models');

exports.list_all_tasks = function(request, response) {
  var tasksResponse = new Object();
  tasksResponse.tasks = model.tasksList;
  response.json(tasksResponse);
};
