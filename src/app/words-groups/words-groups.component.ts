import { Component, OnInit } from '@angular/core';

import { Group } from '../models/words-group.model';
import { Word } from '../models/word.model';
import { HttpService } from '../services/http.service';
import { GroupModelService } from '../services/group-model.service';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-words-groups',
  templateUrl: './words-groups.component.html',
  styleUrls: ['./words-groups.component.css'],
  providers: [ HttpService, GroupModelService ]
})
export class WordsGroupsComponent implements OnInit {

  fnAddGroup: Function;
  groups: Group[] = [];
  checkedWords: Word[] = [];

  constructor(private httpService: HttpService, private groupModelService: GroupModelService, private url: UrlService) {
  }
  ngOnInit() {
    this.fnAddGroup = (obj) => this.addGroup(obj);
    this.assignGroups();
  }
  addGroup(group: { name: string, description?: string }) {
    this.httpService.postData(this.url.groupsUrl.postGroup, group).subscribe((res) => {
      this.assignGroups();
    },
      (error) => { console.log(error); });
  }
  assignGroups() {
    this.httpService.getData(this.url.groupsUrl.getUserGroups).subscribe((resp: { data: any[] }) => {
        this.groups = this.groupModelService.getGroups(resp.data);
        this.wordChange();
      },
      (error) => {
        console.log(error);
      });
  }
  wordChange() {
    this.checkedWords = this.groupModelService.getCheckedWords(this.groups);
  }
  deleteGroup(group: Group) {
    const index = this.groups.findIndex((g) => g._id === group._id);
    if (index < 0) {
      return;
    }
    this.httpService.deleteData(this.url.groupsUrl.delUserGroup(group._id)).subscribe((resp: any) => {
        this.assignGroups();
      },
      (error) => {
        console.log(error);
      });
  }
}
