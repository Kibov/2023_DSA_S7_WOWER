import { Component, OnInit } from '@angular/core';
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
