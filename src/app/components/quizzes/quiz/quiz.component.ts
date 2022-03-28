import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Quiz} from "../../../../models/quiz.model";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  @Input()
  quiz: Quiz = {
    id: '',
    name: '',
    theme: '',
    questions: []
  }

  @Output()
  quizSelected: EventEmitter<Quiz> = new EventEmitter<Quiz>();


  constructor() { }

  ngOnInit(): void {
  }

  selectQuiz(): void {
    this.quizSelected.emit(this.quiz);
  }


}
