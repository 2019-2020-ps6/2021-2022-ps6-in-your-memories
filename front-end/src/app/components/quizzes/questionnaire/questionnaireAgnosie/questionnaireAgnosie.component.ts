import {Component, OnInit, Input} from '@angular/core';
import {Quiz} from '../../../../../models/quiz.model';
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../../../../../services/quiz.service";
import {Answer, Question} from "../../../../../models/question.model";
import {QUESTION_INDICE} from "../../../../../mocks/quiz-indice.mock";
import {QUESTION_CORRECT_FIN, QUESTION_CORRECT_INTER} from "../../../../../mocks/quiz-correct.mock";
import {QUESTION_BAD_FIN, QUESTION_BAD_INTER} from "../../../../../mocks/quiz-bad.mock";
import {Patient} from "../../../../../models/patient.model";
import {PatientService} from "../../../../../services/patient.service";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaireAgnosie.component.html',
  styleUrls: ['./questionnaireAgnosie.component.css']
})
export class QuestionnaireAgnosieComponent implements OnInit {
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

  addIndices : boolean = true;
  numQuestion: number = 1;
  indiceVisibility: boolean = false;

  constructor(private router: Router,  private patientService: PatientService, private quizService: QuizService) {
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
    this.indiceVisibility = false;
  }

  badAnwser() {
    if (this.indiceVisibility || !this.addIndices) {
      if (this.quiz.questions.length > this.numQuestion)
        this.actualQuestion = QUESTION_BAD_INTER;
      else
        this.actualQuestion = QUESTION_BAD_FIN;
      this.indiceVisibility = false;
    } else {
        this.indiceVisibility = true;
        this.majQuestion();
    }

  }

  questionSuivante() {
    this.indiceVisibility = false;
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
    this.badAnwser()
  }

  changeQuestion(b: boolean) {
    return this.actualQuestion == QUESTION_BAD_INTER ||
      this.actualQuestion == QUESTION_BAD_FIN ||
      this.actualQuestion == QUESTION_CORRECT_FIN ||
      this.actualQuestion == QUESTION_CORRECT_INTER;

  }
}
