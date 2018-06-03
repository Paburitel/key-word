import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CryptoService } from '../services/crypto.service';
// TODO: should be deleted
/** temp user
 * username: TestUser,
 * email: nik13nik82@gmail.com
 * password: keywords*/

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ CryptoService ]
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  passwordLength = 8;
  unamePattern = '^[a-z0-9_-]{1,15}$';
  pwdPattern = '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,12}$';
  constructor(private httpService: HttpService, private  authService: AuthService, private router: Router, private crypto: CryptoService) {
    this.userForm  = new FormGroup({
      username: new FormControl('', [Validators.required,
        Validators.minLength(1),
        Validators.pattern(this.unamePattern)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',
        [Validators.required, Validators.minLength(this.passwordLength), Validators.pattern(this.pwdPattern)]),
      passwordConfirm: new FormControl('', [Validators.required,
        Validators.minLength(this.passwordLength)]),
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
      password: this.crypto.getHashedPassword(this.userForm.value.password)
    };
    this.httpService.register(data).subscribe((resp) => {
      console.log(resp);
      this.logIn(data);
    }, (err) => { console.log(err); });
    console.log(this.userForm.value);
  }
  logIn(user: any) {
    this.httpService.logIn({
      username: user.username,
      password: user.password
    }).subscribe(
      (res: any) => {
        this.authService.setToken(res);
        this.router.navigate(['/']);
      },
      (err) => { console.log(err); });
  }
}
