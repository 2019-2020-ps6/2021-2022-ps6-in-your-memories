export interface Answer {
    value: string;
    isCorrect: boolean;
    imageAns?: string;
}

export interface Question {
    id: string;
    label: string;
    answers: Answer[];
    indice: string;
    image?: string;
}
