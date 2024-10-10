'use client';
import Carousel from '@/components/Carousel';
import Main from '@/components/layout/Main';
import Modal from '@/components/Modal';
import { useEffect, useState } from 'react';
import { BiMouse } from 'react-icons/bi';
import flashcards from './data';
import { MCQ } from '@/components/MCQ';
import { RxCross1 } from 'react-icons/rx';
import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';
import Sources from '@/components/Sources';
import sources from '../mapsources';

const slides: string[] = [];

for (let i = 0; i < 7; i++) {
  slides.push(`/assets/map/2/${i + 1}.JPG`);
}

export default function About() {
  const [state, setState] = useState<null | string>(null);
  const [storage, setStorage] = useState<null | any>(null);
  const [chosen, setChosen] = useState<number>(0);
  const [sub, setSub] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage) {
      setStorage(JSON.parse(localStorage.getItem('map2')));

      if (storage?.score === 6) {
        alert('🎉 Congratulations!');
      }
    }
  }, [sub, state]);
  return (
    <>
      <Modal state={state !== null}>
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
                      const os = JSON.parse(localStorage.getItem('map2') || '{}');

                      if (!os?.score) {
                        os.score = 0;
                      }

                      if (!os[state] && chosen === flashcards[state]?.correct) {
                        os[state] = true;
                        os.score++;
                      } else if (!os[state]) {
                        os[state] = false;
                      }

                      localStorage.setItem('map2', JSON.stringify(os));
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
      </Modal>
      <Main>
        <main className="h-full pt-5 justify-center lg:justify-between flex flex-col gap-4 items-center relative">
          <h1 className="text-center mt-4  text-3xl md:text-4xl tracking-widest  font-bold uppercase ">
            LEVEL- <span className="text-red-300">COLOURFUL</span> OCEAN
          </h1>
          <div className="mx-auto text-sm md:text-base h-2 w-full flex justify-center gap-4 text-center  mb-4 md:mb-0 ">
            <p>Read Instructions from this slide to play game below. Click to full view.</p>
          </div>
          <Carousel images={slides} tight={true} />
          <p className="flex gap-2 items-center mt-4 text-xl sm:text-2xl px-4 pt-2 pb-3 border-2 border-secondary rounded-full">
            <BiMouse className="w-6 h-6 text-secondary" />
            Play Game <span className="text-secondary animate-bounce">↓</span>
          </p>
        </main>
      </Main>
      <div className=" w-[85vw] mx-auto mx-auto mt-16 mb-32">
        <h1 className="text-3xl font-bold text-center">GAME</h1>
        <p className="text-center mb-4">
          Click on 📍 pinpointed areas to know there relation in them! In mobile please 🔄️ rotate
          your screen.
        </p>
        {storage?.score === 6 ? <p className="text-center mb-4">🎉 You won the game!</p> : null}
        <p className="text-center mb-8">
          Your Score: <span className="text-lg font-semibold">{storage?.score || '0'}</span> / 6
        </p>
        <div className="w-full max-w-[800px] relative mx-auto">
          <div
            onClick={() => setState('white')}
            className={
              '  cursor-pointer w-[30px] h-[30px] absolute left-[45.6%] top-[20.5%] -translate-x-1/2 -translate-y-1/2 ' +
              (storage?.white ? 'opacity-100' : 'opacity-0')
            }
          >
            <FaCheckCircle className="w-4 h-4 text-green-500  bg-white rounded-full" />
          </div>
          <div
            onClick={() => setState('red')}
            className={
              '  cursor-pointer w-[30px] h-[30px] absolute top-[47.6%] left-[26.5%] -translate-x-1/2 -translate-y-1/2 ' +
              (storage?.red ? 'opacity-100' : 'opacity-0')
            }
          >
            <FaCheckCircle className="w-4 h-4 text-green-500  bg-white rounded-full" />
          </div>
          <div
            onClick={() => setState('sky')}
            className={
              '  cursor-pointer w-[30px] h-[30px] absolute top-[24.5%] left-[61.3%] -translate-x-1/2 -translate-y-1/2 ' +
              (storage?.sky ? 'opacity-100' : 'opacity-0')
            }
          >
            <FaCheckCircle className="w-4 h-4 text-green-500  bg-white rounded-full" />
          </div>
          <div
            onClick={() => setState('blue')}
            className={
              '  cursor-pointer w-[30px] h-[30px] absolute top-[42.5%] left-[54.2%] -translate-x-1/2 -translate-y-1/2 ' +
              (storage?.blue ? 'opacity-100' : 'opacity-0')
            }
          >
            <FaCheckCircle className="w-4 h-4 text-green-500  bg-white rounded-full" />
          </div>
          <div
            onClick={() => setState('brown')}
            className={
              '  cursor-pointer w-[30px] h-[30px] absolute top-[70%] left-[38%] -translate-x-1/2 -translate-y-1/2 ' +
              (storage?.brown ? 'opacity-100' : 'opacity-0')
            }
          >
            <FaCheckCircle className="w-4 h-4 text-green-500  bg-white rounded-full" />
          </div>
          <div
            onClick={() => setState('green')}
            className={
              '  cursor-pointer w-[30px] h-[30px] absolute top-[79%] left-[68.67%] -translate-x-1/2 -translate-y-1/2 ' +
              (storage?.green ? 'opacity-100' : 'opacity-0')
            }
          >
            <FaCheckCircle className="w-4 h-4 text-green-500  bg-white rounded-full " />
          </div>

          <img className="w-full " src="/assets/map/2/map.jpg" />
        </div>
        {storage?.score === 6 ? (
          <div className="flex justify-center w-full mt-12">
            <Link href="/game/stat" className="text-center btn-prim mx-auto">
              You finished them all! Let&apos;s see stats.
            </Link>
          </div>
        ) : null}
        <div className="w-[85vw] mx-auto mb-12 mt-8">
          <Sources sources={sources} />
        </div>
      </div>
    </>
  );
}
