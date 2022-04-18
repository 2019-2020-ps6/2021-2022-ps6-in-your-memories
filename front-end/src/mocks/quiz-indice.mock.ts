import {Question} from '../models/question.model';

export const QUESTION_INDICE: Question = {
  id: '1',
  label: 'Oups... ce n\'est pas la bonne réponse. Souhaitez-vous la refaire avec un indice??',
  answers: [
    {
      value: 'Oui',
      isCorrect: true,
    },
    {
      value: 'Non',
      isCorrect: false,
    }
  ],
  indice : ''
};

