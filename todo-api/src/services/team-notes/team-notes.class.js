/* eslint-disable no-unused-vars */
class Service {
  constructor (options) {
    this.options = options || {};
    this.Model = options.Model;
    this.Client = options.Client;
  }

  async patch (id, data, params) {

    const todo = {
      text: 'DEMO',
      createdBy: this.Client.Types.ObjectId('5a717099bec5f52424788b53')
    };

    // db.teams.findOneAndUpdate(
    //   {"_id": ObjectId("5a717150bec5f52424788b54")},
    //   {$push: {"members.$[elem].todos": {"text": "DEMO"}}},
    //   {"arrayFilters": ["elem._id": ObjectId("5a7171b4bec5f52424788b58")}] }
    // );

    const res =  await this.Client.connection.db.command({
      update: this.Model.collection.name,
      updates: [
        {
          q: {'_id': this.Client.Types.ObjectId(id)},
          u: {$push: {'members.$[elem].todos': todo}},
          arrayFilters: [{'elem._id': this.Client.Types.ObjectId('5a7171b4bec5f52424788b58')}],
        },
      ],
    });

    const team = this.Model.findById(id);


    return team;
  }

  async remove(id, params){
    const res =  await this.Client.connection.db.command({
      update: this.Model.collection.name,
      updates: [
        {
          q: {'_id': this.Client.Types.ObjectId(id)},
          u: {$pull: {'members.$[elem].todos._id': this.Client.Types.ObjectId('5a7171b4bec5f52424788b58')}},
          arrayFilters: [{'elem._id': this.Client.Types.ObjectId('5a7171b4bec5f52424788b58')}],
        },
      ],
    });

    const team = this.Model.findById(id);
    return team;
  }

}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
