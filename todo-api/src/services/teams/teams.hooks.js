const { authenticate } = require('@feathersjs/authentication').hooks;
const { discard, disallow, alterItems } = require('feathers-hooks-common');

module.exports = {
  before: {
    all: [
      authenticate('jwt'),
    ],
    find: [],
    get: [],
    create: [discard('members')],
    update: [disallow()],
    patch: [disallow()],
    remove: [disallow()]
  },

  after: {
    all: [
      alterItems(team => {
        team.id = team._id;
        const members = team.members.map(
          member => {
            member.id = member._id;
            delete member._id;
            return member;
          }
        );
        team.members = members;
      }),
      discard('updatedAt', 'createdAt', '__v', '_id', 'team.members._id'),
    ],
    find: [
      discard('members'),
    ],
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
