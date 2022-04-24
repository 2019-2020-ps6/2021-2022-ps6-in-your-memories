import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Quiz} from '../../../../models/quiz.model';
import {Question} from "../../../../models/question.model";
import {QUIZ_LIST} from "../../../../mocks/quiz-list.mock";

@Component({
  selector: 'app-quiz-end',
  templateUrl: './quiz-end.component.html',
  styleUrls: ['./quiz-end.component.css']
})

export class QuizEndComponent implements OnInit {

  @Input()
  quiz: Quiz = {
    id: '',
    name: '',
    theme: '',
    questions: []
  }

  actualQuestion: Question = {
    id: "",
    label: "",
    answers: [],
    indice: ""
  }

  numQuestion: number = 1;

  @Output()
  quizSelected: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  constructor() {
    this.quiz=QUIZ_LIST[0];
  }

  ngOnInit(): void {
  }


}
