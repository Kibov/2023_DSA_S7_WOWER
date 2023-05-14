import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/project.model';

@Component({
  selector: 'app-user-projects-list',
  templateUrl: './user-projects-list.component.html',
  styleUrls: ['./user-projects-list.component.css']
})
export class UserProjectsListComponent implements OnInit {
  @Output() projWasSelected = new EventEmitter<Project>();

  dateOfCreation: Date = new Date();
  projects: Project[] = [
    new Project('Proj1','Proj',this.dateOfCreation),
    new Project('Proj2','Proj',this.dateOfCreation)
  ];
  ngOnInit(): void {

  }
  onProjSelected(proj: Project){
    this.projWasSelected.emit(proj);
  }
  onProjAdded(project: Project){
    this.projects.push(project);
  }
}
