const users = require('./users/users.service.js');
const teams = require('./teams/teams.service.js');
const teamMembers = require('./team-members/team-members.service.js');
const teamNotes = require('./team-notes/team-notes.service.js');
module.exports = function (app) {
  app.configure(users);
  app.configure(teams);
  app.configure(teamMembers);
  app.configure(teamNotes);
};
