import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuizListComponent} from './components/quizzes/quiz-list/quiz-list.component';
import {QuizEditComponent} from './components/quizzes/quiz-edit/quiz-edit.component';
import {AnswerComponent} from "./components/quizzes/answer/answer.component";
import {
  QuestionnaireAgnosieComponent
} from "./components/quizzes/questionnaire/questionnaireAgnosie/questionnaireAgnosie.component";
import {PatientListComponent} from "./components/patient/patient-list/patient-list.component";
import {PatientFormComponent} from "./components/patient/patient-form/patient-form.component";
import {QuizFormComponent} from "./components/quizzes/quiz-form/quiz-form.component";
import {QuestionsFormComponent} from "./components/quizzes/questions-form/questions-form.component";
import {HomeComponent} from "./components/home/home/home.component";
import {
  QuestionnaireAlzheimerComponent
} from "./components/quizzes/questionnaire/questionnaireAlzheimer/questionnaireAlzheimer.component";
import {QuestionnaireComponent} from "./components/quizzes/questionnaire/questionnaire.component";
import {
  QuestionnaireAVCComponent
} from "./components/quizzes/questionnaire/questionnaireAVC/questionnaireAVC.component";

import {ConnexionComponent} from "./components/connexion/connexion.component";
import {QuizEndComponent} from "./components/quizzes/quiz-end/quiz-end.component";
import {PagePatientComponent} from "./components/patient/page-patient/page-patient.component";
import {InscriptionComponent} from "./components/inscription/inscription.component";
import {ProfilComponent} from "./components/profil/profil.component";
import {QuizStatComponent} from "./components/statistic/quiz-stat/quiz-stat.component";
import {InputComponent} from "./components/utils/field/input/input.component";

const routes: Routes = [
  {path: 'input', component: InputComponent},
  {path: 'quiz-stat', component: QuizStatComponent},
  {path: 'quiz-list', component: QuizListComponent},
  {path: 'edit-quiz', component: QuizEditComponent},
  {path: 'questionnaireAgnosie', component: QuestionnaireAgnosieComponent},
  {path: 'questionnaire', component: QuestionnaireComponent},
  {path: 'questionnaireAlzheimer', component: QuestionnaireAlzheimerComponent},
  {path: 'questionnaireAVC', component: QuestionnaireAVCComponent},
  {path: 'anwser', component: AnswerComponent},
  {path: 'patient-list', component: PatientListComponent},
  {path: 'patient-form', component: PatientFormComponent},
  {path: 'page-patient', component: PagePatientComponent},
  {path: 'quiz-form', component: QuizFormComponent},
  {path: 'quiz-end', component: QuizEndComponent},
  {path: 'questions-form', component: QuestionsFormComponent},
  {path: 'home', component: HomeComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'propfil',component: ProfilComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
