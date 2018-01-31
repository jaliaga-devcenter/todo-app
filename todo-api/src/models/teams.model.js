// teams-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
//
// http://mongoosejs.com/docs/populate.html
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const todo = new Schema({
    createdBy: { type: Schema.Types.ObjectId, ref: 'users'},
    text: { type: String }
  });

  const member = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users'},
    rol: { type: String },
    todos: [ todo ]
  });

  const teams = new Schema({
    name: { type: String, required: true },
    members:  [member]
  }, {
    timestamps: true
  });

  return mongooseClient.model('teams', teams);
};
