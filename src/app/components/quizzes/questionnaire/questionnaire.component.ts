import {Component, OnInit, Input} from '@angular/core';
import {Quiz} from '../../../../models/quiz.model';
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../../../../services/quiz.service";
import {Answer, Question} from "../../../../models/question.model";

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
  answers: []
  }

  actualQuestionLabel: String = "";
  answerList : Answer[] = [];
  badAnswer: boolean = false;
  numQuestion : number = 0;

  constructor(private router: Router, private quizService: QuizService) {

  }

  ngOnInit(): void {
    this.quiz = this.quizService.quizzes[0];
    this.majQuestion();
  }

  answerSelected(answer: Answer){
    if(this.badAnswer) {
      this.badAnswerChoice(answer);
      return;
    }
    this.questionChoice(answer);
  }

  badAnswerChoice(answer: Answer){
    if (answer.isCorrect){
      this.majQuestion();
      this.badAnswer = false;
      return;
    }
    else{
      if(this.answerList.length-2 > (this.numQuestion+=1)){
        this.majQuestion()
        this.badAnswer = false;
        return;
      }
      this.router.navigate(['quiz-list']);
    }
  }

  questionChoice(answer: Answer){
    if (answer.isCorrect){
      if(this.answerList.length-2 > (this.numQuestion+=1)){
        this.majQuestion()
        return;
      }
      this.router.navigate(['quiz-list']);
    }
    else if(!answer.isCorrect){
      this.badAnswer = true;
      this.putFalseAnswer();
    }
  }

  majQuestion(){
    this.actualQuestion = this.quiz.questions[this.numQuestion];
    this.answerList = this.actualQuestion.answers;
    this.actualQuestionLabel = this.actualQuestion.label;
  }

  putFalseAnswer(){
    this.actualQuestionLabel = "Oups... ce n'est pas la bonne réponse. Souhaitez-vous la refaire avec un indice?";
    let answerYes : Answer = {
      type : "string",
      value : "Oui",
      isCorrect : true
    }
    let answerNo : Answer = {
      type : "string",
      value : "Non",
      isCorrect : false
    }
    this.answerList = [answerYes, answerNo];
  }


}
