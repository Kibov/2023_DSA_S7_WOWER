import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  user: User;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private userService: UserService) {
    this.user = new User();
  }

  onSubmit() {
    //TODO
    // this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    // this.router.navigate(['/users']); // widok na mainmenu jakieś
  }
  gotoSignUp(){
    this.router.navigate(['/signup']);
  }
}
