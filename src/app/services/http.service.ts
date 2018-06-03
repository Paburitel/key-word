import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class HttpService {
  basePath = 'http://localhost:3000/';
  constructor(private http: HttpClient, private authService: AuthService ) { }
  private getHeaders() {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${ this.authService.getToken().access_token }`  });
    return { headers: headers };
  }
  getData(url: string) {
    return this.http.get(`${this.basePath}${url}`, this.getHeaders());
  }
  postData(url: string, data: any) {
    return this.http.post(`${this.basePath}${url}`, data, this.getHeaders());
  }
  putData(url: string, id: string, data: any): Observable<void> {
    return this.http.put<void>(`${`${this.basePath}${url}`}/${id}`, data, this.getHeaders());
  }
  deleteData(url: string, id: string): Observable<void>  {
    return this.http.delete<void>(`${`${this.basePath}${url}`}/${id}`, this.getHeaders());
  }
  identify(): Observable<void> {
    return this.http.get<void>(`${this.basePath}api/userInfo`, this.getHeaders());
  }
  logIn(user: {username: string, password: string }): Observable<void> {
    const payload = {
        username: user.username,
        password: user.password,
        client_id: '665935136173-43gdh0vlhohvh21p3u3dv7p0j1i49an7.apps.googleusercontent.com',
        client_secret: 'noCbeZe7A6y-vXoesqtlt4m1',
        grant_type: 'password'
    };
    return this.http.post<void>(`${this.basePath}api/oauth/token`, payload);
  }

  register(user: {username: string, email: string, password: string}): Observable<void> {
    return this.http.post<void>(`${this.basePath}api/oauth/reg`, user);
  }
  signOut(): Observable<void> {
    return this.http.delete<void>(`${this.basePath}api/signout`, this.getHeaders());
  }
}
