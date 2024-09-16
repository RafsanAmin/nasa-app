'use client';
import React from 'react';
import ErrorC from '@/components/Error';

const Error = ({ reset }: { error: never; reset: () => void }) => {
  return <ErrorC code={500} text={'Something went wrong!'} handle={() => reset()} />;
};

export default Error;
