import { Injectable } from '@angular/core';
import { Group } from '../words-groups/words-group.model';
import { Word } from '../words-groups/word.model';

@Injectable()
export class GroupModelService {

  constructor() { }
  getGroups(group: any) {
    return group.map((gr) => {
      const tempGroup = new Group(gr.name, gr._id, gr.description);
      tempGroup.words = gr.words && Array.isArray(gr.words) ? gr.words.map((w) => new Word(w.text)) : [];
      return tempGroup;
    });
  }
}
