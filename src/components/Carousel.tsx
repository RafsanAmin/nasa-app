'use client';
import { N_Array } from '@/util/array';
import React, { useState } from 'react';

type props = {
  images: string[];
};

const Carousel = ({ images }: props) => {
  const count = images.length;
  const [state, setState] = useState<number>(0);

  const next = () => setState((s) => (s + 1 < count ? s + 1 : 0));
  const prev = () => setState((s) => (s - 1 >= 0 ? s - 1 : count - 1));
  return (
    <div className="py-8 h-full flex-1">
      <div className="max-w-full  h-full items-center grid grid-cols-[6px_1fr_6px] md:grid-cols-[48px_1fr_48px] gap-1 md:gap-4">
        <button
          type="button"
          onClick={prev}
          className="cursor-pointer hover:scale-105 transition active:scale-90  w-12 h-12 -translate-x-1/4 md:translate-x-0 z-20"
        >
          <img src="/image/arrow.svg" className="w-full" alt="" />
        </button>
        <div className="max-w-full overflow-hidden h-full">
          <div
            style={{
              width: `${count * 100}%`,
              transform: `translateX(-${(state * 100) / count}%)`,
            }}
            className={'flex origin-top-left my-auto items-stretch h-full transition'}
          >
            {images.map((url, index) => (
              <div key={index} className="h-full w-full grid place-items-center">
                <img
                  className="flex-1 rounded-xl border-4 border-white h-full max-h-[60vh] w-full object-cover my-auto"
                  src={url}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={next}
          className="cursor-pointer hover:scale-105 transition active:scale-90  w-12 h-12  -translate-x-1/2 md:translate-x-0 z-20"
        >
          <img src="/image/arrow.svg" className="w-full rotate-180" alt="" />
        </button>
      </div>
      <div className="flex justify-center items-center mt-4 gap-4">
        {N_Array(count).map((s, i) => {
          return (
            <button
              type="button"
              onClick={() => setState(i)}
              className={
                'w-4 h-4  rounded-full' + ' ' + (state === i ? 'bg-secondary' : 'bg-white')
              }
              key={s}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
