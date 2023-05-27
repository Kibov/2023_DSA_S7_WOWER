import {
  Component,
  EventEmitter,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Comment } from '../../comment.model';

@Component({
  selector: 'app-user-comments-list',
  templateUrl: './user-comments-list.component.html',
  styleUrls: ['./user-comments-list.component.css'],
})
export class UserCommentsListComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {}
  @Output() commentWasSelected = new EventEmitter<Comment>();
  comments: Comment[] = [
    new Comment('User1', 'Topic', 'Prio', 'xd'),
    new Comment('User2', 'Topic2', 'Prio2', 'xd2'),
    new Comment('User3', 'Topic3', 'Prio3', 'xd3'),
  ];
  ngOnInit(): void {}
  onComSelected(com: Comment) {
    this.commentWasSelected.emit(com);
  }
  onIssueAdded(comment: Comment) {
    this.comments.push(comment);
  }

  filterComments(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    if (searchTerm.trim() !== '') {
      this.comments = this.comments.filter((comment) => {
        const username = comment.userName.trim().toLowerCase();
        const topic = comment.topic.trim().toLowerCase();
        const priority = comment.prio.trim().toLowerCase();
        const content = comment.content.trim().toLowerCase();
        return (
          username.includes(searchTerm) ||
          topic.includes(searchTerm) ||
          priority.includes(searchTerm) ||
          content.includes(searchTerm)
        );
      });
    } else {
      this.comments = [
        new Comment('User1', 'Topic', 'Prio', 'xd'),
        new Comment('User2', 'Topic2', 'Prio2', 'xd2'),
        new Comment('User3', 'Topic3', 'Prio3', 'xd3'),
      ];
    }
  }
}
