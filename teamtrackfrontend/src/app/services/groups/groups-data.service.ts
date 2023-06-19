import { Injectable } from '@angular/core';
import { GroupInterface } from 'src/app/interfaces/group-interface';

@Injectable({
  providedIn: 'root',
})
export class GroupsDataService {
  private _group: GroupInterface[] = [];

  constructor() {}

  get groups(): GroupInterface[] {
    return this._group;
  }

  set groups(group: GroupInterface[]) {
    this._group = group;
  }
}
