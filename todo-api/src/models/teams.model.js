// teams-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
//
// http://mongoosejs.com/docs/populate.html
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const teams = new Schema({
    name: { type: String, required: true },
    members:  [
      {
        _id: {type: Schema.Types.ObjectId},
        user: { type: Schema.Types.ObjectId, ref: 'users'},
        rol: { type: String },
        todos: [ {
          _id: {type: Schema.Types.ObjectId},
          createdBy: { type: Schema.Types.ObjectId, ref: 'users'},
          text: { type: String }
        } ]
      }
    ]
  }, {
    timestamps: true
  });

  return mongooseClient.model('teams', teams);
};
