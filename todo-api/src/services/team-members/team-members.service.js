// Initializes the `teamMembers` service on path `/team-members`
const createService = require('./team-members.class.js');

const hooks = require('./team-members.hooks');

module.exports = function (app) {
  const teamService = app.service('teams');
  const paginate = app.get('paginate');

  const options = {
    name: 'team-members',
    paginate,
    teamService
  };

  // Initialize our service with any options it requires
  app.use('/team-members', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('team-members');

  service.hooks(hooks);
};
