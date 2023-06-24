import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserIssuesComponent } from './user-issues/user-issues.component';
import { UserProjectsComponent } from './user-projects/user-projects.component';
import { TimeComponent } from './time/time.component';
import { GroupsDisplayComponent } from './groups-display/groups-display.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'login1', component: UserFormComponent },
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'signup', component: UserSignUpComponent },
  { path: 'issues', component: UserIssuesComponent, pathMatch: 'full' },
  { path: 'projects', component: UserProjectsComponent },
  { path: 'groups', component: GroupsDisplayComponent },
  { path: '', component: TimeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
