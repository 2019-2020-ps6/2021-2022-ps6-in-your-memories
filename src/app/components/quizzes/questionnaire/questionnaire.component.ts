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

  actualQuestion: Question = {
    id: "",
    label: "",
    answers: [],
    indice: ""
  }

  badAnswerIndice: boolean = false;
  nextAnswer: boolean = false
  numQuestion: number = 1;
  indiceVisibility: boolean = false;

  constructor(private router: Router, private quizService: QuizService) {
  }

  ngOnInit(): void {
    this.quiz = this.quizService.quizzes[0];
    this.majQuestion();
  }

  answerSelected(answer: Answer) {
    if (this.badAnswerIndice) {
      this.badAnswerIndiceChoice(answer);
      return;
    }
    if (this.nextAnswer) {
      this.questionSuivante()
      return;
    }
    if (answer.isCorrect) {
      this.goodAnswer();
      return;
    }
    else if (!answer.isCorrect) {
      this.badAnwser()
      return;
    }
  }

  badAnswerIndiceChoice(answer: Answer) {
    if (answer.isCorrect) {
      this.majQuestion();
      this.indiceVisibility = true;
      this.badAnswerIndice = false;
      this.nextAnswer = false;
      return;
    } else {
      this.questionSuivante();
    }
  }

  goodAnswer(){
    if (this.quiz.questions.length > this.numQuestion) {
      this.actualQuestion = QUESTION_CORRECT_INTER;
    }else{
      this.actualQuestion = QUESTION_CORRECT_FIN;
    }
    this.indiceVisibility = false;
    this.badAnswerIndice = false;
    this.nextAnswer = true;
  }

  badAnwser(){
    if(this.indiceVisibility) {
      if (this.quiz.questions.length > this.numQuestion) {
        this.actualQuestion = QUESTION_BAD_INTER;
      } else {
        this.actualQuestion = QUESTION_BAD_FIN;
      }
      this.indiceVisibility = false;
      this.badAnswerIndice = false;
      this.nextAnswer = true;
    }else {
      this.actualQuestion = QUESTION_INDICE;
      this.indiceVisibility = false;
      this.badAnswerIndice = true;
      this.nextAnswer = false;
    }
  }


  questionSuivante() {
    this.indiceVisibility = false;
    this.badAnswerIndice = false;
    this.nextAnswer = false;
    if (this.quiz.questions.length > (this.numQuestion += 1)-1) {
      this.majQuestion()
      return;
    }
    //dernier
    this.router.navigate(['quiz-list']);
  }

  majQuestion() {
    this.actualQuestion = this.quiz.questions[this.numQuestion-1];
  }

  endQuestion(){

  }









}
