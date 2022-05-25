import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Quiz} from '../../../../models/quiz.model';
import {Question} from "../../../../models/question.model";
import {QUIZ_LIST} from "../../../../mocks/quiz-list.mock";
import {Router} from "@angular/router";
import {PatientService} from "../../../../services/patient.service";
import {QuizService} from "../../../../services/quiz.service";
import {Patient} from "../../../../models/patient.model";

@Component({
  selector: 'app-quiz-end',
  templateUrl: './quiz-end.component.html',
  styleUrls: ['./quiz-end.component.css']
})

export class QuizEndComponent implements OnInit {

  index : number = 1;

  @Input()
  quiz: Quiz = {
    id: '',
    name: '',
    theme: '',
    questions: [],
    nbPlay: 0,
  }

  Question: Question = {
    id: "",
    label: "",
    answers: [],
    indice: ""
  }

  patient: Patient = {
    id: '',
    firstName: '',
    lastName: '',
    pathologie: '',
    age: 0,
    stats: { quizStat: [] },
  };

  @Output()
  quizSelected: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  constructor(private router: Router, private patientService: PatientService, private quizService: QuizService) {
    this.patientService.patientSelected$.subscribe((patient: Patient) => {
      this.patient = patient;
    });
    this.quizService.quizSelected$.subscribe((quiz: Quiz) => {
      this.quiz = quiz;
    });
  }

  ngOnInit(): void {
  }


}
