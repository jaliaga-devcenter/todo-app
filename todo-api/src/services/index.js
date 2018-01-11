const todos = require('./todos/todos.service.js');
module.exports = function (app) {
  app.configure(todos);
};
