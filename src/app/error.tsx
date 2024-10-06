'use client';
import React from 'react';
import ErrorC from '@/components/Error';
import Main from '@/components/layout/Main';

const Error = ({ reset }: { error: never; reset: () => void }) => {
  return (
    <Main>
      <ErrorC code={500} text={'Something went wrong!'} handle={() => reset()} />
    </Main>
  );
};

export default Error;
