import {Component, Input, OnInit } from '@angular/core';
import {Word} from '../../models/word.model';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ClipboardService} from '../../services/clipboard.service';

@Component({
  selector: 'app-chosen-words',
  templateUrl: './chosen-words.component.html',
  styleUrls: ['./chosen-words.component.css'],
  providers: [ClipboardService]
})
export class ChosenWordsComponent implements OnInit {
  @Input() words: Word[];
  wordsString = '';
  maxWords = 50;
  fnDeleteWord: Function;
  componentInstance: NgbModalRef;
  isCopyText: boolean;
  constructor(private modalService: NgbModal, private clipService: ClipboardService) {
    this.fnDeleteWord = (index, word) => this.deleteWord(index, word);
    this.isCopyText = true;
  }
  ngOnInit() {
  }
  showWords(content) {
    this.wordsString = this.getString();
    this.componentInstance = this.modalService.open(content);
  }
  deleteWord(index, word) {
    this.words.splice(index, 1);
    this.wordsString = this.getString();
  }
  getString() {
    return this.words.map((w) => w.text).join(', ');
  }
  copy(string: string) {
    this.isCopyText = this.clipService.copyTextToClipboard(string);
    if (this.isCopyText) {
      this.componentInstance.close();
    }
  }
}
