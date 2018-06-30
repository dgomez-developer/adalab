'use strict';

var model = require('../models/models');

exports.list_all_tasks = function(request, response) {
  var tasksResponse = new Object();
  tasksResponse.tasks = model.tasksList;
  response.json(tasksResponse);
};

exports.create_a_task = function(request, response) {
  console.log('Create task: ' + JSON.stringify(request.body));
  var task = request.body;
  task.id = model.tasksList[model.tasksList.length - 1].id + 1;
  model.tasksList.push(task);
  var taskResponse = new Object();
  taskResponse.task = model.tasksList[model.tasksList.length - 1];
  response.status(201);
  response.json(taskResponse);
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


exports.update_a_task = function(request, response) {
  console.log('Update task: '+ request.params.taskId + ' - ' + JSON.stringify(request.body));
  var taskId = request.params.taskId;
  var task = request.body;
  for(var i = model.tasksList.length - 1; i >= 0; i--) {
    if(model.tasksList[i].id == taskId) {
       model.tasksList[i] = task;
       break;
    }
  }
  var taskResponse = new Object();
  taskResponse.task = task;
  response.json(taskResponse);
};


exports.delete_a_task = function(request, response) {
  console.log('Delete task: ' + request.params.taskId);
  var taskId = request.params.taskId;
  for(var i = model.tasksList.length - 1; i >= 0; i--) {
    if(model.tasksList[i].id == taskId) {
       model.tasksList.splice(i, 1);
       break;
    }
  }
  response.status(204).send();
};
