
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

import { Group } from '../../models/words-group.model';

@Component({
  selector: 'app-word-group',
  templateUrl: './word-group.component.html',
  styleUrls: ['./word-group.component.css']
})
export class WordGroupComponent implements OnInit {
  @Input() group: Group;
  @Output() shouldDeleteGroup = new EventEmitter<Group>();
  @Output() wordCheck = new EventEmitter<void>();
  checkAllModel: boolean;
  checkAll(flag: boolean) {
    this.group.setCheck(flag);
    this.wordCheck.emit();
  }
  constructor() {  }

  ngOnInit() {
  }
  onGroupChange(event) {
    this.group.words = event.words;
    this.group.name = event.name;
    this.group.description = event.description;
  }
  checkWord(flag: boolean) {
    this.wordCheck.emit();
  }
  deleteGroup(event) {
    if (event) {
      this.shouldDeleteGroup.emit(this.group);
    }
  }
}
