const users = require('./users/users.service.js');
const teams = require('./teams/teams.service.js');
const teamMembers = require('./team-members/team-members.service.js');
module.exports = function (app) {
  app.configure(users);
  app.configure(teams);
  app.configure(teamMembers);
};
