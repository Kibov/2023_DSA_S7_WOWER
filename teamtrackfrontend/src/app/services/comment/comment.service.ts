import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'src/app/user-service.service';
import { UsserDataService } from '../user/usser-data.service';
import { IssueDataService } from '../issue/issue-data.service';
import { Observable } from 'rxjs';
import { Comments, CommentsPost } from 'src/app/interfaces/comments';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private userData: UsserDataService,
    private issueData: IssueDataService
  ) {}

  private url: string = 'http://127.0.0.1:8080/api/v1/auth/comments';

  public getAllForIssue(): Observable<Comments[]> {
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
    return this.http.get<Comments[]>(this.url + '/' + issueId, {
      headers: header,
    });
  }

  public postComment(comment: CommentsPost): Observable<Comments> {
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
    comment.user_name = this.userData.currentUser;
    comment.issue_name = this.issueData.issueName;
    console.log(comment);

    return this.http.post<Comments>(this.url, comment, { headers: header });
  }
}
