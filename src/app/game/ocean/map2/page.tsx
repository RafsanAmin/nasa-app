'use client';
import Carousel from '@/components/Carousel';
import Main from '@/components/layout/Main';

import { useEffect, useState } from 'react';
import { BiCross, BiMouse } from 'react-icons/bi';

import Link from 'next/link';

const slides: string[] = [];

for (let i = 0; i < 3; i++) {
  slides.push(`/assets/map/2/${i + 1}.JPG`);
}

export default function About() {
  const [state, setState] = useState<null | string[]>([]);
  const [storage, setStorage] = useState<null | any>(null);
  const [sub, setSub] = useState<boolean>(false);

  const push = (s: string) => {
    setState((p) => [...p, s]);
  };

  useEffect(() => {
    if (localStorage) {
      setStorage(JSON.parse(localStorage.getItem('map2')));
    }
  }, [sub, state]);
  return (
    <>
      {/* <Modal state={state !== null}>
        <div
          className={
            'bg-white/20  overflow-y-scroll overflow-x-clip backdrop-blur-lg transition w-[90%] max-w-[500px] absolute top-8 left-1/2 -translate-x-1/2 max-h-[90vh] p-8 rounded-xl ' +
            (state ? 'scale-100' : 'scale-0')
          }
        >
          {state !== null && (
            <>
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    setState(null);
                    setChosen(0);
                    setSub(false);
                  }}
                >
                  <RxCross1 className="w-7 h-7" />
                </button>
              </div>
              <h2 className="text-xl font-bold mb-2">{flashcards[state].title}</h2>

              <MCQ
                q={flashcards[state]}
                chosen={chosen}
                setChoose={(s) => setChosen(s)}
                qN={0}
                submitted={sub}
              />

              {sub ? (
                <div className="bg-primary mt-8  p-5 rounded-lg mb-5">
                  <p className="mb-2  text-center ">📄 Explaination:</p>
                  <p className="  mb-2 opacity-80">{flashcards[state].cause}</p>
                </div>
              ) : (
                false
              )}
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    if (!sub) {
                      setSub(true);
                      let os = JSON.parse(localStorage.getItem('map1') || '{}');

                      if (!os?.score) {
                        os.score = 0;
                      }

                      if (!os[state] && chosen === flashcards[state]?.correct) {
                        os[state] = true;
                        os.score++;
                      } else if (!os[state]) {
                        os[state] = false;
                      }

                      localStorage.setItem('map1', JSON.stringify(os));
                    } else {
                      setState(null);
                      setChosen(0);
                      setSub(false);
                    }
                  }}
                  className="btn-prim "
                  type="button"
                >
                  {!sub ? 'Submit' : 'Close'}
                </button>
              </div>
            </>
          )}
        </div>
      </Modal> */}
      <Main>
        <main className="h-full pt-5 justify-center lg:justify-between flex flex-col gap-4 items-center relative">
          <h1 className="text-center  text-3xl md:text-4xl tracking-widest  font-bold uppercase ">
            LEVEL- <span className="text-green-300">GREEN</span> OCEAN
          </h1>
          <div className="mx-auto text-sm md:text-base h-2 w-full flex justify-center gap-4 text-center ">
            <p>Read Instructions from this slide to play game below. Click to full view.</p>
          </div>
          <Carousel images={slides} tight={true} />
          <p className="flex gap-2 items-center mt-4">
            <BiMouse className="w-6 h-6 text-secondary" />
            Play Game <span className="text-secondary">↓</span>
          </p>
        </main>
      </Main>
      <div className=" w-[85vw] mx-auto mt-16 mb-32">
        <h1 className="text-3xl font-bold text-center">GAME</h1>
        <p className="text-center mb-4">
          Click on marked based on what instructed above! In mobile please 🔄️ rotate your screen.
        </p>
        {storage?.won ? <p className="text-center mb-4">🎉 You won thegame!</p> : null}

        <div className="w-full max-w-[800px] relative mx-auto">
          <div
            onClick={() => push('a')}
            className={
              '  cursor-pointer w-[30px] h-[30px] absolute left-[48.7%] top-[43.4%] -translate-x-1/2 -translate-y-1/2 '
            }
          ></div>
          <div
            onClick={() => push('b')}
            className={
              '  cursor-pointer w-[30px] h-[30px] absolute left-[65.8%] top-[49.2%] -translate-x-1/2 -translate-y-1/2 '
            }
          ></div>
          <div
            onClick={() => push('c')}
            className={
              '  cursor-pointer w-[30px] h-[30px] absolute left-[57.7%] top-[27.3%] -translate-x-1/2 -translate-y-1/2 '
            }
          ></div>
          <div
            onClick={() => push('d')}
            className={
              '  cursor-pointer w-[30px] h-[30px] absolute left-[30.2%] top-[50%] -translate-x-1/2 -translate-y-1/2 '
            }
          ></div>
          <div
            onClick={() => push('e')}
            className={
              '   cursor-pointer w-[30px] h-[30px] absolute left-[59.2%] top-[61.7%] -translate-x-1/2 -translate-y-1/2 '
            }
          ></div>

          <img className="w-full " src="/assets/map/2/map.png" />
        </div>
        <div className="flex gap-5 justify-center pt-12">
          <div className="w-10 h-10 grid place-items-center bg-black/30 rounded-lg">
            {state[0] || null}
          </div>
          <div className="w-10 h-10 grid place-items-center bg-black/30 rounded-lg">
            {state[1] || null}
          </div>
          <div className="w-10 h-10 grid place-items-center bg-black/30 rounded-lg">
            {state[2] || null}
          </div>
          <div className="w-10 h-10 grid place-items-center bg-black/30 rounded-lg">
            {state[3] || null}
          </div>
          <div className="w-10 h-10 grid place-items-center bg-black/30 rounded-lg">
            {state[4] || null}
          </div>
        </div>
        <div className="flex justify-center w-full mt-12">
          <button
            onClick={() => {
              if (state.join('') === 'cabed') {
                localStorage.setItem('map2', JSON.stringify({ won: true }));

                setTimeout(() => {
                  setSub(true);
                  setState([]);
                  alert('🎉 Congratulations!');
                }, 500);
              } else {
                alert('❌ Wrong Combination');
                setState([]);
              }
            }}
            className="text-center btn-prim mx-auto"
          >
            Submit
          </button>
        </div>
        <div className="flex justify-center w-full mt-12">
          <Link href="/game/ocean/map1" className="text-center btn-prim mx-auto">
            Play Previous level 1
          </Link>
        </div>
      </div>
    </>
  );
}
