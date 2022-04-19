import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Quiz} from "../../../../models/quiz.model";
import {QuizService} from "../../../../services/quiz.service";

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

  @Output()
  editQuiz: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  @Output()
  quizDeleted: EventEmitter<Quiz> = new EventEmitter<Quiz>();


  constructor(private quizService : QuizService) { }

  ngOnInit(): void {
  }

  selectQuiz(): void {
    this.quizSelected.emit(this.quiz);
    this.quizService.setSelectedQuiz(this.quiz.id);
  }

  edit(): void {
    this.editQuiz.emit(this.quiz);
  }

  deleteQuiz(): void {
    this.quizDeleted.emit(this.quiz);
    this.quizService.deleteQuiz(this.quiz);
  }


}
