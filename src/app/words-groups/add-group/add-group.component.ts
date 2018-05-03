import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Group } from '../words-group.model';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {
  newGroup: { name: string, description?: string} = {name: ''};
  modalReference: any;
  @Input() addCallBack: Function;
  constructor(private modalService: NgbModal) {  }
  open(content) {
    this.modalReference = this.modalService.open(content);
  }

  ngOnInit() {
  }

  save(group) {
    if (!group.name) {
      return;
    }
    this.addCallBack(group);
    this.newGroup = {name: ''};
    this.modalReference.close();
  }

}
