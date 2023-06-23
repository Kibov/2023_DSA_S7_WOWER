import { Component, OnInit } from '@angular/core';
import { Issue } from '../interfaces/issue';
import { ProjectDataService } from '../services/project/project-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-issues',
  templateUrl: './user-issues.component.html',
  styleUrls: ['./user-issues.component.css'],
})
export class UserIssuesComponent implements OnInit {
  selectedComment!: Issue;
  constructor(
    private router: Router,
    private _projectData: ProjectDataService
  ) {}
  ngOnInit(): void {
    if (!this._projectData.serviceId) {
      this.router.navigateByUrl('/projects');
    }
  }
}
