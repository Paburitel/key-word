import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient, private authService: AuthService ) { }
  private getHeaders() {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${ this.authService.getToken().access_token }`  });
    return { headers: headers };
  }
  getData(url: string) {
    return this.http.get(url, this.getHeaders());
  }
  postData(url: string, data: any) {
    return this.http.post(url, data, this.getHeaders());
  }
  putData(url: string, id: string, data: any): Observable<void> {
    return this.http.put<void>(`${url}/${id}`, data, this.getHeaders());
  }
  deleteData(url: string, id: string): Observable<void>  {
    return this.http.delete<void>(`${url}/${id}`, this.getHeaders());
  }
  identify() {
    return this.http.get('http://localhost:3000/api/userInfo', this.getHeaders());
  }
  logIn(user: {userName: string, password: string }) {
    const payload = {
        username: user.userName,
        password: user.password,
        client_id: '665935136173-43gdh0vlhohvh21p3u3dv7p0j1i49an7.apps.googleusercontent.com',
        client_secret: 'noCbeZe7A6y-vXoesqtlt4m1',
        grant_type: 'password'
    };
    return this.http.post('http://localhost:3000/api/oauth/token', payload);
  }
}
