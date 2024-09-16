import GameReport from '@/components/GameReport';
import Improve from '@/components/Improve';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <main className="h-full justify-center lg:justify-between gap-12  flex flex-col lg:flex-row items-center relative py-8">
      <div className="flex flex-col gap-2  lg:max-w-[700px] lg:w-[55%] z-10 lg:my-8">
        <img className="lg:hidden block my-8" src="/image/fish1.svg" alt="" />
        <h1 className="text-2xl sm:text-4xl 2xl:text-5xl font-bold">
          <span className="hul">THANKS</span> FOR <br></br> PLAYING OUR GAME!
        </h1>
        <h1 className="text-base sm:text-xl 2xl:text-2xl  k2d text-white/80">
          PLAYER{' '}
          <span className="text-xl sm:text-2xl 2xl:text-3xl font-semibold text-secondary jost ">
            HRM RAFSAN AMIN{' '}
          </span>
        </h1>
        <div className="mt-3.5">
          <Link href="/game" className="btn-prim z-10">
            Play Again
          </Link>
        </div>
        <img
          className="max-h-[40vh] -mb-[22vh] -ml-[7rem] hidden lg:block"
          src="/image/fish1.svg"
          alt=""
        />
      </div>
      {/* <iframe
        className="w-7 h-7 lg:hidden"
        src="https://lottie.host/embed/e32b3eca-2f63-4c4d-9d0e-0e1c7ab917a7/jajcGnMWYu.json"
      ></iframe> */}
      <div className="lg:w-2/5 relative space-y-16">
        <GameReport />
        <Improve />
      </div>
    </main>
  );
};

export default Page;
