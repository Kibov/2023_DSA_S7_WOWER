import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService, token } from '../user-service.service';
import { User } from '../user';
import { UsserDataService } from '../services/user/usser-data.service';
import { ProjectDataService } from '../services/project/project-data.service';
import { IssueDataService } from '../services/issue/issue-data.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private userData: UsserDataService,
    private _projectData: ProjectDataService,
    private _issueData: IssueDataService
  ) {
    this.user = new User();
  }

  ngOnInit(): void {
    this._projectData.serviceId = null;
    this._projectData.serviceName = null;
    this._issueData.issueId = null;
    this._issueData.issueName = null;
    this.userData.currentUser = null;
    this.userService.userToken = null;
  }

  onSubmit() {
    this.userService.login(this.user).subscribe((result: token) => {
      this.userService.userToken = result.token;
      this.userData.currentUser = this.user.username;
      this.gotoUserList();
    });
  }

  gotoUserList() {
    this.router.navigate(['/users']); // widok na mainmenu jakieś
  }
  // gotoSignUp() {
  //   this.router.navigate(['/signup']);
  // }
}
