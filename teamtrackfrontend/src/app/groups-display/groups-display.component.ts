import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  GroupInterface,
  GroupInterfacePost,
} from '../interfaces/group-interface';
import { GroupsService } from '../services/groups/groups.service';
import { GroupsDataService } from '../services/groups/groups-data.service';

@Component({
  selector: 'app-groups-display',
  templateUrl: './groups-display.component.html',
  styleUrls: ['./groups-display.component.css'],
})
export class GroupsDisplayComponent implements OnInit {
  @ViewChild('groupName') groupName!: ElementRef;

  public items: GroupInterface[] = [];
  isAddGroup = false;

  constructor(
    private _groups: GroupsService,
    private groupData: GroupsDataService
  ) {}
  ngOnInit(): void {
    this.getData();
  }
  addGroup() {
    this.isAddGroup = !this.isAddGroup;
  }

  getData() {
    this._groups.getGroups().subscribe((data: GroupInterface[]) => {
      this.items = data;
      this.groupData.groups = data;
    });
  }

  saveGroup() {
    const toAdd: GroupInterfacePost = {
      name: this.groupName.nativeElement.value,
    };
    this._groups.postGroups(toAdd).subscribe((data) => {
      this.getData();
      this.isAddGroup = false;
    });
  }
}
