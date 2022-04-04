import {Quiz} from '../models/quiz.model';
import {Question} from '../models/question.model';

export const QUESTION_EAU: Question = {
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

  ],
  indice : 'le nombre d\'hydrogène est paire'
};

export const QUESTION_CHUTE: Question = {
  id: '1',
  label: 'Au cours d\'une chute, quelle énergie augmente?',
  answers: [
    {
      value: 'Energie cinétique',
      isCorrect: true,
    },
    {
      value: 'Energie mécanique',
      isCorrect: false,
    },
    {
      value: 'Energie potentielle',
      isCorrect: false,
    }

  ],
  indice : 'E=mc^2'
};

export const QUIZ_LIST: Quiz[] = [
  {
    id: '1',
    name: 'Physique pour les nuls', // What's happening if I change this value..?
    theme: 'Physique',
    questions: [QUESTION_EAU, QUESTION_CHUTE],
  }
];

