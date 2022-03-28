import {Question} from '../models/question.model';

export const QUESTION_BAD_INTER: Question = {
  id: '1',
  label: 'Oups... Ce n\'est pas la bonne réponse.',
  answers: [
    {
      value: 'Question suivante',
      isCorrect: true,
    },
  ],
  indice : ''
};

export const QUESTION_BAD_FIN: Question = {
  id: '1',
  label: 'Oups... Ce n\'est pas la bonne réponse.',
  answers: [
    {
      value: 'Passer à la fin du quiz',
      isCorrect: true,
    },
  ],
  indice : ''
};
