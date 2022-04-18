import {Injectable} from '@angular/core'
import {Patient} from '../models/patient.model'
import {BehaviorSubject, Subject} from "rxjs";
import {PATIENT_LIST} from "../mocks/patient-list.mock";
import {httpOptionsBase, serverUrl} from "../configs/server.config";
import {HttpClient} from '@angular/common/http'
import {QUIZ_LIST} from "../mocks/quiz-list.mock";
import {Quiz} from "../models/quiz.model";
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
  public quizSelected$: BehaviorSubject<Quiz> = new BehaviorSubject(this.actualQuiz);

  private quizUrl = serverUrl;
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
    /*
    const urlWithId = this.quizUrl + '/' + quizId;
    this.http.get<Quiz>(urlWithId).subscribe((quiz) => {
      this.quizSelected$.next(quiz);
    })
*/
    for (let q in this.quizzes) {
      if (this.quizzes[q].id == quizId) {
        this.actualQuiz = this.quizzes[q];
        this.quizSelected$.next(this.actualQuiz);
      }
    }
  }

  deleteQuiz(quiz: Quiz): void {
    const urlWithId = this.quizUrl + '/' + quiz.id;
    this.http.delete<Quiz>(urlWithId, this.httpOptions).subscribe(() => this.retrieveQuiz());
  }

  addQuestion(question: Question, quiz: Quiz): void{
    quiz.questions.push(question);
  }
}