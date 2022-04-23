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
    stats: { quizStat: [] },
  }

  @Output()
  patientSelectedFiche: EventEmitter<Patient> = new EventEmitter<Patient>();

  @Output()
  patientSelectedQuiz: EventEmitter<Patient> = new EventEmitter<Patient>();

  @Output()
  patientSelectedDelete: EventEmitter<Patient> = new EventEmitter<Patient>();

  constructor() {
  }

  ngOnInit(): void {
  }

  selectPatientFiche(): void{
    this.patientSelectedFiche.emit(this.patient);
  }

  selectPatientQuiz(): void{
    this.patientSelectedQuiz.emit(this.patient);
  }

  deletePatient(): void{
    this.patientSelectedDelete.emit(this.patient);
  }
}
