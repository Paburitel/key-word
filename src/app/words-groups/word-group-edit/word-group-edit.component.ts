import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Group } from '../../models/words-group.model';
import { HttpService } from '../../services/http.service';
import { UrlService } from '../../services/url.service';
@Component({
  selector: 'app-word-group-edit',
  templateUrl: './word-group-edit.component.html',
  styleUrls: ['./word-group-edit.component.css'],
  providers: []
})
export class WordGroupEditComponent implements OnInit {
  @Input() group: Group;
  @Output() shouldEditedGroup = new EventEmitter<Array<Object>>();
  editGroup: Group;
  fnDeleteWord: Function;
  modalReference: any;
  AddedWord: string;

  constructor(private modalService: NgbModal, private httpService: HttpService, private url: UrlService) {
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
    this.editGroup = new Group(this.group.name, this.group._id, this.group.description, this.group.words);
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
    const data = {
      name: group.name,
      description: group.description,
      words: group.words
    };
    console.log(data);
    this.httpService.putData(this.url.groupsUrl.putUserGroup(group._id), data).subscribe((resp: any) => {
      this.shouldEditedGroup.emit(group);
    }, (error) => {
      console.log(error);
    });
    this.modalReference.close();
  }
}
