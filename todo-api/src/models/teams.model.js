// teams-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const todo = new Schema({
    text: { type: String, required: true },
    isCompleted: { type: Boolean},
    completeDate: { type: Date},
    createdBy: { type: Schema.Types.ObjectId, ref: 'users' }
  }, {
    timestamps: true
  });

  const user = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'users' },
    role: { type: String, required: true },
    todos: [todo],
    history: [todo]
  });

  const teams = new Schema({
    name: { type: String, required: true },
    users: [user]
  }, {
    timestamps: true
  });

  return mongooseClient.model('teams', teams);
};
