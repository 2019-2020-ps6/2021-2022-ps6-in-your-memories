import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../../../../services/user.service";
import {User} from "../../../../models/user.model";

@Component({
  selector: './app-list-form',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})

export class UserListComponent{
  public userList: User[] = []
  constructor(private router: Router, public userService: UserService) {
    this.userService.users$.subscribe((users: User[]) => {
      this.userList = users;
    })
  }


  ajoutUserSelected(user: User): void {
    this.router.navigate(['/user/' + user.id]);
  }

}
