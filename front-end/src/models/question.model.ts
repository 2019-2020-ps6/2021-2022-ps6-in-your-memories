export interface Answer {
    value: string;
    isCorrect: boolean;
}

export interface Question {
    id: string;
    label: string;
    answers: Answer[];
    indice: string;
    image?: string;
}
