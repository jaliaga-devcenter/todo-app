// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const users = new Schema({

    email: {type: String, unique: true},
    password: { type: String },
    username: {type: String, unique: true},

    googleId: { type: String },

  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
