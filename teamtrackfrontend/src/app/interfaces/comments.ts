import { Timestamp } from 'rxjs';
import { User } from '../user';
import { Issue } from './issue';

export interface Comments {
  id: number;
  body: string;
  user: User;
  issue: Issue;
  created_at: Date;
}

export interface CommentsPost {
  user_name: string;
  issue_name: string;
  body: string;
}
