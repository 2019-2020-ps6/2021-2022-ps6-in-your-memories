import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import {QUESTION_PHYSIQUE, QUIZ_LIST} from '../mocks/quiz-list.mock';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class QuizService {
  public quizzes: Quiz[] = QUIZ_LIST;
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);

  constructor() {
  }

}
