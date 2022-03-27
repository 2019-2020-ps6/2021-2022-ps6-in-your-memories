import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuizListComponent} from './components/quizzes/quiz-list/quiz-list.component';
import {QuizEditComponent} from './components/quizzes/quiz-edit/quiz-edit.component';
import {AnswerComponent} from "./components/quizzes/answer/answer.component";
import {QuestionnaireComponent} from "./components/quizzes/questionnaire/questionnaire.component";

const routes: Routes = [
  {path: 'quiz-list', component: QuizListComponent},
  {path: 'edit-quiz/:id', component: QuizEditComponent},
  {path: 'questionnaire/:id', component: QuestionnaireComponent},
  {path: 'anwser', component: AnswerComponent},
  { path: '', redirectTo: '/quiz-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
