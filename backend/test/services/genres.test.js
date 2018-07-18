const assert = require('assert');
const app = require('../../src/app');

describe('\'genres\' service', () => {
  it('registered the service', () => {
    const service = app.service('genres');

    assert.ok(service, 'Registered the service');
  });
});
