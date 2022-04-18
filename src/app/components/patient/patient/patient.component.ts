import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Patient} from "../../../../models/patient.model";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})

export class PatientComponent implements OnInit {

  @Input()
  patient: Patient = {
    id: '',
    firstName: '',
    lastName: '',
    pathologie: '',
    age: 0,
  }

  @Output()
  patientSelected: EventEmitter<Patient> = new EventEmitter<Patient>();

  constructor() {
  }

  ngOnInit(): void {
  }

  selectPatient(): void{
    this.patientSelected.emit(this.patient);
  }
}