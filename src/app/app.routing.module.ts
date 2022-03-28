import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuizListComponent} from './components/quizzes/quiz-list/quiz-list.component';
import {QuizEditComponent} from './components/quizzes/quiz-edit/quiz-edit.component';
import {AnswerComponent} from "./components/quizzes/answer/answer.component";
import {QuestionnaireComponent} from "./components/quizzes/questionnaire/questionnaire.component";
import {QuizFormComponent} from "./components/quizzes/quiz-form/quiz-form.component";
import {QuestionsFormComponent} from "./components/quizzes/questions-form/questions-form.component";

const routes: Routes = [
  {path: 'quiz-list', component: QuizListComponent},
  {path: 'edit-quiz/:id', component: QuizEditComponent},
  {path: 'questionnaire/:id', component: QuestionnaireComponent},
  {path: 'anwser', component: AnswerComponent},
  {path: 'quiz-form', component: QuizFormComponent},
  {path: 'questions-form', component: QuestionsFormComponent},
  { path: '', redirectTo: '/quiz-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
