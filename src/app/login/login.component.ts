import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  remember: boolean;
  constructor( private httpService: HttpService, private  authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    this.remember = false;
  }
  ngOnInit() {
    this.authService.deleteToken();
  }
  submit() {
      this.httpService.logIn({
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      }).subscribe(
        (res: any) => {
          this.authService.rememberMe(this.remember);
          this.authService.setToken(res);
          this.router.navigate(['/']);
        },
        (err) => {
          this.authService.deleteToken();
          console.log(err);
        });
  }
}
