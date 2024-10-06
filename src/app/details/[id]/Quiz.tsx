'use client';
import MCQCont from '@/components/MCQ';
import React, { useEffect, useState } from 'react';
import StudyMaterialData from '../data';

const Quiz = ({ Data, indexD }: { Data: (typeof StudyMaterialData)[0]; indexD: number }) => {
  const init = new Array(Data.questions.length);
  const [choice, setChoice] = useState<number[]>(init);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [HighScore, setHS] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    if (localStorage) {
      setTimeout(() => setHS(Number(localStorage.getItem(`section_${indexD}`))), 100);
    }
  }, [score]);

  const setAns = (quesNo: number, choice: number) => {
    setChoice((s) => {
      const copy = [...s];
      s[quesNo] = choice;
      return copy;
    });
  };

  const getScore = () => {
    let score = 0;
    choice.forEach((c, index) => {
      if (c === Data.questions[index].correct) {
        score++;
      }
    });

    return score;
  };

  console.log(choice);

  return (
    <div className="my-16 text-base md:text-lg bg-white/10 backdrop-blur-lg p-8 md:p-16 rounded-xl shadow-md flex flex-col items-center">
      <h1 className="text-center text-2xl md:text-3xl tracking-widest  font-bold uppercase mb-12">
        Give a MCQ test
      </h1>

      <MCQCont
        questions={Data.questions}
        chosen={choice}
        setChoose={setAns}
        submitted={submitted}
      />
      {submitted ? (
        <div className="text-center mt-12 mb-8 bg-white/10 p-5 rounded-lg">
          <p className="text-lg md:text-xl font-medium ">
            Your Score:{' '}
            <b className="text-secondary">
              {score || '0'} / {Data.questions.length}
            </b>
          </p>
          <p className="text-sm md:text-base opacity-80">
            Highest Score:{' '}
            <b>
              {HighScore || '0'} / {Data.questions.length}
            </b>
          </p>
        </div>
      ) : null}
      <button
        type="button"
        className="btn-prim mt-8"
        onClick={() => {
          setSubmitted((s) => {
            if (s) {
              setChoice(init);
            } else {
              const s = getScore();
              localStorage.setItem(`section_${indexD}`, String(Math.max(s, Number(HighScore))));

              setScore(s);

              setTimeout(() => alert(`Your score is ${s}`), 50);
            }
            return !s;
          });
        }}
      >
        {submitted ? 'Give Again' : 'Submit'}
      </button>
    </div>
  );
};

export default Quiz;
