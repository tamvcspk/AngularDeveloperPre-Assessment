export type QuestionType = 'checkbox' | 'paragraph';

export interface Answer {
  checkboxAnswers: boolean[];
  paragraphAnswer: string;
  otherAnswer: string;
}

export interface Question {
  questionType: QuestionType;
  question: string;
  options: string[];
  allowOwnAnswer: boolean;
  required: boolean;
  answer: Answer | null;
}

