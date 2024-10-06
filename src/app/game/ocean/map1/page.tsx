import Carousel from '@/components/Carousel';
import Main from '@/components/layout/Main';
import { BiMouse } from 'react-icons/bi';

const slides: string[] = [];

for (let i = 0; i < 7; i++) {
  slides.push(`/assets/map/1/${i + 1}.JPG`);
}

export default function About() {
  return (
    <>
      <Main>
        <main className="h-full justify-center lg:justify-between flex flex-col gap-4 items-center relative">
          <h1 className="text-center  text-4xl md:text-5xl tracking-widest  font-bold uppercase ">
            LEVEL- COLOURFUL OCEAN
          </h1>
          <div className="mx-auto h-2 w-full flex justify-center gap-4">
            <p>Read Instructions from this slide to play game</p>
          </div>
          <Carousel images={slides} />
          <p className="flex">
            <BiMouse />
            Play Game
          </p>
        </main>
      </Main>
      <div className=" w-[85vw] mx-auto mt-16 mb-32">
        <p>Game</p>
      </div>
    </>
  );
}
