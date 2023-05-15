import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Project } from '../project.model';

@Component({
  selector: 'app-user-projects',
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class UserProjectsComponent implements OnInit {
  selectedProject!: Project;
  constructor(){}
  ngOnInit(): void {

  }
}
