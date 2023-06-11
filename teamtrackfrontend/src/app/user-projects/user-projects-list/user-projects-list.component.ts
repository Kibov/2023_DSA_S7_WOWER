import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProjectInterface } from 'src/app/interfaces/project-interface';
import { Project } from 'src/app/project.model';
import { ProjectsServicesService } from 'src/app/services/project/projects-services.service';

@Component({
  selector: 'app-user-projects-list',
  templateUrl: './user-projects-list.component.html',
  styleUrls: ['./user-projects-list.component.css'],
})
export class UserProjectsListComponent implements OnInit {
  constructor(private projectService: ProjectsServicesService) {}
  @Output() projWasSelected = new EventEmitter<ProjectInterface>();

  dateOfCreation: Date = new Date();
  projects: ProjectInterface[] = [
    {
      id: 1,
      project_name: 'Proj1',
      description: 'Proj',
      created_at: this.dateOfCreation,
    },
    {
      id: 2,
      project_name: 'Proj2',
      description: 'Proj2',
      created_at: this.dateOfCreation,
    },
  ];
  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects() {
    this.projectService.getAll().subscribe((data: ProjectInterface[]) => {
      this.projects = data;
    });
  }

  onProjSelected(proj: ProjectInterface) {
    this.projWasSelected.emit(proj);
  }
  onProjAdded(project: Project) {
    this.projectService.createProject(project);
    this.getAllProjects();

    // this.projects.push(project);
  }
}
