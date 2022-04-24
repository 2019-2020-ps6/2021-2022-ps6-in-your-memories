import {Injectable} from '@angular/core'
import {Patient} from '../models/patient.model'
import {BehaviorSubject} from "rxjs";
import {PATIENT_LIST} from "../mocks/patient-list.mock";
import {httpOptionsBase, serverUrl} from "../configs/server.config";
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: "root"
})

export class PatientService {
  public patients: Patient[] = PATIENT_LIST;
  public actualPatient: Patient = {
    id: '',
    firstName: '',
    lastName: '',
    pathologie: '',
    age: 0,
    stats: {quizStat: []},
  };
  public patients$: BehaviorSubject<Patient[]> = new BehaviorSubject(this.patients);
  public patientSelected$: BehaviorSubject<Patient> = new BehaviorSubject(this.actualPatient);


  private patientUrl = serverUrl + '/patient';
  private httpOptions = httpOptionsBase;

  constructor(private http: HttpClient) {
    //this.retrievePatient();
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

  setSelectedPatient(patientId: String): void {
    /*
    const urlWithId = this.patientUrl + '/' + patientId;
    this.http.get<Patient>(urlWithId).subscribe((patient) => {
      this.patientSelected$.next(patient);
    })
    */
    var bool : Boolean;
    bool = false;
    for (let p in this.patients) {
      if (this.patients[p].id == patientId) {
        this.actualPatient = this.patients[p];
        bool = true;
      }
    }
    if(bool == false){
      this.actualPatient = {
        id: '',
        firstName: '',
        lastName: '',
        pathologie: '',
        age: 0,
        stats: {quizStat: []},
      };
    }
    this.patientSelected$.next(this.actualPatient);
  }

  deleteSelectedPatient(patient: Patient): void {
    const urlWithId = this.patientUrl + '/' + patient.id;
    this.http.delete<Patient>(urlWithId, this.httpOptions).subscribe(() => this.retrievePatient());
  }
}
