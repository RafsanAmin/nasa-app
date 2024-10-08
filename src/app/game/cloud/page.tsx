'use client';
import Main from '@/components/layout/Main';
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Sources from '@/components/Sources';
import { BiMouse } from 'react-icons/bi';
import Link from 'next/link';

const Game = dynamic(() => import('@/game/cloud/CloudGame'), { ssr: false });
const SOURCES = [
  'https://www.nasa.gov/centers-and-facilities/goddard/nasa-ocean-ecosystem-mission-moves-forward/',
  'https://phys.org/news/2019-10-tiny-nasa-satellite-rainbows-clouds.html',
  'https://www.nasa.gov/science-research/earth-science/nasa-ocean-ecosystem-mission-preparing-to-make-waves/',
  'https://www.nasa.gov/science-research/earth-science/a-walk-through-the-rainbow-with-pace/',
  'https://science.nasa.gov/earth/nasas-pace-to-investigate-oceans-atmospheres-in-changing-climate/',
  'https://blogs.nasa.gov/pace/2024/02/20/people-of-pace-amir-ibrahim-understands-the-atmosphere-to-study-the-ocean/',
  'https://science.nasa.gov/science-research/earth-science/pace-mission-will-uncover-new-information-about-health-of-our-oceans/',
  'https://ntrs.nasa.gov/citations/20050177201',
];

const Page = ({ searchParams }: { searchParams: { fullscreen: any } }) => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('body').click();
    }, 2000);
  }, []);
  return (
    <>
      {searchParams.fullscreen !== 'true' ? (
        <>
          <Main>
            <p className="mt-6 text-center">
              To play on mobile, click on{' '}
              <a
                className={
                  'border-b border-white/40 hover:border-secondary/80 hover:text-secondary transition'
                }
                href="/game/cloud?fullscreen=true"
              >
                📺 Full Screen View
              </a>{' '}
              & 🔄️ Rotate your screen.
            </p>
            <div className="flex-1 grid place-items-center pt-3 overflow-y-hidden">
              <Game />
            </div>
            <p className="flex gap-2 items-center justify-center mt-4 text-center text-xl">
              <BiMouse className="w-6 h-6 text-secondary" />
              Info Sources<span className="text-secondary">↓</span>
            </p>
          </Main>

          <div className="w-[85vw] mx-auto mb-12">
            <Sources sources={SOURCES} />
          </div>
        </>
      ) : (
        <Game />
      )}
    </>
  );
};

export default Page;
