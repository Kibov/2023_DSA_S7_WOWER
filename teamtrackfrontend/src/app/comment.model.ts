export class Comment {
  public userName: string;
  public topic: string;
  public prio: string;
  public content: string;
  constructor(userName: string, topic: string, prio: string, content:string){
    this.userName = userName;
    this.topic = topic;
    this.prio = prio;
    this.content = content;
  }
}
