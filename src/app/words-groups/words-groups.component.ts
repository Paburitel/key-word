import { Component, OnInit } from '@angular/core';

import { Group } from './words-group.model';
import { HttpService } from '../services/http.service';
import { GroupModelService } from '../services/group-model.service';

@Component({
  selector: 'app-words-groups',
  templateUrl: './words-groups.component.html',
  styleUrls: ['./words-groups.component.css'],
  providers: [ HttpService, GroupModelService ]
})
export class WordsGroupsComponent implements OnInit {

  fnAddGroup: Function;
  groups: Group[] = [];

  constructor(private httpService: HttpService, private groupModelService: GroupModelService ) {
  }
  ngOnInit() {
    this.fnAddGroup = (obj) => this.addGroup(obj);
    this.assignGroups();
  }
  addGroup(group: { name: string, description?: string }) {
    this.httpService.postData('v0/groups', group).subscribe((res) => {
      this.assignGroups();
    },
      (error) => { console.log(error); });
  }
  assignGroups() {
    this.httpService.getData('v0/groups').subscribe((resp: { data: any[] }) => {
        this.groups = this.groupModelService.getGroups(resp.data);
      },
      (error) => {
        console.log(error);
      });
  }
  deleteGroup(group: Group) {
    const index = this.groups.findIndex((g) => g._id === group._id);
    if (index < 0) {
      return;
    }
    const url = `v0/groups`;
    this.httpService.deleteData(url, group._id).subscribe((resp: any) => {
        this.assignGroups();
      },
      (error) => {
        console.log(error);
      });
  }
}
