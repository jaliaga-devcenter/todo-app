import request from 'utils/request';

const baseUrl = 'http://localhost:3030';
const users = '/users';


export function signup(provider, idToken) {
  const requestURL = `${baseUrl}${users}`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      provider,
      idtoken: idToken,
    }),
  };
  return request(requestURL, options);
}
