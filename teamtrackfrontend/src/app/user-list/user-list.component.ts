import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserInterface, UserService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  user!: User;
  users!: UserInterface[];
  addUser!: boolean;

  constructor(private userService: UserService) {
    this.user = new User();
  }

  ngOnInit() {
    this.addUser = false;
    this.getUsers();
  }

  getUsers(): void {
    this.userService.findAll().subscribe((data) => {
      this.users = data;
    });
  }

  add(): void {
    console.log(this.user);
    const toSave = this.user;
    this.user = new User();
    this.userService.register(toSave).subscribe((data) => this.getUsers());
  }
}
