import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {Quiz} from '../../../../models/quiz.model';
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../../../../services/quiz.service";
import {Answer, Question} from "../../../../models/question.model";
import {QUESTION_INDICE} from "../../../../mocks/quiz-indice.mock";
import {QUESTION_CORRECT_FIN, QUESTION_CORRECT_INTER} from "../../../../mocks/quiz-correct.mock";
import {QUESTION_BAD_FIN, QUESTION_BAD_INTER} from "../../../../mocks/quiz-bad.mock";
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
