import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent {
  user: User;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private userService: UserService) {
    this.user = new User();
  }
  onSubmit() {
    //TODO
    //
    // this.userService.save(this.user).subscribe(result => this.signUp());
  }
  signUp() {
    // this.router.navigate(['/users']); // widok na mainmenu jakieś
  }
}
