import {Injectable} from '@angular/core'
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Patient} from "../models/patient.model";
import {PATIENT_LIST} from "../mocks/patient-list.mock";
import {User} from "../models/user.model";
import {httpOptionsBase, serverUrl} from "../configs/server.config";
import {USER_LIST} from "../mocks/user-list.mock";

@Injectable({
  providedIn: "root"
})

export class ConnexionService{

  alreadyConnected: boolean=false;
  public alreadyConnected$: BehaviorSubject<boolean> = new BehaviorSubject(this.alreadyConnected);

  public users: User[] = USER_LIST;
  public actualUser: User = {
    id: 0,
    lastName: '',
    firstName: '',
    email: '',
    mdp: '',
  };
  public users$: BehaviorSubject<User[]> = new BehaviorSubject(this.users);
  public userSelected$: BehaviorSubject<User> = new BehaviorSubject(this.actualUser);

  private userUrl = serverUrl + '/user';
  private httpOptions = httpOptionsBase;

  constructor(private http: HttpClient) {
    this.retrieveUsers();
  }

  /**public set setAlreadyConnected(alrCon: boolean){
    //this.alreadyConnected=alrCon;
    this.alreadyConnected$.next(alrCon);
  }*/

  setAlreadyConnected = (alrCon: boolean) => {
    this.alreadyConnected$.next(alrCon);
  }

  retrieveUsers(): void {
    this.http.get<User[]>(this.userUrl).subscribe((userList) => {
      this.users = userList;
      this.users$.next(this.users);
    });
  }

  setSelectedUser(userId: number): void {
    /*
    const urlWithId = this.patientUrl + '/' + patientId;
    this.http.get<Patient>(urlWithId).subscribe((patient) => {
      this.patientSelected$.next(patient);
    })
    */
    var bool : Boolean;
    bool = false;
    for (let p in this.users) {
      if (this.users[p].id == userId) {
        this.actualUser = this.users[p];
        bool = true;
      }
    }
    if(bool == false){
      this.actualUser = {
        id: 0,
        lastName: '',
        firstName: '',
        email: '',
        mdp: '',
      };
    }
    this.userSelected$.next(this.actualUser);
  }

  logIn(userToLog: User): void {
    const userDatabase = this.users.find(u => u.firstName.toLowerCase() === userToLog.firstName.toLowerCase()
      && u.lastName.toLowerCase() === userToLog.lastName.toLowerCase());

    if (userDatabase !== undefined && userDatabase.mdp === userToLog.mdp) {
      this.setLogIn(userDatabase);
    }
    console.log(this.actualUser)
  }

  private setLogIn(user: User): void {
    this.actualUser = user;
    this.userSelected$.next(user);
  }


}
