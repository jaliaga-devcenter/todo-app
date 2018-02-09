import request from 'utils/request';

const baseUrl = 'http://localhost:3030';
const usersEndpoint = '/users';
const teamsEndpoint = '/teams';
const loginEndpoint = '/authentication';


export function signup(provider, idToken) {
  const requestURL = `${baseUrl}${usersEndpoint}`;
  const options = postJSONOptions({
    provider,
    idtoken: idToken,
  });
  return request(requestURL, options);
}

export function login(provider, accessToken) {
  const requestURL = `${baseUrl}${loginEndpoint}`;
  const options = postJSONOptions({
    strategy: provider,
    access_token: accessToken,
  });
  return request(requestURL, options);
}

export function getUser(userId = '') {
  const requestURL = `${baseUrl}${usersEndpoint}/${userId}`;
  const options = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  return request(requestURL, options);
}

export function getTeams(teamId = '') {
  const requestURL = `${baseUrl}${teamsEndpoint}/${teamId}`;
  const options = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  return request(requestURL, options);
}


function postJSONOptions(body) {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
}
