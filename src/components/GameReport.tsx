'use client';
import React, { useEffect, useState } from 'react';

const Field = ({
  children,
  score,
  total,
  v,
}: {
  children: React.ReactNode;
  score: number;
  total?: number;
  v: number;
}) => {
  const colorVariants = ['bg-primary', 'bg-secondary'];
  return (
    <div className="flex md:items-center gap-2 font-bold md:flex-row flex-col">
      <span className="-mt-1 md:basis-[150px] shrink-0 opacity-75">{children}</span>
      <div
        style={{
          width: `${
            total
              ? `calc(${(score / total) * 100}% - (150px * ${score / total}))`
              : score === 0
              ? '0%'
              : '60%'
          }`,
        }}
        className={`h-3 rounded-full ${colorVariants[v]}`}
      ></div>
      <span className="opacity-80">
        {score}
        <span className="text-sm opacity-50">{total ? <>/{total}</> : null}</span>
      </span>
    </div>
  );
};

const GameReport = () => {
  const [a, aa] = useState(false);

  useEffect(() => {
    if (window) {
      aa(true);
    }
  }, []);

  if (a) {
    const gs = (s: string) => {
      return Number(localStorage.getItem(s));
    };
    const gsp = (s: string, p: string) => {
      const rr = JSON.parse(localStorage.getItem(s));
      if (rr) {
        return Number(rr[p]);
      } else {
        return 0;
      }
    };
    return (
      <div className="">
        <h2 className="text-2xl lg:text-3xl text-center font-bold mb-8">GAME REPORT</h2>
        <div className="space-y-5">
          <Field score={gs('1_1')} v={0}>
            Ocean Game Lvl.1
          </Field>
          <Field score={gs('1_2')} v={1}>
            Ocean Game Lvl.2
          </Field>
          <Field score={gsp('map1', 'won')} total={1} v={1}>
            Ocean Color Map 1
          </Field>
          <Field score={gsp('map2', 'score')} total={6} v={0}>
            Ocean Color Map 2
          </Field>
          <Field score={gs('2')} v={0}>
            Cloud Game
          </Field>
          <Field score={gs('section_0')} total={10} v={1}>
            Harmful Algal Blooms
          </Field>
          <Field score={gs('section_1')} total={10} v={0}>
            Aerosol & Climate
          </Field>
          <Field score={gs('section_2')} total={10} v={1}>
            Carbon Cycle
          </Field>
        </div>
      </div>
    );
  }

  return null;
};

export default GameReport;
