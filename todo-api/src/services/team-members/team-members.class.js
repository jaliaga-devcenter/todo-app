/* eslint-disable no-unused-vars */
class Service {
  constructor (options) {
    this.options = options || {};
    this.Model = options.Model;
  }

  async patch (id, data, params) {
    const team = await this.Model.findByIdAndUpdate(id,{$push: {members: {$each: data}}}, {new: true});
    return team;
  }

  async remove(id, params){
    const team = await this.Model.findByIdAndUpdate(id,{$pull: {members: { _id: params.query.member }}}, {new: true});
    return team;
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
