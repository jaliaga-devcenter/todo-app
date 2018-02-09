const authentication = require('@feathersjs/authentication');
const jwt = require('@feathersjs/authentication-jwt');

const oauth2 = require('@feathersjs/authentication-oauth2');
//const GoogleStrategy = require('passport-google-oauth20');
const GoogleTokenStrategy = require('passport-google-token').Strategy;
const Verifier = require('./verifier');
const constants = require('./constants');

module.exports = function (app) {
  const config = app.get('authentication');

  // Set up authentication with the secret
  app.configure(authentication(config));
  app.configure(jwt());

  app.configure(oauth2(Object.assign({
    name: 'google',
    Strategy: GoogleTokenStrategy,
    Verifier: Verifier,
  }, config.google)));

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service('authentication').hooks({
    before: {
      create: [
        authentication.hooks.authenticate(config.strategies),
        context => {
          context.params.payload = context.params.payload || {};
          context.params.payload.userId = context.params.user.id;
          context.params.payload.rol = context.params.user.rol || constants.USER_ROL;
          context.params.payload.email = context.params.user.email;
        }
      ],
      remove: [
        authentication.hooks.authenticate('jwt')
      ]
    },
    after: {
      create: [ ]
    }
  });
};
