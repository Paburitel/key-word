import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Group } from '../words-group.model';
import { Word } from '../word.model';

@Component({
  selector: 'app-word-group-edit',
  templateUrl: './word-group-edit.component.html',
  styleUrls: ['./word-group-edit.component.css']
})
export class WordGroupEditComponent implements OnInit {
  @Input() group: Group;
  @Output() shouldEditedGroup = new EventEmitter<Array<Object>>();
  wordEdit: {}[];
  editGroup: Group;
  fnDeleteWord: Function;
  modalReference: any;
  AddedWord: string;

  constructor(private modalService: NgbModal) {
  }
  open(content) {
    this.editGroup.words = this.group.words.slice(0);
    this.editGroup.name = this.group.name;
    this.editGroup.description = this.group.description;
    this.AddedWord = '';
    this.modalReference = this.modalService.open(content);
  }
  ngOnInit() {
    this.fnDeleteWord = (index, word) => this.deleteWord(index, word);
    this.editGroup = new Group(this.group.name, this.group.description, this.group.words);
  }
  deleteWord(index: number, word: Object) {
    this.editGroup.words.splice(index, 1);
  }
  addWord(word: string) {
    if (!word) {
      return;
    }
    this.editGroup.wordsStr = word;
    this.AddedWord = '';
  }
  save(group) {
    this.shouldEditedGroup.emit(group);
    this.modalReference.close();
  }

  private isSameWord(word: string, words: {}[]) {
    return words.some((item: Word) => word === item.text);
  }
}
