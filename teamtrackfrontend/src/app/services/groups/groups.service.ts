import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  GroupInterface,
  GroupInterfacePost,
  GroupUserInterface,
} from 'src/app/interfaces/group-interface';
import { UserService } from 'src/app/user-service.service';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  constructor(private http: HttpClient, private userService: UserService) {}

  private url: string = 'http://127.0.0.1:8080/api/v1/auth/group';

  public getGroups(): Observable<GroupInterface[]> {
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
    return this.http.get<GroupInterface[]>(this.url, { headers: header });
  }

  public postGroups(group: GroupInterfacePost): Observable<GroupInterface> {
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
    return this.http.post<GroupInterface>(this.url, group, { headers: header });
  }

  public postGroupUsers(
    group: GroupUserInterface
  ): Observable<GroupUserInterface> {
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
    return this.http.post<GroupUserInterface>(this.url + 'user', group, {
      headers: header,
    });
  }
}
