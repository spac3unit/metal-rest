const assert = require('assert');
const app = require('../../src/app');

describe('\'albums\' service', () => {
  it('registered the service', () => {
    const service = app.service('albums');

    assert.ok(service, 'Registered the service');
  });
});
