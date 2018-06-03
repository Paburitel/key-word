import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isCollapsed = false;

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }
  signOut() {
    this.httpService.signOut().subscribe((resp) => {
      this.router.navigate(['/login']);
    }, (err) => { console.log(err); });
  }
}
