import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from './app.component';
import {QuizEditComponent} from './components/quizzes/quiz-edit/quiz-edit.component';
import {QuizFormComponent} from './components/quizzes/quiz-form/quiz-form.component';
import {QuizListComponent} from './components/quizzes/quiz-list/quiz-list.component';
import {AppRoutingModule} from './app.routing.module';
import {QuizComponent} from './components/quizzes/quiz/quiz.component';
import {AnswerComponent} from "./components/quizzes/answer/answer.component";
import {HeaderComponent} from "./components/header/header.component";
import {
  QuestionnaireAgnosieComponent
} from "./components/quizzes/questionnaire/questionnaireAgnosie/questionnaireAgnosie.component";
import {PatientComponent} from "./components/patient/patient/patient.component";
import {PatientListComponent} from "./components/patient/patient-list/patient-list.component";
import {PatientFormComponent} from "./components/patient/patient-form/patient-form.component";
import {QuestionsFormComponent} from "./components/quizzes/questions-form/questions-form.component";
import {HomeComponent} from "./components/home/home/home.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {
  QuestionnaireAlzheimerComponent
} from "./components/quizzes/questionnaire/questionnaireAlzheimer/questionnaireAlzheimer.component";
import {QuestionnaireComponent} from "./components/quizzes/questionnaire/questionnaire.component";
import {
  QuestionnaireAVCComponent
} from "./components/quizzes/questionnaire/questionnaireAVC/questionnaireAVC.component";
import {ConnexionComponent} from "./components/connexion/connexion.component";
import {QuizEndComponent} from "./components/quizzes/quiz-end/quiz-end.component"
import {PagePatientComponent} from "./components/patient/page-patient/page-patient.component";


@NgModule({
  declarations: [
    AppComponent,
    QuizEditComponent,
    QuizFormComponent,
    QuizListComponent,
    QuizComponent,
    AnswerComponent,
    QuestionnaireAgnosieComponent,
    HeaderComponent,
    PatientComponent,
    PatientListComponent,
    PatientFormComponent,
    PagePatientComponent,
    QuestionsFormComponent,
    QuizFormComponent,
    HomeComponent,
    QuestionnaireAlzheimerComponent,
    QuestionnaireComponent,
    QuestionnaireAVCComponent,
    ConnexionComponent,
    QuizEndComponent,
  ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        AppRoutingModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
