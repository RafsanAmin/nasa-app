import React, { Suspense } from 'react';
import Navbar from './Navbar';

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="cont">
      <Suspense>
        <Navbar />
      </Suspense>
      {children}
    </main>
  );
};

export default Main;
