export class Project {
  public project_name: string;
  public description: string;
  constructor(name: string, description: string) {
    this.project_name = name;
    this.description = description;
  }
}
