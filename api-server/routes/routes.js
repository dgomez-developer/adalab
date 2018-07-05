'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/controller');

  app.route('/hello')
    .get(todoList.sayHello);

};
