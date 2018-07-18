// Initializes the `albums` service on path `/albums`
const createService = require('feathers-mongodb');
const hooks = require('./albums.hooks');

module.exports = function(app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = {
    paginate,
  };
  // Initialize our service with any options it requires
  app.use('/albums', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('albums');

  mongoClient.then(db => {
    service.Model = db.collection('albums');

    // get all unique "genre" fields and add data to result response object
    service.Model.distinct('genre').then(data => {
      service.hooks({
        after: {
          all(context) {
            context.result.genresList = data;
          },
        },
      });
    });
  });
  service.hooks(hooks);
};
