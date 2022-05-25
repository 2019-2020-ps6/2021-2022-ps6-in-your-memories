import {Component, OnInit} from '@angular/core';
import {Quiz} from "../../../../models/quiz.model";
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
import {QuizService} from "../../../../services/quiz.service";
import {Patient} from "../../../../models/patient.model";
import {PatientService} from "../../../../services/patient.service";
import {Filter} from "../../filter/filter";

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  public quizList: Quiz[] = [];

  patient: Patient = {
    id: '',
    firstName: '',
    lastName: '',
    pathologie: '',
    age: 0,
    stats: { quizStat: [] },
  };



  bool : boolean = true;

  constructor(private router: Router, private patientService: PatientService, public quizService: QuizService, private activatedRouter: ActivatedRoute, private filter : Filter) {
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.quizList = quizzes;
    });
  }

  ngOnInit(): void {
    this.filter.reset()
    this.filter.setFilter(this.activatedRouter.snapshot.paramMap.get('filter'))
    this.patient = this.patientService.getPatient(this.filter.data);
    if(this.patient.pathologie != '')
      this.bool = false;
  }

  getListquiz(): Quiz[] {
    if (this.filter.filter == "theme") {
      var quizList : Quiz[] = [];
      for (var i = 0; i < this.quizList.length; i++) {
        if (this.quizList[i].theme == this.filter.data) {
          quizList.push(this.quizList[i]);
        }
      }
      return quizList;
    }
    return this.quizList;
  }

  quizSelected(quiz: Quiz): void {
    this.quizService.setSelectedQuiz(quiz);
    this.router.navigate(['/questionnaire/' + this.activatedRouter.snapshot.paramMap.get('filter')]);
  }

  quizEdit(quiz: Quiz): void {
    this.quizService.setSelectedQuiz(quiz);
    this.router.navigate(['edit-quiz']);
  }

}
