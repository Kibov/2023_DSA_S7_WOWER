import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IssueDataService {
  private _issueId!: number;
  private _issueName!: string;

  constructor() {}

  get issueId(): number {
    return this._issueId;
  }

  set issueId(id: number) {
    this._issueId = id;
  }

  get issueName(): string {
    return this._issueName;
  }

  set issueName(name: string) {
    this._issueName = name;
  }
}
