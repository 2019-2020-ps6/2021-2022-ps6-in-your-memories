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

  activeSecondChance : boolean = true;
  numQuestion: number = 1;
  lessQuestion: boolean = false;

  constructor(private router: Router, private quizService: QuizService) {
  }

  ngOnInit(): void {
    this.quiz = this.quizService.quizzes[0];
    this.majQuestion();
  }


  goodAnswer() {
    if (this.quiz.questions.length > this.numQuestion)
      this.actualQuestion = QUESTION_CORRECT_INTER;
    else
      this.actualQuestion = QUESTION_CORRECT_FIN;
    this.lessQuestion = false;
  }

  badAnwser(answer: Answer) {
    if (this.lessQuestion || !this.activeSecondChance) {
      if (this.quiz.questions.length > this.numQuestion)
        this.actualQuestion = QUESTION_BAD_INTER;
      else
        this.actualQuestion = QUESTION_BAD_FIN;
      this.lessQuestion = false;
    } else {
      let newQuestion = JSON.parse(JSON.stringify(this.actualQuestion));
      for(let i = 0; i<newQuestion.answers.length; i++){
        let tempAnswer = newQuestion.answers[i];
        if(answer.value === tempAnswer.value){
          newQuestion.answers.splice(i, 1);
        }
      }
      console.log( newQuestion.answers.length)
      this.lessQuestion = true;
      this.actualQuestion = newQuestion;
    }

  }

  questionSuivante() {
    this.lessQuestion = false;
    if (this.quiz.questions.length > (this.numQuestion += 1) - 1) {
      this.majQuestion()
      return;
    }
    this.router.navigate(['quiz-end']);
  }

  majQuestion() {
    this.actualQuestion = this.quiz.questions[this.numQuestion - 1];
  }

  answerSelected(answer: Answer) {
    if (this.changeQuestion(answer.isCorrect)) {
      this.questionSuivante();
      return;
    } else if (answer.isCorrect) {
      this.goodAnswer();
      return;
    }
    this.badAnwser(answer)
  }

  changeQuestion(b: boolean) {
    return this.actualQuestion == QUESTION_BAD_INTER ||
      this.actualQuestion == QUESTION_BAD_FIN ||
      this.actualQuestion == QUESTION_CORRECT_FIN ||
      this.actualQuestion == QUESTION_CORRECT_INTER;

  }

}
