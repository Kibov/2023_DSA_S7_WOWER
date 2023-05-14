export class Project {
  public nameOfProj: string;
  public description: string;
  public dateOfStart: Date;
  constructor(name: string, description: string, dateOfStart: Date){
    this.nameOfProj = name;
    this.description = description;
    this.dateOfStart = dateOfStart;
  }
}
