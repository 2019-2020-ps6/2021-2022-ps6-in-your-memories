import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuizEditComponent } from './components/quizzes/quiz-edit/quiz-edit.component';
import { QuizFormComponent } from './components/quizzes/quiz-form/quiz-form.component';
import { QuizListComponent } from './components/quizzes/quiz-list/quiz-list.component';
import { AppRoutingModule } from './app.routing.module';
import { QuizComponent } from './components/quizzes/quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizEditComponent,
    QuizFormComponent,
    QuizListComponent,
    QuizComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
