import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm: FormGroup;
  isEmailSent = false;
  constructor(private httpService: HttpService, private  authService: AuthService, private router: Router) {
    this.forgotForm  = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }
  ngOnInit() {
    this.authService.deleteToken();
  }
  submit() {
    this.httpService.forgotPassword(this.forgotForm.value.email).subscribe((resp) => {
      if (resp.emailSent) {
        this.isEmailSent = true;
        this.forgotForm.reset();
      }
    }, (err) => {
      console.log(err);
    });
  }
}
