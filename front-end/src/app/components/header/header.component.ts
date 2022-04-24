import {Component, OnInit} from '@angular/core';
import {ConnexionService} from "../../../services/connexion.service";
import {Router} from "@angular/router";
import {PatientService} from "../../../services/patient.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  public alreadyConnected: boolean = false;

  constructor(private router: Router, public connexionService: ConnexionService, public patientService: PatientService) {
  }

  ngOnInit() {
    this.alreadyConnected = this.connexionService.alreadyConnected;
    this.connexionService.alreadyConnected$.subscribe((bool) => {
      this.alreadyConnected = bool;
      console.log('boolean', this.alreadyConnected);
    });
  }

  SeDeconnecter() {
    this.alreadyConnected = false;
    this.connexionService.setAlreadyConnected(this.alreadyConnected);
  }

  listQuiz() {
    this.patientService.setSelectedPatient("-1");
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['quiz-list']);
    });
  }
}
