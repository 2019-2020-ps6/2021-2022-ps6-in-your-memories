import {Component} from '@angular/core';
import {Quiz} from "../models/quiz.model";
import {Router} from "@angular/router";
import {QuizService} from "../services/quiz.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '2021-2022-ps6-in-your-memories';

  public quizList: Quiz[] = [];
  public quiz: Quiz;

  constructor(private router: Router, public quizService: QuizService) {
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.quizList = quizzes;
    });
    this.quiz = this.quizList[0];
  }
}
