import {Component, OnInit, Input} from '@angular/core';
import {Quiz} from '../../../../../models/quiz.model';
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../../../../../services/quiz.service";
import {Answer, Question} from "../../../../../models/question.model";
import {QUESTION_INDICE} from "../../../../../mocks/quiz-indice.mock";
import {QUESTION_CORRECT_FIN, QUESTION_CORRECT_INTER} from "../../../../../mocks/quiz-correct.mock";
import {QUESTION_BAD_FIN, QUESTION_BAD_INTER} from "../../../../../mocks/quiz-bad.mock";
import {Patient} from "../../../../../models/patient.model";
import {PatientStat, QuizStat} from "../../../../../models/stat.model";
import {PatientService} from "../../../../../services/patient.service";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaireAVC.component.html',
  styleUrls: ['./questionnaireAVC.component.css']
})
export class QuestionnaireAVCComponent implements OnInit {

  quiz: Quiz = {
    id: '',
    name: '',
    theme: '',
    questions: []
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

  activeSecondChance : boolean = true;
  numQuestion: number = 1;
  lessQuestion: boolean = false;
  nbTrue: number = 0;
  nbFalse: number = 0;

  constructor(private router: Router, private patientService: PatientService, private quizService: QuizService) {
    this.patientService.patientSelected$.subscribe((patient: Patient) => {
      this.patient = patient;
    });
    this.quizService.quizSelected$.subscribe((quiz: Quiz) => {
      this.quiz = quiz;

    });
  }

  ngOnInit(): void {
    this.majQuestion();
  }


  goodAnswer() {
    if (this.quiz.questions.length > this.numQuestion)
      this.actualQuestion = QUESTION_CORRECT_INTER;
    else
      this.actualQuestion = QUESTION_CORRECT_FIN;
    this.lessQuestion = false;
    this.nbTrue+=1
  }

  badAnwser(answer: Answer) {
    if (this.lessQuestion || !this.activeSecondChance) {
      if (this.quiz.questions.length > this.numQuestion)
        this.actualQuestion = QUESTION_BAD_INTER;
      else
        this.actualQuestion = QUESTION_BAD_FIN;
      this.lessQuestion = false;
      this.nbFalse+=1;
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
    let stat : QuizStat = {
      quiz: this.quiz,
      nbTrue: this.nbTrue,
      nbFalse: this.nbFalse,
    }
    this.patient.stats.quizStat.push(stat);
    console.log(this.patient)
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
