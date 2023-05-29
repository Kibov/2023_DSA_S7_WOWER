export interface Comment {
  userName: string;
  topic: string;
  prio: string;
  content: string;
}

export class Comment implements Comment {
  constructor(userName: string, topic: string, prio: string, content: string) {
    this.userName = userName;
    this.topic = topic;
    this.prio = prio;
    this.content = content;
  }
}
