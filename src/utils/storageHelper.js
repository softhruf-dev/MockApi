
export function setRefreshToken(refreshToken) {
  window.localStorage.setItem('refresh_token', refreshToken);
}
export function getRefreshToken() {
  return window.localStorage.getItem('refresh_token');
}
export function setToken(token) {
  window.localStorage.setItem('access_token', token);
}
export function getToken() {
  return window.localStorage.getItem('access_token');
}
export function setAuth(auth) {
  window.localStorage.setItem('auth', JSON.stringify(auth));
}
export function getAuth() {
  let authJSON = window.localStorage.getItem('auth');
  if (authJSON) {
    return JSON.parse(authJSON);
  } else return null;
}

export function setAppVars(appVars) {
  window.localStorage.setItem('qn-vue-appVars', JSON.stringify(appVars));
}
export function getAppVars() {
  let appVarsJSON = window.localStorage.getItem('qn-vue-appVars');
  if (appVarsJSON) {
    return JSON.parse(appVarsJSON);
  } else return null;
}

export function clearStorage() {
  window.localStorage.removeItem('access_token');
  window.localStorage.removeItem('refresh_token');
  window.localStorage.removeItem('auth');
}
export default {
  clearStorage,
  setAuth,
  getAuth,
  setToken,
  getToken,
  setAppVars,
  getAppVars,
  setRefreshToken,
  getRefreshToken,
};
