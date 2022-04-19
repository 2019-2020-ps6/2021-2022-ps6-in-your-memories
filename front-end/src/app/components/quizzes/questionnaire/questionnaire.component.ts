import {Component, OnInit, Input} from '@angular/core';
import {Quiz} from '../../../../models/quiz.model';
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../../../../services/quiz.service";
import {Answer, Question} from "../../../../models/question.model";
import {QUESTION_INDICE} from "../../../../mocks/quiz-indice.mock";
import {QUESTION_CORRECT_FIN, QUESTION_CORRECT_INTER} from "../../../../mocks/quiz-correct.mock";
import {QUESTION_BAD_FIN, QUESTION_BAD_INTER} from "../../../../mocks/quiz-bad.mock";

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


  constructor(private router: Router, private quizService: QuizService) {
  }

  ngOnInit(): void {
    var index = Number(this.quiz.id);
    this.quiz = this.quizService.quizzes[index];
  }

}
