import {Injectable} from '@angular/core'
import {User} from  '../models/user.model'
import {BehaviorSubject} from "rxjs";
import {USER_LIST} from "../mocks/user-list.mock";

@Injectable({
  providedIn: "root"
})

export class UserService{
  public users: User[] = USER_LIST;
  public users$: BehaviorSubject<User[]> = new BehaviorSubject(this.users);

  constructor() {
  }
}