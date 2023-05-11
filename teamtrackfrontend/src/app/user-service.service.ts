import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

export interface token {
  token: string;
}

export interface UserInterface {
  username: string;
  password: string;
  role: string;
}

@Injectable()
export class UserService {
  private usersUrl: string;
  private authUrl: string = 'http://127.0.0.1:8080/api/v1/auth';
  private _userToken!: string;

  public get userToken(): string {
    return this._userToken;
  }
  public set userToken(value: string) {
    this._userToken = value;
  }

  constructor(private http: HttpClient) {
    this.usersUrl = this.authUrl + '/users';
  }

  public findAll(): Observable<UserInterface[]> {
    var header = new HttpHeaders();
    header = header.append('Content-Type', 'application/json');
    header = header.append(
      'Acess-Control-Allow-Origin',
      'http://localhost:8080'
    );
    header = header.append('Authorization', 'Bearer ' + this._userToken);

    console.log(header);

    return this.http.get<UserInterface[]>(this.usersUrl, {
      headers: header,
    });
  }

  public login(user: User) {
    return this.http.post<token>(this.authUrl + '/authenticate', user);
  }

  public register(user: User) {
    return this.http.post<token>(this.authUrl + '/register', user);
  }
}
