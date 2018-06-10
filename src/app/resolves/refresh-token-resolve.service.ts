import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../services/http.service';

@Injectable()
export class RefreshTokenResolveService implements Resolve<any>{

  constructor(private httpSevice: HttpService) { }
  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot,
  ): Observable<any> {
    return this.httpSevice.refreshToken();
  }

}
