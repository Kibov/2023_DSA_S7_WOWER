import { Project } from '../project.model';
import { User } from '../user';

export interface GroupInterface {
  id: number;
  name: string;
  groups: Project;
  users: User[];
}

export interface GroupUserInterface {
  groupId: number;
  userId: number;
}
