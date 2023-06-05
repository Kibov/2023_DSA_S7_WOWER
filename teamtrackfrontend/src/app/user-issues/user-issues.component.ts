import { Component, OnInit } from '@angular/core';
import { Comment } from '../comment.model';
import { Issue } from '../interfaces/issue';
@Component({
  selector: 'app-user-issues',
  templateUrl: './user-issues.component.html',
  styleUrls: ['./user-issues.component.css'],
})
export class UserIssuesComponent implements OnInit {
  selectedComment!: Issue;
  constructor() {}
  ngOnInit(): void {
    console.log('xd');
  }
}
