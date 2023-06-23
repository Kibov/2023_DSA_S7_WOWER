import { Component } from '@angular/core';
import { ProjectDataService } from './services/project/project-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TeamTrack';
  constructor(private _projectData: ProjectDataService) {}

  public get showProjectName(): string {
    return this._projectData.serviceName || 'Nothing selected';
  }
}
