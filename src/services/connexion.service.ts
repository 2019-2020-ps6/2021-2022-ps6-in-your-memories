import {Injectable} from '@angular/core'

@Injectable({
  providedIn: "root"
})

export class ConnexionService{
  alreadyConnected: boolean=false;

  public get alreadyConnect(): boolean{
    return this.alreadyConnected;
  }

  public set alreadyConnectedTrue(alrCon: boolean){
    this.alreadyConnected=true;
  }

  constructor() {
  }


}
