import {Component, Input, OnInit, Output} from '@angular/core';
import {ConnexionComponent} from "../connexion/connexion.component";
import {ConnexionService} from "../../../services/connexion.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  public alreadyConnected: boolean=false;

  constructor(public connexionService: ConnexionService) {
  }

  ngOnInit() {
    this.alreadyConnected = this.connexionService.alreadyConnected;
    this.connexionService.alreadyConnected$.subscribe((bool) => {
      this.alreadyConnected = bool;
      console.log('boolean', this.alreadyConnected);
    });
  }


}
