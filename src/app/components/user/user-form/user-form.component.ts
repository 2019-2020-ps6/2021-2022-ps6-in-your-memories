import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../../../../services/user.service";
import {User} from "../../../../models/user.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})

export class UserFormComponent implements OnInit{
  public userForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public userService: UserService, private router: Router) {
    this.userForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
    });
  }

  ngOnInit(): void {
  }

  addUser(): void {
    const userToCreate: User = this.userForm.getRawValue() as User;
  }

}
