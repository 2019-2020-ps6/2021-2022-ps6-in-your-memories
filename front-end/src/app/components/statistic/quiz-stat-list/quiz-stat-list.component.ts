import {Component, Input, OnInit} from '@angular/core';

import {PatientStat} from "../../../../models/stat.model";

@Component({
  selector: 'app-quiz-stat-list',
  templateUrl: './quiz-stat-list.component.html',
  styleUrls: ['./quiz-stat-list.component.css']
})
export class QuizStatListComponent implements OnInit {

  @Input()
  patientStat : PatientStat = {
    quizStat : [],
  }


  constructor() {
  }

  ngOnInit(): void {
  }


}
