'use client';
import React from 'react';
import Error from '@/components/Error';

const NotFound = () => {
  return <Error code={404} text={"Page doesn't exists."} back />;
};

export default NotFound;
