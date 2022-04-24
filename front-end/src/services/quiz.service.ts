import {Injectable} from '@angular/core';
import {httpOptionsBase, serverUrl} from "../configs/server.config";
import {HttpClient} from '@angular/common/http'
import {BehaviorSubject, Subject} from "rxjs";
import {Quiz} from "../models/quiz.model";
import {QUIZ_LIST} from "../mocks/quiz-list.mock";
import {Question} from "../models/question.model";

@Injectable({
  providedIn: "root"
})

export class QuizService {
  public quizzes: Quiz[] = QUIZ_LIST;
  public actualQuiz: Quiz = {
    id: '',
    name: '',
    theme: '',
    questions: []
  }
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);
  public quizSelected$: Subject<Quiz> = new Subject();

  private quizUrl = serverUrl + '/quizzes';
  private questionsPath = 'questions';
  private httpOptions = httpOptionsBase;

  constructor(private http: HttpClient) {
    this.retrieveQuiz();
  }

  retrieveQuiz(): void{
    this.http.get<Quiz[]>(this.quizUrl).subscribe((quizList) => {
      this.quizzes = quizList;
      this.quizzes$.next(this.quizzes);
    });
  }

  addQuiz(quiz: Quiz): void{
    this.http.post<Quiz>(this.quizUrl, quiz, this.httpOptions).subscribe(() => this.retrieveQuiz());
  }

  setSelectedQuiz(quizId: String): void {
    const urlWithId = this.quizUrl + '/' + quizId;
    this.http.get<Quiz>(urlWithId).subscribe((quiz) => {
      this.quizSelected$.next(quiz);
    })
  }

  deleteQuiz(quiz: Quiz): void {
    const urlWithId = this.quizUrl + '/' + quiz.id;
    this.http.delete<Quiz>(urlWithId, this.httpOptions).subscribe(() => this.retrieveQuiz());
  }

  addQuestion(question: Question, quiz: Quiz): void {
    quiz.questions.push(question)
    const urlWithId = this.quizUrl + '/' + quiz.id;
    this.http.put<Quiz>(urlWithId, question, this.httpOptions).subscribe(() => this.setSelectedQuiz(quiz.id));
  }

}


