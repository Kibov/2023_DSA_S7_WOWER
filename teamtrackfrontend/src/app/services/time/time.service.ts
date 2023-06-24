import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'src/app/user-service.service';
import { Observable } from 'rxjs';
import {
  TimeTable,
  TimeTablePost,
  TimeTableUpdate,
} from 'src/app/interfaces/timetable';
import { IssueDataService } from '../issue/issue-data.service';
import { UsserDataService } from '../user/usser-data.service';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  projId!: number;

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private userData: UsserDataService,
    private issueData: IssueDataService
  ) {}

  private url: string = 'http://127.0.0.1:8080/api/v1/auth/timetable';

  // getAllForIssue
  public getAllForIssue(): Observable<TimeTable[]> {
    const userName = this.userData.currentUser;
    const issueId = this.issueData.issueId;
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
    return this.http.get<TimeTable[]>(
      this.url + '/time?userName=' + userName + '&issueId=' + issueId,
      { headers: header }
    );
  }

  public postTime(time: TimeTableUpdate): Observable<TimeTable> {
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
    time.user_name = this.userData.currentUser;
    time.issue_name = this.issueData.issueName;
    console.log(time);

    return this.http.post<TimeTable>(this.url, time, { headers: header });
  }
}
