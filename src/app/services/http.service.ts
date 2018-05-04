import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient ) { }
  getData(url: string) {
    return this.http.get(url);
  }
  postData(url: string, data: any) {
    return this.http.post(url, data);
  }
  putData(url: string, id: string, data: any): Observable<void> {
    return this.http.put<void>(`${url}/${id}`, data);
  }
  deleteData(url: string, id: string): Observable<void>  {
    return this.http.delete<void>(`${url}/${id}`);
  }
}
