import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Quiz} from "../../../../models/quiz.model";
import {Router} from "@angular/router";

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
  quizCreated: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectQuiz(): void {
    this.quizSelected.emit(this.quiz);
  }

  createQuiz() {
    this.quizCreated.emit(this.quiz);
    this.router.navigate(["quiz-form"]);
  }
}
