// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');

  const users = new mongooseClient.Schema({
    email: { type: String },
    name: {
      fullName: { type: String },
      familyName: { type: String },
      givenName: { type: String },
    },
    provider: { type: String },
    googleId: { type: String },
    picture: { type: String },
    rol: { type: String }
  }, {
    timestamps: true
  });
  const model = mongooseClient.model('users', users);

  return model;
};
