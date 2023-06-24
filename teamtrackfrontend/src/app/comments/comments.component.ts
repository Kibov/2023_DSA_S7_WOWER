import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Comments } from '../interfaces/comments';
import { CommentService } from '../services/comment/comment.service';
import { IssueDataService } from '../services/issue/issue-data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  comments!: Comments[];
  isAddComment!: boolean;
  currentIssueId!: number;

  constructor(
    private _comment: CommentService,
    private issue: IssueDataService
  ) {}

  ngOnInit(): void {
    this.currentIssueId = this.issue.issueId;
    this._comment.getAllForIssue().subscribe((data) => {
      this.comments = data;
    });
  }

  ngAfterViewChecked(): void {
    if (this.currentIssueId != this.issue.issueId) {
      this.currentIssueId = this.issue.issueId;
      this._comment.getAllForIssue().subscribe((data) => {
        this.comments = data;
      });
    }
  }

  showAddComment(): void {
    this.isAddComment = !this.isAddComment;
  }

  isAddedUser(input: boolean): void {
    if (input) {
      this.isAddComment = false;
      this._comment.getAllForIssue().subscribe((data) => {
        this.comments = data;
      });
    }
  }
}
