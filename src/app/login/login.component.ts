import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userCred: { userName: string, password: string } = { userName: '', password: ''};
  constructor( private httpService: HttpService, private  authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.deleteToken();
  }
  logIn() {
    this.httpService.logIn(this.userCred).subscribe(
      (res: any) => {
        this.authService.setToken(res);
        this.router.navigate(['/']);
      },
      (err) => { console.log(err); });
  }
}
