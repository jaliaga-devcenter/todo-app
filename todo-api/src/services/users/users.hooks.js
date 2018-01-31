const { authenticate } = require('@feathersjs/authentication').hooks;
const { validateSchema } = require('feathers-hooks-common');
const Ajv = require('ajv');
const { createSchema } = require('./users.schema.js');
const socialuser = require('../../hooks/socialuser.js');



module.exports = {
  before: {
    all: [],
    find: [ authenticate('jwt') ],
    get: [ authenticate('jwt') ],
    create: [  validateSchema(createSchema, Ajv), socialuser() ],
    update: [  authenticate('jwt') ],
    patch: [  authenticate('jwt') ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
