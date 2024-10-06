'use client';
import StudyMaterialData from '@/app/details/data';
import React from 'react';

const ques = StudyMaterialData[0].questions;
type T = (typeof ques)[0];

const MCQ = ({
  q,
  chosen,
  setChoose,
  qN,
  submitted,
}: {
  q: T;
  chosen: number;
  setChoose: (choice: number) => void;
  qN: number;
  submitted: boolean;
}) => {
  return (
    <div>
      <p className={'opacity-75 font-semibold '}>
        <span
          className={`${submitted && (q.correct === chosen ? 'text-green-300' : 'text-red-300')}`}
        >
          {submitted &&
            (q.correct === chosen ? (
              <>
                {'(✅ Correct) '}
                <br></br>
              </>
            ) : (
              <>
                {'(❌ Wrong) '}
                <br></br>
              </>
            ))}
        </span>
        {qN + 1}. {q.question}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 justify-items-stretch max-w-[750px] mx-auto ">
        {q.options.map((option, index) => {
          return (
            <div
              className="flex gap-2 items-center cursor-pointer text-left leading-none my-1.5"
              key={index}
              onClick={() => {
                if (!submitted) {
                  setChoose(index + 1);
                }
              }}
            >
              <span className={`bg-white w-4 h-4 rounded-full grid place-items-center shrink-0`}>
                <span
                  className={`w-3 h-3 rounded-full ${
                    chosen === index + 1 && !submitted
                      ? 'bg-primary '
                      : q.correct === index + 1 && submitted
                      ? 'bg-green-500'
                      : chosen === index + 1 && submitted
                      ? 'bg-yellow-500'
                      : q.correct !== index + 1 && submitted
                      ? 'bg-red-500'
                      : ''
                  }`}
                ></span>
              </span>
              <span
                className={`font-semibold ${
                  chosen === index + 1 && !submitted
                    ? 'text-secondary '
                    : q.correct === index + 1 && submitted
                    ? 'text-green-300'
                    : chosen === index + 1 && submitted
                    ? 'text-yellow-300'
                    : q.correct !== index + 1 && submitted
                    ? 'text-red-300'
                    : ''
                }`}
              >
                {option}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const MCQCont = ({
  questions,
  chosen,
  setChoose,
  submitted,
}: {
  questions: T[];
  chosen: number[];
  setChoose: (quesNo: number, choice: number) => void;
  submitted: boolean;
}) => {
  return (
    <div className="space-y-12 md:text-center">
      {questions.map((q, index) => {
        return (
          <MCQ
            key={index}
            q={q}
            chosen={chosen[index]}
            setChoose={(choice: number) => {
              setChoose(index, choice);
            }}
            qN={index}
            submitted={submitted}
          />
        );
      })}
    </div>
  );
};

export default MCQCont;
