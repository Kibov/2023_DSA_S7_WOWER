import { UserInterface } from '../user-service.service';

export interface Issue {
  id: number;
  name: string;
  description: string;
  status: string;
  user: UserInterface;
}

export interface IssueToSave {
  description: string;
  status: string;
  name: string;
  project_id: number;
  user_name: string;
}
