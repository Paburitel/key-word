import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private tokenKey = 'kw_token';
  private saveToken: boolean;
  private tempToken: any = null;
  constructor() {
    this.saveToken = !!localStorage.getItem(this.tokenKey);
  }
  rememberMe(flag: boolean) {
    this.saveToken = flag;
  }
  setToken(token: any) {
    if (this.isSaveToken()) {
      this.tempToken = null;
      localStorage.setItem(this.tokenKey, JSON.stringify(token));
    } else {
      this.deleteToken();
      this.tempToken = token;
    }
  }
  getToken() {
    return this.saveToken ? JSON.parse(localStorage.getItem(this.tokenKey)) : this.tempToken;
  }
  deleteToken() {
    this.saveToken = false;
    this.tempToken = null;
    localStorage.removeItem(this.tokenKey);
  }
  isLoggedIn() {
    return this.saveToken ? !!this.getToken() : !!this.tempToken;
  }
  isSaveToken() {
    return this.saveToken;
  }
}
