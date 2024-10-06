'use client';
import React from 'react';
import Error from '@/components/Error';
import Main from '@/components/layout/Main';

const NotFound = () => {
  return (
    <Main>
      <Error code={404} text={"Page doesn't exists."} back />
    </Main>
  );
};

export default NotFound;
