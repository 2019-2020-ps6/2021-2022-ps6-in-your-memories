import {Quiz} from '../models/quiz.model';
import {Question} from '../models/question.model';

export const QUESTION_PHYSIQUE: Question = {
  id: '1',
  label: 'Quelle est la formule de l\'eau?',
  answers: [
    {
      value: 'h3o',
      isCorrect: false,
    },
    {
      value: 'h2o2',
      isCorrect: false,
    },
    {
      value: 'h2o',
      isCorrect: true,
    }

  ]
};

export const QUIZ_LIST: Quiz[] = [
  {
    id: '1',
    name: 'Physique pour les nuls', // What's happening if I change this value..?
    theme: 'Physique',
    questions: [QUESTION_PHYSIQUE],
  }
];

