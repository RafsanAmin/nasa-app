'use client';
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Main from '@/components/layout/Main';
import Sources from '@/components/Sources';
import { BiMouse } from 'react-icons/bi';

const Game = dynamic(() => import('@/game/ocean/OceanGame'), { ssr: false });
const SOURCES = [
  'https://appel.nasa.gov/podcast/episode-16-ocean-atmosphere-understanding/',
  'https://www.nasa.gov/science-research/earth-science/nasa-ocean-ecosystem-mission-preparing-to-make-waves/',
  'https://www.science.org/content/article/fleet-robotic-probes-will-monitor-global-warming-s-impact-microscopic-ocean-life',
  'https://www.nasa.gov/science-research/earth-science/a-walk-through-the-rainbow-with-pace/',
  'https://www.nasa.gov/centers-and-facilities/goddard/tracking-carbon-from-the-ocean-surface-to-the-twilight-zone/',
  'https://blogs.nasa.gov/pace/2023/03/22/the-journey-of-a-carbon-atom-from-space-nasas-pace-mission-detects-carbon-in-the-sky-land-and-sea/',
  'https://science.nasa.gov/missions/pace/new-mission-to-study-ocean-color-airborne-particles-and-clouds/',
  'https://www.nasa.gov/science-research/earth-science/nasa-ocean-ecosystem-mission-preparing-to-make-waves/',
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
                href="/game/ocean?fullscreen=true"
              >
                📺 Full Screen View
              </a>{' '}
              & 🔄️ Rotate your screen.
            </p>
            <div className="flex-1 grid place-items-center pt-3">
              <Game />
            </div>
            <p className="flex gap-2 items-center justify-center mt-4 text-center overflow-y-hidden text-xl">
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
