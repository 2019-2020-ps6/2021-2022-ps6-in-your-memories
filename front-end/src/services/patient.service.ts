import {Injectable} from '@angular/core'
import {Patient} from '../models/patient.model'
import {BehaviorSubject} from "rxjs";
import {PATIENT_LIST} from "../mocks/patient-list.mock";
import {httpOptionsBase, serverUrl} from "../configs/server.config";
import {HttpClient} from '@angular/common/http'
import {QuizStat} from "../models/stat.model";

@Injectable({
  providedIn: "root"
})

export class PatientService {
  public patients: Patient[] = PATIENT_LIST;
  public patients$: BehaviorSubject<Patient[]> = new BehaviorSubject(this.patients);


  private patientUrl = serverUrl + '/patient';
  private httpOptions = httpOptionsBase;

  constructor(private http: HttpClient) {
    this.retrievePatient();
  }

  retrievePatient(): void {
    this.http.get<Patient[]>(this.patientUrl).subscribe((patientList) => {
      this.patients = patientList;
      this.patients$.next(this.patients);
    });
  }

  addPatient(patient: Patient): void {
    /*this.patients.push(patient);
    this.patients$.next(this.patients);
    */

    this.http.post<Patient>(this.patientUrl, patient, this.httpOptions).subscribe(() => this.retrievePatient());
  }

  deleteSelectedPatient(patient: Patient): void {
    const urlWithId = this.patientUrl + '/' + patient.id;
    this.http.delete<Patient>(urlWithId, this.httpOptions).subscribe(() => this.retrievePatient());
  }

  majPatient(patient: Patient) {
    const urlWithId = this.patientUrl + '/' + patient.id;
    console.log(patient)
    this.http.put<Patient>(urlWithId, patient, this.httpOptions).subscribe(() => this.retrievePatient());
  }

  getPatient(patientId: String): Patient {
    this.retrievePatient()
    for (var i = 0; i < this.patients.length; i++) {
      if (this.patients[i].id ==  patientId) {
        return this.patients[i];
      }
    }

    return {
      id: '',
      firstName: '',
      lastName: '',
      pathologie: '',
      age: 0,
      stats: {quizStat: []},
    };
    ;
  }

}
