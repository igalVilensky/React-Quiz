import { shuffleArray } from "./utils";
export type Question = {
  category: string;
  difficulty: string;
  correct_answer: string;
  question: string;
  type: string;
  incorrect_answers: string[];
};

export type QuestionState = Question & {
  answers: string[];
};

export enum Difficulty {
  EASY = "easy",
  MEDIOUM = "medium",
  HARD = "hard",
}

export const fetchQQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
