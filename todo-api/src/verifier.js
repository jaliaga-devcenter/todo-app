const makeDebug = require('debug');
const _ = require('lodash');

const { Verifier } = require('@feathersjs/authentication-oauth2');

const debug = makeDebug('feathers-authentication-oauth2:verify');

class OAuth2Verifier extends Verifier {
  constructor (app, options = {}) {
    options.emailField = options.emailField || 'email';
    options.emailFieldInProfile = options.emailFieldInProfile || 'emails[0].value';
    super(app, options);
  }

  verify (req, accessToken, refreshToken, profile, done) {
    debug('Checking credentials');

    const options = this.options;
    const query = {
      $or: [
        { [options.idField]: profile.id },
        { [options.emailField]: _.get(profile, options.emailFieldInProfile) }
      ],
      $limit: 1
    };

    // Find or create the user since they could have signed up via facebook.
    this.service
      .find({ query })
      .then(this._normalizeResult)
      .then(entity => {
        const id = entity[this.service.id];
        const payload = { [`${this.options.entity}Id`]: id };
        done(null, entity, payload);
      })
      .catch(error => error ? done(error) : done(null, error));
  }
}

module.exports = OAuth2Verifier;
