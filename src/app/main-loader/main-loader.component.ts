import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/laoder.service';

@Component({
  selector: 'app-main-loader',
  templateUrl: './main-loader.component.html',
  styleUrls: ['./main-loader.component.css']
})
export class MainLoaderComponent implements OnInit {
  isLoader: false;
  constructor(private loaderService: LoaderService) {
    this.loaderService.loaderChangeState.subscribe(
      (data: any) => {
        this.isLoader = data;
      });
  }
  ngOnInit() {
  }
}
