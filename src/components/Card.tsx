'use client';

import Link from 'next/link';
import React, { useState } from 'react';
interface CardProps {
  title: string;
  href: string;
  desc: string;
  imgURL: string;
}

const Card = ({ title, desc, imgURL, href }: CardProps) => {
  const [hover, setHover] = useState<boolean>();

  return (
    <Link href={href}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`relative h-full min-h-[360px] cursor-pointer text-black  overflow-hidden rounded-xl ${
          hover ? 'bg-[#363636]' : 'bg-white'
        } shadow-lg duration-300`}
      >
        <p
          className={
            'absolute right-5 top-5 z-20 font-bold  transition-transform text-white' +
            ' ' +
            (hover ? 'translate-x-0' : 'translate-x-60')
          }
        >
          Click to know More →{' '}
        </p>
        <img
          src={imgURL}
          alt={'Image'}
          width={512}
          height={512}
          className={
            'aspect-video w-full rounded-t-xl object-cover ' + ' ' + (hover ? 'opacity-0' : '')
          }
        />
        <img
          src={imgURL}
          alt={'Image'}
          width={512}
          height={512}
          className={
            'transition-filter absolute top-0 aspect-video w-full rounded-t-xl object-cover transition-all' +
            ' ' +
            (hover ? 'h-full opacity-100 blur-sm brightness-50' : 'h-[250px] opacity-0')
          }
        />
        <div
          className={'flex flex-1 flex-col gap-2 p-5 text-left ' + ' ' + (hover ? 'opacity-0' : '')}
        >
          <h1
            className={
              'grid min-h-[50px] k2d font-semibold items-center break-words text-2xl ' + ' '
            }
          >
            {title}
          </h1>
          <p
            style={{ textAlignLast: 'left' }}
            className={'pb-2 text-justify font-Nunito text-base  opacity-50 '}
          >
            {desc}
          </p>
        </div>
        <div
          className={
            'absolute bottom-0 flex flex-1 flex-col gap-2 p-5 text-left transition-all text-white' +
            ' ' +
            (hover ? '-translate-y-0 opacity-100' : '-translate-y-12 opacity-0')
          }
        >
          <h1
            className={
              'grid min-h-[50px] k2d font-semibold items-center break-words text-2xl ' + ' '
            }
          >
            {title}
          </h1>
          <p
            style={{ textAlignLast: 'left' }}
            className={'pb-2 text-justify font-Nunito text-base  opacity-50 '}
          >
            {desc}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
