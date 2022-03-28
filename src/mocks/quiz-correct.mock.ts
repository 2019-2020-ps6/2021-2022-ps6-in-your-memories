import {Question} from '../models/question.model';

export const QUESTION_CORRECT_INTER: Question = {
  id: '1',
  label: 'Super!! Vous avez trouvé la bonne réponse.',
  answers: [
    {
      value: 'Question suivante',
      isCorrect: true,
    },
  ],
  indice : ''
};

export const QUESTION_CORRECT_FIN: Question = {
  id: '1',
  label: 'Super!! Vous avez trouvé la bonne réponse.',
  answers: [
    {
      value: 'Passer à la fin du quiz',
      isCorrect: true,
    },
  ],
  indice : ''
};
