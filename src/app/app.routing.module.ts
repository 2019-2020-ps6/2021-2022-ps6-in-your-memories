import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuizListComponent} from './components/quizzes/quiz-list/quiz-list.component';
import {QuizEditComponent} from './components/quizzes/quiz-edit/quiz-edit.component';
import {AnswerComponent} from "./components/quizzes/answer/answer.component";
import {QuestionnaireComponent} from "./components/quizzes/questionnaire/questionnaire.component";
import {UserListComponent} from "./components/user/user-list/user-list.component";
import {UserFormComponent} from "./components/user/user-form/user-form.component";
import {QuizFormComponent} from "./components/quizzes/quiz-form/quiz-form.component";
import {QuestionsFormComponent} from "./components/quizzes/questions-form/questions-form.component";
import {HomeComponent} from "./components/home/home/home.component";
import {ConnexionComponent} from "./components/connexion/connexion.component";

const routes: Routes = [
  {path: 'quiz-list', component: QuizListComponent},
  {path: 'edit-quiz/:id', component: QuizEditComponent},
  {path: 'questionnaire/:id', component: QuestionnaireComponent},
  {path: 'anwser', component: AnswerComponent},
  {path: 'user-list', component: UserListComponent},
  {path: 'user-form', component: UserFormComponent},
  {path: 'quiz-form', component: QuizFormComponent},
  {path: 'questions-form', component: QuestionsFormComponent},
  {path: 'home', component: HomeComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
