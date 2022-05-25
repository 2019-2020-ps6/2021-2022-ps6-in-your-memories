import {Component, OnInit} from '@angular/core';
import {Quiz} from '../../../../../models/quiz.model';
import {Router} from "@angular/router";
import {QuizService} from "../../../../../services/quiz.service";
import {Question} from "../../../../../models/question.model";
import {QUESTION_CORRECT_FIN, QUESTION_CORRECT_INTER} from "../../../../../mocks/quiz-correct.mock";
import {Patient} from "../../../../../models/patient.model";
import {PatientService} from "../../../../../services/patient.service";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaireAlzheimer.component.html',
  styleUrls: ['./questionnaireAlzheimer.component.css']
})
export class QuestionnaireAlzheimerComponent implements OnInit {

  quiz: Quiz = {
    id: '',
    name: '',
    theme: '',
    questions: [],
    nbPlay: 0,
  }

  patient: Patient = {
    id: '',
    firstName: '',
    lastName: '',
    pathologie: '',
    age: 0,
    stats: { quizStat: [] },
  };

  actualQuestion: Question = {
    id: "",
    label: "",
    answers: [],
    indice: ""
  }

  numQuestion: number = 1;
  showAnswer : boolean = false;
  correctAnswer: string = "";

  constructor(private router: Router,  private patientService: PatientService, private quizService: QuizService) {
    this.patientService.patientSelected$.subscribe((patient: Patient) => {
      this.patient = patient;
    });
    this.quizService.quizSelected$.subscribe((quiz: Quiz) => {
      this.quiz = quiz;

    });
  }

  ngOnInit(): void {
    Object.assign(this.actualQuestion, this.quiz.questions[this.numQuestion - 1]);
  }

  answerSelected() {
    if(this.showAnswer){
      this.questionSuivante();
      this.showAnswer = false;
      return
    }
    this.actualQuestion.label = "La bonne réponse est : "
    this.actualQuestion.indice = " ";
    for(let i = 0; i< this.actualQuestion.answers.length; i++ ){
      if(this.actualQuestion.answers[i].isCorrect){
        this.actualQuestion.indice += this.actualQuestion.answers[i].value + " ";
        if(this.actualQuestion.answers[i].imageAns == undefined)
          this.actualQuestion.label = this.actualQuestion.label + this.actualQuestion.answers[i].value;
        else
          this.actualQuestion.label = this.actualQuestion.label + this.actualQuestion.answers[i].imageAns;
      }

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
    this.router.navigate(['quiz-end']);
  }

}
