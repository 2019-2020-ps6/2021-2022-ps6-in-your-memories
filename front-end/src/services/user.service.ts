import {Injectable} from '@angular/core'
import {User} from '../models/user.model'
import {BehaviorSubject, Subject} from "rxjs";
import {USER_LIST} from "../mocks/user-list.mock";
import {httpOptionsBase, serverUrl} from "../configs/server.config";
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: "root"
})

export class UserService {
  public users: User[] = USER_LIST;
  public users$: BehaviorSubject<User[]> = new BehaviorSubject(this.users);
  public userSelected$: Subject<User> = new Subject();

  private userUrl = serverUrl + '/user';
  private httpOptions = httpOptionsBase;

  constructor(private http: HttpClient) {
    this.retrieveUser();
  }

  emitUserSubject() {
    this.users$.next(this.users.slice());
  }

  retrieveUser(): void {
    this.http.get<User[]>(this.userUrl).subscribe((userList) => {
      this.users = userList;
      this.users$.next(this.users);
    });
  }


  addUser(user: User) {
    this.users.push(user);
    this.emitUserSubject();
    this.saveUserToServer()
  }

  saveUserToServer() {
    this.http.post(this.userUrl, this.users)
      .subscribe(
        () => {
          console.log("Enregistrement");
        },
        (error) => {
          console.log("Erreur" + error);
        }
      )
  }

}
