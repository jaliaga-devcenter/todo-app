const { authenticate } = require('@feathersjs/authentication').hooks;
const { validateSchema, discard, alterItems, disallow } = require('feathers-hooks-common');
const Ajv = require('ajv');
const { createSchema } = require('./users.schema.js');
const socialuser = require('../../hooks/socialuser.js');



module.exports = {
  before: {
    all: [],
    find: [ authenticate('jwt') ],
    get: [ authenticate('jwt') ],
    create: [  validateSchema(createSchema, Ajv), socialuser() ],
    update: [ disallow() ],
    patch: [  disallow() ],
    remove: [ disallow() ]
  },

  after: {
    all: [
      alterItems(user => { user.id = user._id; }),
      discard('provider', 'googleId', 'createdAt', 'updatedAt', '__v', '_id', 'rol'),
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
