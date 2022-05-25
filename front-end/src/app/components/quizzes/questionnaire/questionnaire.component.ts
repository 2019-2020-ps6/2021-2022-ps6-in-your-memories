import {Component, Input, OnInit} from '@angular/core';
import {Quiz} from '../../../../models/quiz.model';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
import {QuizService} from "../../../../services/quiz.service";
import {Patient} from "../../../../models/patient.model";
import {PatientService} from "../../../../services/patient.service";
import {Filter} from "../../filter/filter";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  notSelected : boolean = false;

  @Input()
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
    stats: {quizStat: []},
  };


  titreSelect : string = "Choisir une pathologie"
  pathologieSelect: string = ""
  pathologies: string[] = ["AVC", "Agnosie", "Alzheimer"]
  bool: boolean = true;

  constructor(private router: Router, private patientService: PatientService, private quizService: QuizService, private activatedRouter : ActivatedRoute, private filter : Filter) {

    this.quizService.quizSelected$.subscribe((quiz: Quiz) => {
      this.quiz = quiz;

    });

  }

  ngOnInit(): void {
    this.filter.reset()
    this.filter.setFilter(this.activatedRouter.snapshot.paramMap.get('filter'))
    console.log(this.filter)
    this.patient = this.patientService.getPatient(this.filter.data);
    console.log(this.filter.data)
    if (this.patient.pathologie != '')
      this.bool = false;
  }

  playQuiz() {
    this.quiz.nbPlay += 1
    this.quizService.updateQuiz(this.quiz)
    let p = ""
    if (!this.bool) {
      p = this.patient.pathologie;
    } else {
      p = this.pathologieSelect;
    }

    if (p === "AVC") {
      this.router.navigate(['/questionnaireAVC/' + this.activatedRouter.snapshot.paramMap.get('filter')]);
    } else if (p === "Agnosie") {
      this.router.navigate(['/questionnaireAgnosie/' + this.activatedRouter.snapshot.paramMap.get('filter')]);
    } else if (p === "Alzheimer") {
      this.router.navigate(['/questionnaireAlzheimer/' + this.activatedRouter.snapshot.paramMap.get('filter')]);
    }
    else {
      this.notSelected=true;
    }
  }

  setPathologie(text: string) {
    this.pathologieSelect = text;
  }
}
