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

  public patientForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public patientService: PatientService, private router: Router) {
    this.patientForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      pathologie: [''],
      age:[],
    });
  }

  ngOnInit(): void {
  }

  addPatient(): void {
    const patientToCreate: Patient = this.patientForm.getRawValue() as Patient;
    this.patientService.addPatient(patientToCreate);
  }

}
