import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsserDataService {
  private _currentUser!: string | null;

  public get currentUser(): string {
    return this._currentUser as string;
  }
  public set currentUser(value: string | null) {
    this._currentUser = value;
  }

  constructor() {}
}
