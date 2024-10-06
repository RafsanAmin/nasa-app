import Main from '@/components/layout/Main';
import React from 'react';
import dynamic from 'next/dynamic';

const Game = dynamic(() => import('@/game/cloud/CloudGame'), { ssr: false });

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
