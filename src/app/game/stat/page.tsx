'use client';
import GameReport from '@/components/GameReport';
import Improve from '@/components/Improve';
import Main from '@/components/layout/Main';
import Modal from '@/components/Modal';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { RxCross1 } from 'react-icons/rx';

const Page = () => {
  const [state, setState] = useState(false);
  const [l, ll] = useState(false);

  useEffect(() => {
    if (localStorage) {
      ll(true);
      const name = localStorage.getItem('name');
      if (!name) {
        setState(true);
      }
    }
  }, []);

  if (l) {
    return (
      <>
        <Modal state={state}>
          {' '}
          <div
            className={
              'bg-white/20   backdrop-blur-lg transition w-[90%] max-w-[500px] absolute top-8 left-1/2 -translate-x-1/2 max-h-[90vh] p-8 rounded-xl ' +
              (state ? 'scale-100' : 'scale-0')
            }
          >
            {state !== null && (
              <>
                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      setState(false);
                    }}
                    type="button"
                  >
                    <RxCross1 className="w-7 h-7" />
                  </button>
                </div>
                <h2 className="text-xl font-bold mb-2">Set Your Name</h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formdata = new FormData(e.currentTarget);
                    const name = formdata.get('name');
                    if (String(name) === '') {
                      alert('Please give a name.');
                    } else {
                      localStorage.setItem('name', String(name));

                      setTimeout(() => {
                        setState(false);
                      }, 300);
                    }
                  }}
                >
                  <input
                    className="bg-white/50 px-8 py-4 text-black rounded-full text-2xl max-w-[550px] w-full mb-4"
                    type="text"
                    name="name"
                  />
                  <div className="flex justify-end">
                    <button className="btn-prim " type="submit">
                      Set Name
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </Modal>
        <Main>
          <main className="h-full justify-center lg:justify-between gap-12  flex flex-col lg:flex-row items-center relative py-8">
            <div className="flex flex-col gap-2  lg:max-w-[700px] lg:w-[55%] z-10 lg:my-8">
              <img className="lg:hidden block my-8" src="/image/fish1.svg" alt="" />
              <h1 className="text-2xl sm:text-4xl 2xl:text-5xl font-bold">
                <span className="hul">THANKS</span> FOR <br></br> PLAYING OUR GAME!
              </h1>
              <h1 className="text-base sm:text-xl 2xl:text-2xl  k2d text-white/80">
                PLAYER{' '}
                <span
                  className="text-xl sm:text-2xl 2xl:text-3xl font-semibold text-secondary jost "
                  onClick={() => {
                    setState(true);
                  }}
                >
                  {localStorage?.getItem('name') || 'Set your name'}{' '}
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
        </Main>
      </>
    );
  }

  return <></>;
};

export default Page;
