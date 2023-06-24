import { Data } from '@angular/router';
import { User } from '../user';
import { Issue } from './issue';

export interface TimeTable {
  id: number;
  user: User;
  issue: Issue;
  startedat: Date;
  finishedat: Date;
}

export interface TimeTablePost {
  userName: string;
  issueName: string;
}

export interface TimeTableUpdate {
  user_name: string;
  issue_name: string;
  startedat: string;
  finishedat: string;
}
