'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const path = usePathname();
  return (
    <li className={`b-line transition ${path === href ? 'b-line-actv' : ''}`}>
      <Link href={href}>{children}</Link>
    </li>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [path]);
  return (
    <nav className="flex justify-between items-center">
      <Link href="/" className="jost text-2xl font-bold">
        KUGELBLITZ
      </Link>
      <ul
        className={`flex gap-8 lg:gap-12 lg:shadow-none bg-[#40a5a2] shadow-md lg:bg-transparent lg:backdrop-blur-none transition  top-[5rem] right-[2.5rem] px-12 py-8 lg:p-0 rounded-xl  font-medium flex-col lg:flex-row text-center absolute lg:static origin-top-right z-30 ${
          open ? 'scale-100' : 'scale-0 pointer-events-none lg:scale-100 lg:pointer-events-auto'
        }`}
      >
        <NavLink href="/">Home</NavLink>
        <NavLink href="/game">Play Game</NavLink>
        <NavLink href="/about">About PACE</NavLink>
        <NavLink href="/team">Team Info</NavLink>
      </ul>
      <button className="lg:hidden" onClick={() => setOpen((s) => !s)}>
        {open ? <RxCross2 className="w-7 h-7" /> : <RiMenu3Fill className="w-7 h-7" />}
      </button>
    </nav>
  );
};

export default Navbar;
