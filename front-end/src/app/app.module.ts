import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
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
import {InscriptionComponent} from "./components/inscription/inscription.component";
import {ProfilComponent} from "./components/profil/profil.component";
import {ImageComponent} from "./components/image/image.component";
import {QuizStatComponent} from "./components/statistic/quiz-stat/quiz-stat.component";
import {QuizStatListComponent} from "./components/statistic/quiz-stat-list/quiz-stat-list.component";
import {InputComponent} from "./components/utils/field/input/input.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {SelectComponent} from "./components/utils/field/select/select.component";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {Router} from "@angular/router";
import {Filter} from "./components/filter/filter";




@NgModule({
  declarations: [
    SelectComponent,
    QuizStatListComponent,
    QuizStatComponent,
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
    InscriptionComponent,
    QuizEndComponent,
    ProfilComponent,
    ImageComponent,
    InputComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatSlideToggleModule,

  ],
  providers: [Filter],
  bootstrap: [AppComponent]
})
export class AppModule {
}
