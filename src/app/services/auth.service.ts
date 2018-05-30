import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private tokenKey = 'kw_token';
  constructor() { }
  setToken(token: any) {
    localStorage.setItem(this.tokenKey, JSON.stringify(token));
  }
  getToken() {
    return JSON.parse(localStorage.getItem(this.tokenKey));
  }
  deleteToken() {
    localStorage.removeItem(this.tokenKey);
  }
  isLoggedIn() {
    return !!this.getToken();
  }
}
