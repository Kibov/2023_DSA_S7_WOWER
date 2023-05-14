import { Component, EventEmitter, Output } from '@angular/core';
import { Comment } from '../../comment.model';

@Component({
  selector: 'app-user-comments-list',
  templateUrl: './user-comments-list.component.html',
  styleUrls: ['./user-comments-list.component.css']
})
export class UserCommentsListComponent {
  @Output() commentWasSelected = new EventEmitter<Comment>();
  comments: Comment[] = [
    new Comment('User1','Topic','Prio','xd'),
    new Comment('User2','Topic2','Prio2','xd2'),
    new Comment('User3','Topic3','Prio3', "xd3")
  ];
  ngOnInit(): void {

  }
  onComSelected(com: Comment){
    this.commentWasSelected.emit(com);
  }
  onIssueAdded(comment: Comment){
    this.comments.push(comment);
  }

}
