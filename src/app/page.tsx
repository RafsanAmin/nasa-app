/* eslint-disable @next/next/no-img-element */
import '@/styles/home.css';

export default function Home() {
  return (
    <main className="h-full justify-center lg:justify-between flex flex-col-reverse lg:flex-row items-center relative">
      <div className="flex flex-col gap-4 max-w-[700px] lg:w-[55%] z-10">
        <h1 className="text-4xl lg:text-5xl font-bold">
          <span className="hul">PACE</span> IN THE <br></br> CLASSROOM
        </h1>
        <p className="text-sm sm:text-base w-fit lg:text-lg opacity-80">
          This project takes the gap between the complexity of information and public understanding
          into consideration and focuses on presenting the data in a more interesting, digestible
          and classroom-friendly manner.
        </p>
        <div className="mt-2">
          <button className="btn-prim z-10">Play Game</button>
        </div>
      </div>
      <div className="lg:w-2/5 relative lg:h-full max-h-[60vh] lg:max-h-[auto]">
        <img
          className="-right-1/4 top-[67.77%] -translate-y-1/2 absolute w-[80vw] max-w-[40vw] hidden lg:block pointer-events-none"
          src="/image/astro.png"
          alt=""
        />

        <img
          className="w-3/4 lg:hidden scale-150 translate-y-8  mx-auto -mr-3 max-w-[450px] pointer-events-none max-h-[40vh] "
          src="/image/astro.png"
          alt=""
        />
      </div>
      <img
        className="-right-20 lg:-left-20 -bottom-20  absolute w-[200px] z-0 "
        src="/image/fish2.svg"
        alt=""
      />
    </main>
  );
}
