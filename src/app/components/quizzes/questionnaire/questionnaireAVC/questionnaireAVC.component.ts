import {Component, OnInit, Input} from '@angular/core';
import {Quiz} from '../../../../../models/quiz.model';
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../../../../../services/quiz.service";
import {Answer, Question} from "../../../../../models/question.model";
import {QUESTION_INDICE} from "../../../../../mocks/quiz-indice.mock";
import {QUESTION_CORRECT_FIN, QUESTION_CORRECT_INTER} from "../../../../../mocks/quiz-correct.mock";
import {QUESTION_BAD_FIN, QUESTION_BAD_INTER} from "../../../../../mocks/quiz-bad.mock";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaireAVC.component.html',
  styleUrls: ['./questionnaireAVC.component.css']
})
export class QuestionnaireAVCComponent implements OnInit {

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
  indiceVisibility: boolean = false;

  constructor(private router: Router, private quizService: QuizService) {
  }

  ngOnInit(): void {
    this.quiz = this.quizService.quizzes[0];
    this.actualQuestion = this.quiz.questions[this.numQuestion - 1];
  }

  answerSelected(answer: Answer) {
    if (this.actualQuestion == QUESTION_INDICE) {
      this.badAnswerIndice(answer);
      return;
    } else if (this.mustChangeQuestion()) {
      this.questionSuivante();
      return;
    } else if (!this.indiceVisibility && !answer.isCorrect) {
      this.actualQuestion = QUESTION_INDICE;
      return;
    } else if (this.indiceVisibility && !answer.isCorrect) {
      this.badAnwser();
      return;
    }
    this.goodAnswer();
  }

  badAnswerIndice(answer: Answer) {
    if (answer.isCorrect) {
      this.actualQuestion = this.quiz.questions[this.numQuestion - 1];
      this.indiceVisibility = true;
      return;
    }
    this.questionSuivante();
  }

  goodAnswer() {
    if (this.quiz.questions.length > this.numQuestion) {
      this.actualQuestion = QUESTION_CORRECT_INTER;
    } else {
      this.actualQuestion = QUESTION_CORRECT_FIN;
    }
    this.indiceVisibility = false;
  }

  badAnwser() {
    if (this.quiz.questions.length > this.numQuestion) {
      this.actualQuestion = QUESTION_BAD_INTER;
    } else {
      this.actualQuestion = QUESTION_BAD_FIN;
    }
    this.indiceVisibility = false;
  }


  questionSuivante() {
    this.indiceVisibility = false;
    if (this.quiz.questions.length > (this.numQuestion += 1) - 1) {
      this.actualQuestion = this.quiz.questions[this.numQuestion - 1];
      return;
    }
    //dernier
    this.router.navigate(['quiz-list']);
  }

  mustChangeQuestion() {
    return this.actualQuestion == QUESTION_BAD_INTER ||
      this.actualQuestion == QUESTION_BAD_FIN ||
      this.actualQuestion == QUESTION_CORRECT_INTER ||
      this.actualQuestion == QUESTION_CORRECT_FIN;
  }


}
