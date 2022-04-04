import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuizEditComponent } from './components/quizzes/quiz-edit/quiz-edit.component';
import { QuizFormComponent } from './components/quizzes/quiz-form/quiz-form.component';
import { QuizListComponent } from './components/quizzes/quiz-list/quiz-list.component';
import { AppRoutingModule } from './app.routing.module';
import { QuizComponent } from './components/quizzes/quiz/quiz.component';
import {AnswerComponent} from "./components/quizzes/answer/answer.component";
import {HeaderComponent} from "./components/header/header.component";
import {QuestionnaireComponent} from "./components/quizzes/questionnaire/questionnaire.component";
import {UserComponent} from "./components/user/user/user.component";
import {UserListComponent} from "./components/user/user-list/user-list.component";
import {UserFormComponent} from "./components/user/user-form/user-form.component";
import {QuestionsFormComponent} from "./components/quizzes/questions-form/questions-form.component";
import {HomeComponent} from "./components/home/home/home.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ConnexionComponent} from "./components/connexion/connexion.component";

@NgModule({
  declarations: [
    AppComponent,
    QuizEditComponent,
    QuizFormComponent,
    QuizListComponent,
    QuizComponent,
    AnswerComponent,
    QuestionnaireComponent,
    HeaderComponent,
    UserComponent,
    UserListComponent,
    UserFormComponent,
    QuestionsFormComponent,
    QuizFormComponent,
    HomeComponent,
    ConnexionComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
