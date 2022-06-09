import React, { useState, useEffect } from "react";
import { fetchQQuestions } from "./API";

/**
 *  ! Types
 **/
import { QuestionState, Difficulty } from "./API";
/**
 *  ! Components
 **/
import QCard from "./components/QCard";
/**
 *  ! Styles
 **/
import { GlobalStyle, Wrapper } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

export type UserChoice = {
  dificulty: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [dificulty, setDificulty] = useState<string>("");
  const [choice, setChoice] = useState("easy");
  console.log(dificulty, "test");
  console.log(loading, gameOver);

  // console.log(fetchQQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  // let setUserDiificulty = async (dificulty: any) => {
  //   if (dificulty === 1) {
  //     dificulty = Difficulty.EASY;
  //   } else if (dificulty === 2) {
  //     dificulty = Difficulty.MEDIOUM;
  //   } else {
  //     Difficulty.HARD;
  //   }
  //   return Difficulty;
  // };
  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    setDificulty(dificulty);
    const newQuestions = await fetchQQuestions(TOTAL_QUESTIONS, dificulty);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      /**
       *  ! Users answer
       **/

      const answer = e.currentTarget.value;

      /**
       *  ! Check value against correct answer
       **/

      const correct = questions[number].correct_answer === answer;

      /**
       *  ! Add score if answer is correct
       **/

      if (correct) setScore((prev) => prev + 1);
      /**
       *  ! Save answer in users answer array
       **/

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    /**
     *  ! Move on to the next ? if not the last ?
     **/

    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>REACT QUIZ</h1>
        {dificulty === "" && (
          <div>
            <div className="setLevel">
              <div className="setlevelHeading">
                <h2 className="">Set Dificulty Level</h2>
              </div>
              <div className="setLevelButtons">
                <button onClick={() => setDificulty(Difficulty.EASY)} value={1}>
                  easy
                </button>
                <button
                  onClick={() => setDificulty(Difficulty.MEDIUM)}
                  value={2}
                >
                  medium
                </button>
                <button onClick={() => setDificulty(Difficulty.HARD)} value={3}>
                  hard
                </button>
              </div>
            </div>
          </div>
        )}
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startQuiz}>
            Start
          </button>
        ) : null}
        {!gameOver ? <p className="score">Score:{score}</p> : null}
        {loading && <p className="loading">Loading Questions ...</p>}
        {!loading && !gameOver && (
          <>
            <QCard
              questionNr={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            />
          </>
        )}
        {number !== TOTAL_QUESTIONS - 1 ? (
          <div className="quizLevelDisplay">
            <h3>
              Quiz Level: <span>{dificulty}</span>
            </h3>
          </div>
        ) : null}

        {!loading &&
        !gameOver &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <>
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>
          </>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
