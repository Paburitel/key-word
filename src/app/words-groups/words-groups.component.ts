import { Component, OnInit } from '@angular/core';

import { Group } from './words-group.model';
import { Word } from './word.model';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-words-groups',
  templateUrl: './words-groups.component.html',
  styleUrls: ['./words-groups.component.css'],
  providers: [HttpService]
})
export class WordsGroupsComponent implements OnInit {

  fnAddGroup: Function;
  groups: Group[] = [
    new Group('Cats', 'Cats group', [ new Word('cat') , new Word('cats')]),
    new Group('Dogs', 'Dogs group', [new Word('dog') , new Word('dogs')])
  ];

  constructor(private httpService: HttpService) {
  }
  addGroup(group: { name: string, description?: string }) {
    this.groups.push(new Group(group.name, group.description));
  }
  ngOnInit() {
    this.fnAddGroup = (obj) => this.addGroup(obj);
    this.httpService.getData('http://localhost:3000/v0/groups').subscribe((data) => {
      console.log(data);
      // this.groups = data.map((i) => new Group(data.name, data.description, data.words));
    },
      (error) => {
        console.log(error);
      });
  }
  deleteGroup(group: Group) {
    const index = this.groups.findIndex((g) => g === group);
    if (index < 0) {
      return;
    }
    this.groups.splice(index, 1);
  }
}
