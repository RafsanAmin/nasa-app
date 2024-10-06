import React from 'react';
import Navbar from './Navbar';

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="cont">
      <Navbar />
      {children}
    </main>
  );
};

export default Main;
