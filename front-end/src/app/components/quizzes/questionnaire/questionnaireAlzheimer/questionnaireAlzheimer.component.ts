import {Component, OnInit} from '@angular/core';
import {Quiz} from '../../../../../models/quiz.model';
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../../../../../services/quiz.service";
import {Answer, Question} from "../../../../../models/question.model";
import {QUESTION_CORRECT_FIN, QUESTION_CORRECT_INTER} from "../../../../../mocks/quiz-correct.mock";
import {Patient} from "../../../../../models/patient.model";
import {PatientService} from "../../../../../services/patient.service";
import {QuizStat} from "../../../../../models/stat.model";
import {Filter} from "../../../filter/filter";

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
  nbTrue: number = 0;
  nbFalse: number = 0;


  constructor(private router: Router,  private patientService: PatientService, private quizService: QuizService, private filter : Filter, private activatedRouter : ActivatedRoute) {
    this.quizService.quizSelected$.subscribe((quiz: Quiz) => {
      this.quiz = quiz;

    });
  }

  ngOnInit(): void {
    this.filter.reset()
    this.filter.setFilter(this.activatedRouter.snapshot.paramMap.get('filter'))
    this.patient = this.patientService.getPatient(this.filter.data);
    Object.assign(this.actualQuestion, this.quiz.questions[this.numQuestion - 1]);
  }

  answerSelected(answer: Answer) {
    if(this.showAnswer){
      if (answer.isCorrect)
        this.nbTrue+=1
      else
        this.nbFalse+=1;
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
    let stat : QuizStat = {
      quiz: this.quiz,
      nbTrue: this.nbTrue,
      nbFalse: this.nbFalse,
    }
    this.patient.stats.quizStat.push(stat);
    this.patientService.majPatient(this.patient)
    this.router.navigate(['quiz-end']);
  }

}
