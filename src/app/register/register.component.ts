import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  unamePattern = '^[a-zA-Z0-9_-]{3,15}$';
  pwdPattern = '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}';
  constructor(private httpService: HttpService, private  authService: AuthService, private router: Router) {
    this.userForm  = new FormGroup({
      username: new FormControl('', [Validators.required,
        Validators.pattern(this.unamePattern)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',
        [Validators.required, Validators.pattern(this.pwdPattern)]),
      passwordConfirm: new FormControl('', [Validators.required]),
    }, this.passwordMatchValidator);
  }

  ngOnInit() {
    this.authService.deleteToken();
  }
  private  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value
      ? null : {'mismatch': true};
  }
  submit() {
    const data = {
      username: this.userForm.value.username,
      email: this.userForm.value.email,
      password: this.userForm.value.password
    };
    this.httpService.register(data).subscribe((resp) => {
      this.router.navigate(['/login']);
      this.userForm.reset();
    }, (err) => { console.log(err); });
  }
}
