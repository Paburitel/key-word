import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import {CryptoService} from './crypto.service';
import { UrlService } from './url.service';

@Injectable()
export class HttpService {
  basePath: string;
  constructor(private http: HttpClient, private authService: AuthService, private crypto: CryptoService, private url: UrlService) {
    this.basePath = this.url.basePath;
  }
  private getHeaders() {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${ this.authService.getToken().access_token }`   });
    return { headers: headers };
  }
  getData(url: string) {
    return this.http.get(`${this.basePath}${url}`, this.getHeaders());
  }
  postData(url: string, data: any) {
    return this.http.post(`${this.basePath}${url}`, data, this.getHeaders());
  }
  putData(url: string, data: any): Observable<void> {
    return this.http.put<void>(`${this.basePath}${url}`, data, this.getHeaders());
  }
  deleteData(url: string): Observable<void>  {
    return this.http.delete<void>(`${this.basePath}${url}`, this.getHeaders());
  }
  identify(): Observable<void> {
    return this.http.get<void>(`${this.basePath}/api/userInfo`, this.getHeaders());
  }
  logIn(user: {username: string, password: string }): Observable<void> {
    const payload = {
        username: user.username,
        password: this.crypto.getHashedPassword(user.password),
        client_id: '665935136173-43gdh0vlhohvh21p3u3dv7p0j1i49an7.apps.googleusercontent.com',
        client_secret: 'noCbeZe7A6y-vXoesqtlt4m1',
        grant_type: 'password'
    };
    return this.http.post<void>(`${this.basePath}/api/oauth/token`, payload);
  }
  refreshToken(): Observable<void> {
    const payload = {
      client_id: '665935136173-43gdh0vlhohvh21p3u3dv7p0j1i49an7.apps.googleusercontent.com',
      client_secret: 'noCbeZe7A6y-vXoesqtlt4m1',
      grant_type: 'refresh_token',
      refresh_token: this.authService.getToken().refresh_token
    };
    return this.http.post<void>(`${this.basePath}/api/oauth/token`, payload);
  }
  register(user: {username: string, email: string, password: string}): Observable<void> {
    user.password = this.crypto.getHashedPassword(user.password);
    return this.http.post<void>(`${this.basePath}/api/oauth/reg`, user);
  }
  signOut(): Observable<void> {
    return this.http.delete<void>(`${this.basePath}/api/signout`, this.getHeaders());
  }
  forgotPassword(email: string): Observable<any> {
    return this.http.post<any>(`${this.basePath}/api/forgot`, { email });
  }
  resetPassword(token: string, passwordPlain: string): Observable<any> {
    const password = this.crypto.getHashedPassword(passwordPlain);
    return this.http.post<any>(`${this.basePath}/api/reset`, { password, token });
  }
}
