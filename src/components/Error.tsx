'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const Error = ({
  code,
  text,
  handle,
  back,
  href,
}: {
  code: number;
  text: string;
  href?: string;
  handle?: () => void;
  back?: boolean;
}) => {
  const R = useRouter();

  return (
    <div className="flex-1 h-full grid place-items-center">
      <div className="text-center">
        <img className="w-[280px]" src="/image/error.png" alt="" />
        <h1 className="text-7xl font-bold text-secondary">{code}</h1>
        <p>{text}</p>
        <button
          onClick={() => {
            if (handle) {
              handle();
            } else if (back) {
              R.back();
            } else if (href) {
              R.push(href);
            }
          }}
          className="btn-prim mt-6"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Error;
