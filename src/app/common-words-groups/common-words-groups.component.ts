import { Component, OnInit } from '@angular/core';

import { Group } from '../models/words-group.model';
import { Word } from '../models/word.model';
import { HttpService } from '../services/http.service';
import { GroupModelService } from '../services/group-model.service';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-common-words-groups',
  templateUrl: './common-words-groups.component.html',
  styleUrls: ['./common-words-groups.component.css'],
  providers: [ GroupModelService ]
})
export class CommonWordsGroupsComponent implements OnInit {
  groups: Group[];
  constructor(private httpService: HttpService, private groupModelService: GroupModelService, private url: UrlService) { }

  ngOnInit() {
    this.assignGroups();
  }
  assignGroups() {
    this.httpService.getData(this.url.groupsUrl.getCommonGroups).subscribe((resp: { data: any[] }) => {
        this.groups = this.groupModelService.getGroups(resp.data);
      },
      (error) => {
        console.log(error);
      });
  }

}
