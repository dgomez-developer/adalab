'use strict';

var model = require('../models/models');

exports.list_all_tasks = function(request, response) {
  var tasksResponse = new Object();
  tasksResponse.tasks = model.tasksList;
  response.json(tasksResponse);
};

exports.read_a_task = function(request, response) {
  console.log('Get task: '+ request.params.taskId);
  var taskId = request.params.taskId;
  var requestedTask;
  for(var i = model.tasksList.length - 1; i >= 0; i--) {
    if(model.tasksList[i].id == taskId) {
       requestedTask = model.tasksList[i];
       break;
    }
  }
  var taskResponse = new Object();
  taskResponse.task = requestedTask;
  response.json(taskResponse);
};
