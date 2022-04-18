import {Injectable} from '@angular/core'
import {Home} from "../models/home.models";
import {BehaviorSubject} from "rxjs";
import {SEARCHES_LIST} from "../mocks/home.mock";

@Injectable({
  providedIn: "root"
})

export class HomeService{
  public searches: Home[] = SEARCHES_LIST;
  public searches$: BehaviorSubject<Home[]> = new BehaviorSubject(this.searches);

  constructor() {

  }
}
