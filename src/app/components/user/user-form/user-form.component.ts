import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../../../../services/user.service";
import {User} from "../../../../models/user.model";

@Component({
  selector: 'app-quiz-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})

export class UserFormComponent implements OnInit{
  //public userList: User[] = []
  constructor(private router: Router, public userService: UserService) {
    /*this.userService.users$.subscribe((users: User[]) => {
      this.user = users;
    })*/
  }

  ngOnInit(): void {
  }

  ajoutUserSelected(user: User): void {
    this.router.navigate(['/user/' + user.id]);
  }

}
