import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";

import {PatientService} from "../../../../services/patient.service";
import {Patient} from "../../../../models/patient.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss'],
})

export class PatientFormComponent implements OnInit{

  patient: Patient = {
    id: '',
    firstName: '',
    lastName: '',
    pathologie: '',
    age: 0,
    stats: { quizStat: [] },
  }

  pathologies : string[] = ["AVC", "Agnosie", "Alzheimer"]

  constructor(public patientService: PatientService, private router: Router) {
  }

  ngOnInit(): void {
  }

  addPatient(): void {
    this.patientService.addPatient(this.patient);
  }

  setFirstName(text : string){
    this.patient.firstName = text;
  }

  setLastName(text : string){
    this.patient.lastName = text;
  }

  setPathologie(text : string){
    this.patient.pathologie = text;
  }

  setAge(text : string){
    this.patient.age = 0;
  }

}
