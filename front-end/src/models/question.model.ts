export interface Answer {
    type?: string;
    value: string;
    isCorrect: boolean;
    image?: File;
}

export interface Question {
    id: string;
    label: string;
    answers: Answer[];
    indice: string;
}
