// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
//

const logger = require('winston');

const googleUserInfoUrl = 'https://www.googleapis.com/oauth2/v3/userinfo?access_token=';
const googleTokenInfoUrl = 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=';
// https://www.googleapis.com/oauth2/v3/userinfo

// ya29.GlxOBavi7K3uHMbNWo01TmnIGXGCP9S77cEo_wdms-5zqPJFhAqN1vng-h6sEzmBWc0H5zlE9J50Y3FHfr4z_ptSjyAYGWuewUW_VuZ8OBJk4_LkMApTGE2w_V4AkQ

module.exports = function () {
  return function (hook) {
    // The user email
    const { accessToken, provider } = hook.data;
    hook.data = {};
    if(provider !== 'google'){
      throw new Error('Provider not supported');
    }
    const profile = getGoogleProfile(accessToken);

    hook.data.email = profile.email;
    hook.data.name = profile.name;
    hook.data.provider = profile.provider;
    hook.data.googleId = profile.googleId;

    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    logger.info(hook.data);
    return Promise.resolve(hook);
  };
};

const defaultBody = {
  azp: '-',
  aud: '-',
  sub: 'googelId',
  hd: 'yourdomain',
  email: 'youremail@yourdomain.es',
  email_verified: 'true',
  at_hash: '--',
  exp: '1516960182',
  iss: 'accounts.google.com',
  jti: '---',
  iat: '1516956582',
  name: '---',
  picture: '---',
  given_name: 'Javier',
  family_name: 'Aliaga',
  locale: 'es',
  alg: 'RS256',
  kid: '----'
};

function getGoogleProfile(accessToken, idToken) {
  try {
    let json = defaultBody;

    let profile = { provider: 'google' };
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
