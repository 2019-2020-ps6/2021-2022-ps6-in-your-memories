import {Quiz} from "./quiz.model";

export interface QuizStat {
  quiz: Quiz;
  nbTrue: number;
  nbFalse: number;
}

export interface PatientStat {
  quizStat : QuizStat[];
}
