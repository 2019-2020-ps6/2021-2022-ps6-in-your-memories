import {Component, OnInit} from "@angular/core";
import {Patient} from "../../../../models/patient.model";
import {ActivatedRoute, Router} from "@angular/router";
import {PatientService} from "../../../../services/patient.service";
import {Quiz} from "../../../../models/quiz.model";
import {QuizService} from "../../../../services/quiz.service";
import {Filter} from "../../filter/filter";

@Component({
  selector: 'app-page-patient',
  templateUrl: './page-patient.component.html',
  styleUrls: ['./page-patient.component.scss']
})

export class PagePatientComponent implements OnInit {

  patient: Patient = {
    id: '',
    firstName: '',
    lastName: '',
    pathologie: '',
    age: 0,
    stats: { quizStat: [] },
  }

  public quizList: Quiz[] = [];

  constructor(private router: Router, private patientService: PatientService, public quizService: QuizService, private activatedRouter : ActivatedRoute, private filter : Filter) {
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.quizList = quizzes;
    });
  }

  ngOnInit(): void {
    this.filter.setFilter(this.activatedRouter.snapshot.paramMap.get('filter'))
    this.patient = this.patientService.getPatient(this.filter.data);
  }

  quizSelected(quiz: Quiz): void {
    this.router.navigate(['/questionnaire/' + quiz.name]);
  }
}
