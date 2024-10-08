import React, { Suspense } from 'react';
import Navbar from './Navbar';

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="antialiased grid justify-center min-h-screen w-full h-full">
      <main className="cont">
        <Suspense>
          <Navbar />
        </Suspense>
        {children}
      </main>
    </div>
  );
};

export default Main;
