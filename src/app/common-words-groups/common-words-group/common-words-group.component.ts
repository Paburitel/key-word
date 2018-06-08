import { Component, OnInit, Input } from '@angular/core';
import { Group } from '../../models/words-group.model';
import { Word } from '../../models/word.model';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../../services/http.service';
import { UrlService } from '../../services/url.service';

@Component({
  selector: 'app-common-words-group',
  templateUrl: './common-words-group.component.html',
  styleUrls: ['./common-words-group.component.css']
})
export class CommonWordsGroupComponent implements OnInit {
  @Input() group: Group;
  componentInstance: NgbModalRef;
  fnDeleteWord: Function;
  words: Word[];
  constructor(private modalService: NgbModal, private httpService: HttpService, private url: UrlService) {
    this.fnDeleteWord = (index, word) => this.deleteWord(index, word);
  }

  ngOnInit() {
  }
  showWords(content) {
    this.words = this.group.words.slice();
    this.componentInstance = this.modalService.open(content);
  }
  addToGroups() {
    const data = {
      name: this.group.name,
      description: this.group.description,
      words: this.words
    }
    this.httpService.postData(this.url.groupsUrl.postGroup, data).subscribe((res) => {
      this.componentInstance.close();
    }, (err) => { console.log(err); });
  }
  deleteWord(index, word) {
    this.words.splice(index, 1);
  }
}
