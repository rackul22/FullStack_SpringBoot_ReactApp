import axios from 'axios';
import { API_URL } from '../../Constants';

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

class AuthenticationService {
  executeBasicAuthenticationService(username, password) {
    return axios.get(`${API_URL}/basicauth`, {
      headers: {
        authorization: this.createBasicAuthToken(username, password),
      },
    });
  }

  executeJwtAuthenticationService(username, password) {
    return axios.post(`${API_URL}/authenticate`, {
      username,
      password,
    });
  }

  createBasicAuthToken(username, password) {
    return ' Basic ' + window.btoa(username + ':' + password);
  }

  registerSuccessfulLogin(username, password) {
    //console.log('register success');
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    this.setupAxiosInterceptor(this.createBasicAuthToken(username, password));
  }

  registerSuccessfulLoginForJwt(username, token) {
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    this.setupAxiosInterceptor(this.createJWTToken(token));
  }

  createJWTToken(token) {
    return 'Bearer ' + token;
  }

  logout() {
    sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) {
      return false;
    } else {
      return true;
    }
  }

  getLoggedInUsername() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) {
      return '';
    } else {
      return user;
    }
  }

  setupAxiosInterceptor(token) {
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn) {
        config.headers.authorization = token;
      }
      return config;
    });
  }
}

export default new AuthenticationService();
