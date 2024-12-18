import Main from '@/components/layout/Main';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <Main>
      <main className="h-full w-full relative flex flex-col justify-center sm:gap-8 gap-4 py-8">
        <h1 className="text-3xl md:text-4xl text-center font-bold opacity-90">CHOOSE A JOURNEY</h1>
        <div className="flex flex-col sm:flex-row sm:gap-8 gap-4 justify-center items-center z-10">
          <Link
            href="/game/ocean"
            className="w-full sm:w-1/2 max-w-[300px] grid place-items-center relative rounded-full group cursor-pointer transition active:scale-90"
          >
            <img
              className="w-full max-h-[25vh] sm:max-h-none  object-contain  flex-1   transition group-hover:brightness-75"
              src="/image/game/ocean.png"
              alt=""
            />
            <h2 className="abs-cent flex flex-col items-center  text-2xl font-semibold md:text-3xl">
              OCEAN
              <span className="text-xl md:text-2xl font-normal">Explorer</span>
            </h2>
          </Link>
          <Link
            href="/game/cloud"
            className="w-full sm:w-1/2 max-w-[300px] grid place-items-center relative rounded-full group cursor-pointer transition active:scale-90"
          >
            <img
              className="w-full max-h-[25vh] sm:max-h-none  object-contain  flex-1  transition group-hover:brightness-75"
              src="/image/game/cloud.png"
              alt=""
            />
            <h2 className="abs-cent flex flex-col items-center  text-2xl font-semibold md:text-3xl">
              CLOUD
              <span className="text-xl md:text-2xl font-normal">Heroes</span>
            </h2>
          </Link>
          <Link
            href="/game/ocean/map1"
            className="w-full sm:w-1/2 max-w-[300px] grid place-items-center relative rounded-full group cursor-pointer transition active:scale-90"
          >
            <img
              className="w-full max-h-[25vh] sm:max-h-none  object-contain  flex-1  transition group-hover:brightness-75"
              src="/image/game/map.png"
              alt=""
            />
            <h2 className="abs-cent flex flex-col items-center  text-2xl font-semibold md:text-3xl">
              AQUA
              <span className="text-xl md:text-2xl font-normal">Quest</span>
            </h2>
          </Link>
        </div>
        <img
          className="-left-20 bottom-1/4 md:-bottom-16  absolute w-[125px] lg:w-[175px] z-0 transition "
          src="/image/fish2.svg"
          alt=""
        />
        <img
          className="-right-20  -bottom-16  absolute w-[200px] lg:w-[250px] z-0 transition "
          src="/image/fish1.svg"
          alt=""
        />
      </main>
    </Main>
  );
};

export default Page;
