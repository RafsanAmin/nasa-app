import Main from '@/components/layout/Main';
import React from 'react';
import Game from '@/game/cloud/CloudGame';

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
