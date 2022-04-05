import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import {QUIZ_LIST} from '../mocks/quiz-list.mock';
import {BehaviorSubject, Subject} from "rxjs";
import {Question} from "../models/question.model";

@Injectable({
  providedIn: 'root'
})

export class QuizService {
  public quizzes: Quiz[] = QUIZ_LIST;
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);

  constructor() {
  }

  addQuiz(quiz: Quiz){
    this.quizzes.push(quiz);
    this.quizzes$.next(this.quizzes);
  }

  addQuestion(quiz: Quiz, question: Question) {

  }
}
