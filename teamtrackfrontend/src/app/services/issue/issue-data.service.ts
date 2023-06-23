import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IssueDataService {
  private _issueId!: number | null;
  private _issueName!: string | null;

  constructor() {}

  get issueId(): number {
    return this._issueId as number;
  }

  set issueId(id: number | null) {
    this._issueId = id;
  }

  get issueName(): string {
    return this._issueName as string;
  }

  set issueName(name: string | null) {
    this._issueName = name;
  }
}
