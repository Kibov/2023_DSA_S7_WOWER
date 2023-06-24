import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectInterface } from '../../interfaces/project-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../../user-service.service';
import { Project } from '../../project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsServicesService {
  constructor(private http: HttpClient, private userService: UserService) {}
  private url: string = 'http://127.0.0.1:8080/api/v1/auth/projects';

  public getAll(): Observable<ProjectInterface[]> {
    var header = new HttpHeaders();
    header = header.append('Content-Type', 'application/json');
    header = header.append(
      'Acess-Control-Allow-Origin',
      'http://localhost:8080'
    );
    header = header.append(
      'Authorization',
      'Bearer ' + this.userService.userToken
    );

    console.log(header);

    return this.http.get<ProjectInterface[]>(this.url, {
      headers: header,
    });
  }
  public createProject(project: Project) {
    var header = new HttpHeaders();
    header = header.append('Content-Type', 'application/json');
    header = header.append(
      'Acess-Control-Allow-Origin',
      'http://localhost:8080'
    );
    header = header.append(
      'Authorization',
      'Bearer ' + this.userService.userToken
    );
    this.http
      .post(this.url, project, {
        headers: header,
      })
      .subscribe((data) => console.log(data));
  }
}
