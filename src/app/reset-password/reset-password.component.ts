import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpService} from '../services/http.service';
import {AuthService} from '../services/auth.service';
import {Router, ActivatedRoute} from '@angular/router';
import {CryptoService} from '../services/crypto.service';

// TODO: should be deleted
/** temp user
 * username: TestUser,
 * email: nik13nik82@gmail.com
 * password: keywords*/


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  providers: [CryptoService]
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  pwdPattern = '^[a-z0-9_-]{8,18}$';
  token: '';
  constructor(private httpService: HttpService,
              private  authService: AuthService, private router: Router, private crypto: CryptoService, private route: ActivatedRoute) {
    this.resetForm = new FormGroup({
      password: new FormControl('',
        [Validators.required, Validators.pattern(this.pwdPattern)]),
      passwordConfirm: new FormControl('', [Validators.required]),
    }, this.passwordMatchValidator);
  }

  ngOnInit() {
    this.authService.deleteToken();
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });
  }

  private passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value
      ? null : {'mismatch': true};
  }

  submit() {
    this.httpService.resetPassword(this.token, this.resetForm.value.password).subscribe((resp) => {
      if (resp.changed) {
        this.router.navigate(['/login']);
      }
    }, (err) => { console.log(err); });
  }
}
