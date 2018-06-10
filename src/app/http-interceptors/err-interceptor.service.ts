import { Observable } from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class ErrInterceptorService implements HttpInterceptor {

  constructor(private router: Router, private notif: NotificationsService) {}
  startNotify(text: string) {
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
        case 400:
          this.startNotify('Sorry! Something wrong. Try again!');
          break;
        case 404:
          this.startNotify('Not found!');
          break;
        case 500:
          this.startNotify('Sorry! Server error' );
      }
    });
  }

}
