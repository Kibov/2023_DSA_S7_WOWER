import { UserInterface } from '../user-service.service';

export interface Issue {
  id: number;
  description: string;
  status: string;
  user: UserInterface;
}

export interface IssueToSave {
  description: string;
  status: string;
  project_id: number;
  user_id: number;
}
