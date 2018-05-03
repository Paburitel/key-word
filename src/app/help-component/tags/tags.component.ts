import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input() tag: {text: string};
  @Input() deleteCall: Function;
  @Input() index: number;
  constructor() {}
  ngOnInit() {
  }
  onDelete() {
    this.deleteCall(this.index, this.tag);
  }
}
