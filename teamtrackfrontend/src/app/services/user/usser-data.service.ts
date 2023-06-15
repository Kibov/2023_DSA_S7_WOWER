import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsserDataService {
  private _currentUser!: string;

  public get currentUser(): string {
    return this._currentUser;
  }
  public set currentUser(value: string) {
    this._currentUser = value;
  }

  constructor() {}
}
