import {
  Component,
  EventEmitter,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Comment } from '../../comment.model';
import { IssueService } from 'src/app/services/issue/issue.service';
import { Issue, IssueToSave } from 'src/app/interfaces/issue';

@Component({
  selector: 'app-user-comments-list',
  templateUrl: './user-comments-list.component.html',
  styleUrls: ['./user-comments-list.component.css'],
})
export class UserCommentsListComponent implements OnChanges {
  constructor(private issue: IssueService) {}
  ngOnChanges(changes: SimpleChanges): void {}
  @Output() commentWasSelected = new EventEmitter<Issue>();
  comments: Issue[] = [];
  ngOnInit(): void {
    this.getData();
  }
  onComSelected(com: Issue) {
    this.commentWasSelected.emit(com);
  }
  onIssueAdded(newIssue: IssueToSave) {
    this.issue.createIssue(newIssue);

    setTimeout(() => this.getData(), 100);
  }

  getData() {
    this.issue.getIssueByProjId().subscribe((data) => {
      console.log('test', data);

      this.comments = data;
      console.log(this.comments);
    });
  }

  filterComments(event: Event) {
    // const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    // if (searchTerm.trim() !== '') {
    //   this.comments = this.comments.filter((comment) => {
    //     const username = comment.userName.trim().toLowerCase();
    //     const topic = comment.topic.trim().toLowerCase();
    //     const priority = comment.prio.trim().toLowerCase();
    //     const content = comment.content.trim().toLowerCase();
    //     return (
    //       username.includes(searchTerm) ||
    //       topic.includes(searchTerm) ||
    //       priority.includes(searchTerm) ||
    //       content.includes(searchTerm)
    //     );
    //   });
    // } else {
    //   this.comments = [
    //     new Comment('User1', 'Topic', 'Prio', 'xd'),
    //     new Comment('User2', 'Topic2', 'Prio2', 'xd2'),
    //     new Comment('User3', 'Topic3', 'Prio3', 'xd3'),
    //   ];
    // }
  }
}
