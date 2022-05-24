import {Component, Input, OnInit} from '@angular/core';

import {QuizStat} from "../../../../models/stat.model";

@Component({
  selector: 'app-quiz-stat',
  templateUrl: './quiz-stat.component.html',
  styleUrls: ['./quiz-stat.component.css']
})
export class QuizStatComponent implements OnInit {

  @Input()
  quizStat: QuizStat = {
    quiz: {
      id: "",
      name: "",
      theme: "",
      questions: [],
      nbPlay: 0,
    },
    nbTrue: 0,
    nbFalse: 0,
  }


  constructor() {
  }

  ngOnInit(): void {
  }


}
