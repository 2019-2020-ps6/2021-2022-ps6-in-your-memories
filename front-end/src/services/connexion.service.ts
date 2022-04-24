import {Injectable} from '@angular/core'
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})

export class ConnexionService{

  alreadyConnected: boolean=false;
  public alreadyConnected$: BehaviorSubject<boolean> = new BehaviorSubject(this.alreadyConnected);

  constructor(private http: HttpClient) {
  }

  /**public set setAlreadyConnected(alrCon: boolean){
    //this.alreadyConnected=alrCon;
    this.alreadyConnected$.next(alrCon);
  }*/

  setAlreadyConnected = (alrCon: boolean) => {
    this.alreadyConnected$.next(alrCon);
  }


}
