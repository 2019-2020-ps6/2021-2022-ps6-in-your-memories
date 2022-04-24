import {Component, OnInit} from '@angular/core';
import {Quiz} from "../../../../models/quiz.model";
import {Router} from "@angular/router";
import {QuizService} from "../../../../services/quiz.service";
import {Patient} from "../../../../models/patient.model";
import {PatientService} from "../../../../services/patient.service";

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  public quizList: Quiz[] = [];

  patient: Patient = {
    id: '',
    firstName: '',
    lastName: '',
    pathologie: '',
    age: 0,
    stats: { quizStat: [] },
  };

  bool : boolean = true;

  constructor(private router: Router, private patientService: PatientService, public quizService: QuizService) {
  }

  ngOnInit(): void {
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.quizList = quizzes;
    });
    this.patientService.patientSelected$.subscribe((patient: Patient) => {
      this.patient = patient;
    });
    if(this.patient.pathologie != '')
      this.bool = false;
    console.log(this.patient.pathologie);
  }

  quizSelected(quiz: Quiz): void {
    this.quizService.setSelectedQuiz(quiz.id);

    console.log("select :" + quiz.id)
    this.router.navigate(['questionnaire']);
  }

  quizEdit(quiz: Quiz): void {
    this.quizService.setSelectedQuiz(quiz.id);
    this.router.navigate(['edit-quiz']);
  }

}
