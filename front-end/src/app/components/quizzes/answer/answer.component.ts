import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Answer} from "../../../../models/question.model";
import {QuizService} from "../../../../services/quiz.service";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input()
  anwserList: Answer[] = [];


  @Output()
  awnserSelected:EventEmitter<Answer> = new EventEmitter<Answer>();

  @Output()
  number:EventEmitter<number> = new EventEmitter<number>();



  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
  }

  select(answer : Answer, i : number): void {
    this.awnserSelected.emit(answer);
    this.number.emit(i)

  }
}
