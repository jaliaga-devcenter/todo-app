// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
//

const logger = require('winston');
const axios = require('axios');

// const googleUserInfoUrl = 'https://www.googleapis.com/oauth2/v3/userinfo?access_token=';
const googleTokenInfoUrl = 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=';
// https://www.googleapis.com/oauth2/v3/userinfo

module.exports = function (options = {}) {  // eslint-disable-line no-unused-vars
  return async function socialHook (hook) {

    const { idtoken, provider } = hook.data;
    hook.data = {};

    if(provider !== 'google'){
      throw new Error('Provider not supported');
    }

    const profile = await getGoogleProfile(idtoken);

    hook.data.email = profile.email;
    hook.data.name = profile.name;
    hook.data.provider = profile.provider;
    hook.data.googleId = profile.googleId;
    hook.data.picture = profile.picture;
    hook.data.rol = 'user';    

    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    logger.info(hook.data);
    return Promise.resolve(hook);
  };
};

// const defaultBody = {
//   azp: '-',
//   aud: '-',
//   sub: 'googelId',
//   hd: 'yourdomain',
//   email: 'youremail@yourdomain.es',
//   email_verified: 'true',
//   at_hash: '--',
//   exp: '1516960182',
//   iss: 'accounts.google.com',
//   jti: '---',
//   iat: '1516956582',
//   name: '---',
//   picture: '---',
//   given_name: 'Javier',
//   family_name: 'Aliaga',
//   locale: 'es',
//   alg: 'RS256',
//   kid: '----'
// };
//

async function getGoogleProfile(idToken) {
  try {
    const url = `${googleTokenInfoUrl}${idToken}`;
    const res = await axios(url);
    const json = res.data;

    const profile = { provider: 'google' };
    profile.googleId = json.sub;
    profile.displayName = json.name;
    profile.name = { fullName: json.name,
      familyName: json.family_name,
      givenName: json.given_name };
    profile.email =  json.email;
    profile.picture = json.picture;

    return(profile);
  } catch(e) {
    throw e;
  }

}
