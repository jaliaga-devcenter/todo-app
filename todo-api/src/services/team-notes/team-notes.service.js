// Initializes the `team-notes` service on path `/team-notes`
const createService = require('./team-notes.class.js');
const hooks = require('./team-notes.hooks');

module.exports = function (app) {

  const paginate = app.get('paginate');
  const mongooseClient = app.get('mongooseClient');
  const Model = mongooseClient.model('teams');

  const options = {
    name: 'team-notes',
    paginate,
    Model,
    Client: mongooseClient
  };

  // Initialize our service with any options it requires
  app.use('/team-notes', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('team-notes');

  service.hooks(hooks);
};
