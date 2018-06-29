'use strict';

var model = require('../models/models');

exports.list_all_tasks = function(request, response) {
  response.json(model.tasksList);
};

exports.create_a_task = function(request, response) {
  console.log('Create task: ' + JSON.stringify(request.body));
  var task = request.body;
  task.id = model.tasksList[model.tasksList.length - 1].id + 1;
  model.tasksList.push(task);
  response.json(model.tasksList[model.tasksList.length - 1])
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
  response.json(requestedTask)
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
  response.json(task)
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
  response.json({ message: 'Task ' + taskId + ' successfully deleted' })

};
