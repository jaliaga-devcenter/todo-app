const todos = require('./todos/todos.service.js');
const users = require('./users/users.service.js');
const teams = require('./teams/teams.service.js');
module.exports = function (app) {
  app.configure(todos);
  app.configure(users);
  app.configure(teams);
};
