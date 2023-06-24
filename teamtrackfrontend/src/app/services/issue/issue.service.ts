import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Issue, IssueToSave } from 'src/app/interfaces/issue';
import { UserService } from 'src/app/user-service.service';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  projId!: number;

  constructor(private http: HttpClient, private userService: UserService) {}

  private url: string = 'http://127.0.0.1:8080/api/v1/auth/issue';

  // getAll
  public getAllIssues(): Observable<Issue[]> {
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
    return this.http.get<Issue[]>(this.url, { headers: header });
  }

  public getIssueById(id: number): Observable<Issue[]> {
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
    return this.http.get<Issue[]>(this.url + '/' + id, { headers: header });
  }

  public getIssueByProjId(): Observable<Issue[]> {
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
    return this.http.get<Issue[]>(this.url + '/proj/' + this.projId, {
      headers: header,
    });
  }

  public createIssue(issue: IssueToSave) {
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
      .post(this.url, issue, { headers: header })
      .subscribe((data) => console.log(data));
  }

  // editUser
  // update
}
