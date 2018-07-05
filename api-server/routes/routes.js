'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/controller');

  app.route('/tasks')
    .get(todoList.list_all_tasks);
  app.route('/task')
    .post(todoList.create_a_task);

  app.route('/task/:taskId')
    .get(todoList.read_a_task)
};
