import { GroupInterface } from './group-interface';

export interface ProjectInterface {
  id: number;
  project_name: string;
  description: string;
  created_at: Date;
  groups: GroupInterface;
}
