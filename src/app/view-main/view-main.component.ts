import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-view-main',
  templateUrl: './view-main.component.html',
  styleUrls: ['./view-main.component.css']
})
export class ViewMainComponent implements OnInit {
  token: any;
  constructor(private httpService: HttpService, private router: Router, private route: ActivatedRoute, private authService: AuthService) { }
  ngOnInit() {
    this.token = this.route.snapshot.data['token'];
    this.authService.setToken(this.token);
  }
}
