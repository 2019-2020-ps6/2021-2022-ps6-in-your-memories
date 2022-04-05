import {Injectable} from '@angular/core'
import {Patient} from '../models/patient.model'
import {BehaviorSubject} from "rxjs";
import {PATIENT_LIST} from "../mocks/patient-list.mock";

@Injectable({
  providedIn: "root"
})

export class PatientService {
  public patients: Patient[] = PATIENT_LIST;
  public patients$: BehaviorSubject<Patient[]> = new BehaviorSubject(this.patients);

  constructor() {
  }

  addPatient(patient: Patient): void{
    this.patients.push(patient);
    this.patients$.next(this.patients);
  }
}
