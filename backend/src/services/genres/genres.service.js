// Initializes the `genres` service on path `/genres`
const createService = require('feathers-mongodb');
const hooks = require('./genres.hooks');

module.exports = function(app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/genres', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('genres');

  mongoClient.then(db => {
    service.Model = db.collection('albums');
    service.Model.distinct('genre').then(data => {
      service.hooks({
        after: {
          all(context) {
            context.result.data = data;
          },
        },
      });
    });
  });

  service.hooks(hooks);
};
