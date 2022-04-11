import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Patient} from "../../../../models/patient.model";
import {Router} from "@angular/router";
import {PatientService} from "../../../../services/patient.service";
import {Quiz} from "../../../../models/quiz.model";
import {QuizService} from "../../../../services/quiz.service";

@Component({
  selector: 'app-page-patient',
  templateUrl: './page-patient.component.html',
  styleUrls: ['./page-patient.component.scss']
})

export class PagePatientComponent implements OnInit {

  @Input()
  patient: Patient = {
    id: '',
    firstName: '',
    lastName: '',
    pathologie: '',
    age: 0,
  }

  public quizList: Quiz[] = [];

  constructor(private router: Router, private patientService: PatientService, public quizService: QuizService) {
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.quizList = quizzes;
    });
  }

  ngOnInit(): void {
    this.patient = this.patientService.patients[0];
  }

  quizSelected(quiz: Quiz): void {
    this.router.navigate(['/questionnaire/' + quiz.name]);
  }
}
