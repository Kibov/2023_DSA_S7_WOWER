import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './user-service.service';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserIssuesComponent } from './user-issues/user-issues.component';
import { UserCommentsComponent } from './user-issues/user-comments-list/user-comments/user-comments.component';
import { UserCommentsListComponent } from './user-issues/user-comments-list/user-comments-list.component';
import { UserAddingCommentsComponent } from './user-issues/user-adding-comments/user-adding-comments.component';
import { UserProjectsComponent } from './user-projects/user-projects.component';
import { UserProjectsListComponent } from './user-projects/user-projects-list/user-projects-list.component';
import { UserAddingProjectsComponent } from './user-projects/user-adding-projects/user-adding-projects.component';
import { UserProjectComponent } from './user-projects/user-projects-list/user-project/user-project.component';
import { CommentsDetailsComponent } from './user-issues/comments-details/comments-details.component';
import { CommentsComponent } from './comments/comments.component';
import { TimeComponent } from './time/time.component';
import { AddCommentComponent } from './comments/add-comment/add-comment.component';
import { GroupsDisplayComponent } from './groups-display/groups-display.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    UserLoginComponent,
    UserSignUpComponent,
    UserIssuesComponent,
    UserCommentsComponent,
    UserCommentsListComponent,
    UserAddingCommentsComponent,
    UserProjectsComponent,
    UserProjectsListComponent,
    UserAddingProjectsComponent,
    UserProjectComponent,
    CommentsDetailsComponent,
    CommentsComponent,
    TimeComponent,
    AddCommentComponent,
    GroupsDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
