import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Project } from '../project.model';
import { ProjectInterface } from '../interfaces/project-interface';
import { Router } from '@angular/router';
import { IssueService } from '../services/issue/issue.service';

@Component({
  selector: 'app-user-projects',
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class UserProjectsComponent implements OnInit {
  selectedProject!: Project;
  constructor(private router: Router, private issue: IssueService) {}
  ngOnInit(): void {}

  outputProject(proj: ProjectInterface) {
    console.log(proj);
    this.issue.projId = proj.id;
    this.router.navigate(['/issues']);
  }
}
