import {Component, OnInit, Input} from '@angular/core';
import {Quiz} from '../../../../../models/quiz.model';
import {Router} from "@angular/router";
import {QuizService} from "../../../../../services/quiz.service";
import {Answer, Question} from "../../../../../models/question.model";
import {QUESTION_CORRECT_FIN, QUESTION_CORRECT_INTER} from "../../../../../mocks/quiz-correct.mock";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaireAlzheimer.component.html',
  styleUrls: ['./questionnaireAlzheimer.component.css']
})
export class QuestionnaireAlzheimerComponent implements OnInit {

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
  showAnswer : boolean = false;

  constructor(private router: Router, private quizService: QuizService) {
  }

  ngOnInit(): void {
    this.quiz = this.quizService.quizzes[0];
    Object.assign(this.actualQuestion, this.quiz.questions[this.numQuestion - 1]);
  }

  answerSelected() {
    if(this.showAnswer){
      this.questionSuivante();
      this.showAnswer = false;
      return
    }
    this.actualQuestion.label = "La bonne réponse est :"
    this.actualQuestion.indice = " ";
    for(let i = 0; i< this.actualQuestion.answers.length; i++ ){
      if(this.actualQuestion.answers[i].isCorrect)
        this.actualQuestion.indice += this.actualQuestion.answers[i].value + " ";
    }
    this.showAnswer = true;
    if (this.quiz.questions.length > this.numQuestion) {
      this.actualQuestion.answers = QUESTION_CORRECT_INTER.answers;
    } else {
      this.actualQuestion.answers = QUESTION_CORRECT_FIN.answers;
    }

  }

  questionSuivante() {
    if (this.quiz.questions.length > (this.numQuestion += 1) - 1) {
      Object.assign(this.actualQuestion, this.quiz.questions[this.numQuestion - 1]);
      return;
    }
    //dernier
    this.router.navigate(['quiz-list']);
  }
}
