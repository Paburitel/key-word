import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

import { Group } from '../words-group.model';

@Component({
  selector: 'app-word-group',
  templateUrl: './word-group.component.html',
  styleUrls: ['./word-group.component.css']
})
export class WordGroupComponent implements OnInit {
  @Input() group: Group;
  @Output() shouldDeleteGroup = new EventEmitter<Group>();
  checkAllModel: boolean;
  checkAll(flag: boolean) {
    this.group.setCheck(flag);
  }
  constructor() {  }

  ngOnInit() {
  }
  onGroupChange(event) {
    this.group.words = event.words;
    this.group.name = event.name;
    this.group.description = event.description;
  }
  deleteGroup(event) {
    if (event) {
      this.shouldDeleteGroup.emit(this.group);
    }
  }
}
