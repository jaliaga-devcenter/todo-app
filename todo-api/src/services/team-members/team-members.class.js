/* eslint-disable no-unused-vars */
class Service {
  constructor (options) {
    this.options = options || {};
    this.teamService = options.teamService || {};
  }

  async patch (id, data, params) {
    const team = await this.teamService.get(id);
    // data.map

    const members = team.members;

    return team;
  }

}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
