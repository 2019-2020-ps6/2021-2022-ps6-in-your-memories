import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {PatientService} from "../../../../services/patient.service";
import {Patient} from "../../../../models/patient.model";

@Component({
  selector: './app-list-form',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss'],
})

export class PatientListComponent {
  public patientList: Patient[] = []
  constructor(private router: Router, public patientService: PatientService) {
    this.patientService.patients$.subscribe((patients: Patient[]) => {
      this.patientList = patients;
    })
  }


  ajoutPatientSelected(patient: Patient): void {
    this.router.navigate(['/patient/' + patient.id]);
  }

}
