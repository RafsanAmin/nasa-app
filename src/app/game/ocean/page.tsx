import React from 'react';
import dynamic from 'next/dynamic';
import Main from '@/components/layout/Main';

const Game = dynamic(() => import('@/game/ocean/OceanGame'), { ssr: false });

const Page = () => {
  return (
    <Main>
      <div className="flex-1 grid place-items-center pt-3">
        <Game />
      </div>
    </Main>
  );
};

export default Page;
