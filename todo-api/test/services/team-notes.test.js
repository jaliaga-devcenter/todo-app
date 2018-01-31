const assert = require('assert');
const app = require('../../src/app');

describe('\'team-notes\' service', () => {
  it('registered the service', () => {
    const service = app.service('team-notes');

    assert.ok(service, 'Registered the service');
  });
});
