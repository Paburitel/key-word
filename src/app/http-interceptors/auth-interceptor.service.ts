import { Observable } from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private router: Router, private notif: NotificationsService) {}
  startNotify(text: string) {
    this.router.navigate(['/login']);
    this.notif.error(
      'Error',
      text,
      {
        timeOut: 5000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: true,
        maxLength: 50
      }
    );
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
      }
    }, (err: any) => {
      switch (err.status) {
        case 401:
          this.startNotify('You are not authenticated!');
          break;
        case 403:
          this.startNotify('Forbidden or invalid credentials');
      }
    });
  }
}
