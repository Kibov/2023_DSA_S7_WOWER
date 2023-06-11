import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectDataService {
  private _serviceId!: number;
  constructor() {}

  get serviceId(): number {
    return this._serviceId;
  }

  set serviceId(id: number) {
    this._serviceId = id;
  }
}
