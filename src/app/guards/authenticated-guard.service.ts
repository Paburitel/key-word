import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpService } from '../services/http.service';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private httpService: HttpService) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
