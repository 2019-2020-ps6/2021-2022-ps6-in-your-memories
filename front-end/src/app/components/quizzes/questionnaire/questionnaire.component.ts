import {Component, Input, OnInit} from '@angular/core';
import {Quiz} from '../../../../models/quiz.model';
import {Router} from "@angular/router";
import {QuizService} from "../../../../services/quiz.service";
import {Patient} from "../../../../models/patient.model";
import {PatientService} from "../../../../services/patient.service";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  @Input()
  quiz: Quiz = {
    id: '',
    name: '',
    theme: '',
    questions: []
  }

  patient: Patient = {
    id: '',
    firstName: '',
    lastName: '',
    pathologie: '',
    age: 0,
    stats: { quizStat: [] },
  };

  bool : boolean = true;

  constructor(private router: Router, private patientService: PatientService, private quizService: QuizService) {
    this.patientService.patientSelected$.subscribe((patient: Patient) => {
      this.patient = patient;
    });
    this.quizService.quizSelected$.subscribe((quiz: Quiz) => {
      this.quiz = quiz;
    });
  }

  ngOnInit(): void {
    if(this.patient.pathologie != '')
      this.bool = false;
  }

  playQuiz(){
    if(!this.bool){
      if(this.patient.pathologie === "AVC"){
        this.router.navigate(['questionnaireAVC']);
      } else if (this.patient.pathologie === "Agnosie"){
        this.router.navigate(['questionnaireAgnosie']);
      } else if (this.patient.pathologie === "Alzheimer"){
        this.router.navigate(['questionnaireAlzheimer']);
      }
    }
  }

}
