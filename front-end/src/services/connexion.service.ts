import {Injectable} from '@angular/core'
import {BehaviorSubject} from "rxjs";
import {Home} from "../models/home.models";
import {ConnexionComponent} from "../app/components/connexion/connexion.component";
import {HttpClient} from "@angular/common/http";
import {Quiz} from "../models/quiz.model";
import {serverUrl} from "../configs/server.config";

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
