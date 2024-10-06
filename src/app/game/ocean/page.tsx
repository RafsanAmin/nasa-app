import React from 'react';
import Game from '@/game/ocean/OceanGame';
import Main from '@/components/layout/Main';

const Page = () => {
  return (
    <Main>
      <div className="flex-1 grid place-items-center pt-3">
        <Game />
      </div>
    </Main>
  );
};

export const dynamic = 'force-dynamic';

export default Page;
