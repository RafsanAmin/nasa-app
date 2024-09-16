import React from 'react';

const Field = ({
  children,
  score,
  total = 100,
  v,
}: {
  children: React.ReactNode;
  score: number;
  total?: number;
  v: number;
}) => {
  const colorVariants = ['bg-primary', 'bg-secondary'];
  return (
    <div className="flex items-center gap-2 font-bold">
      <span className="-mt-1 basis-[150px] shrink-0 opacity-75">{children}</span>
      <div
        style={{
          width: `calc(${(score / total) * 100}% - (150px * ${score / total}))`,
        }}
        className={`h-3 rounded-full ${colorVariants[v]}`}
      ></div>
    </div>
  );
};

const GameReport = () => {
  return (
    <div className="">
      <h2 className="text-2xl lg:text-3xl text-center font-bold mb-8">GAME REPORT</h2>
      <div className="space-y-5">
        <Field score={70} v={0}>
          Ocean Color
        </Field>
        <Field score={20} v={1}>
          Bio geo Chemistry
        </Field>
        <Field score={50} v={0}>
          Ecology
        </Field>
        <Field score={100} v={1}>
          Carbon Cycle
        </Field>
      </div>
    </div>
  );
};

export default GameReport;
