/* eslint-disable @next/next/no-img-element */
import '@/styles/home.css';

export default function Team() {
  return (
    <main className="h-full justify-center lg:justify-between flex flex-col-reverse lg:flex-row items-center relative">
      <div className="flex flex-col gap-4 max-w-[700px] lg:w-[55%] z-10">
        <h1 className="text-4xl lg:text-5xl ">
          TEAM <br></br> <span className="hul tracking-widest font-bold">KUGELBLITZ</span>
        </h1>
        <h1 className="text-xl lg:text-2xl ">
          FROM <span className="text-3xl lg:text-4xl font-bold">BANGLADESH </span>
        </h1>
        <p className="text-sm sm:text-base w-fit  opacity-80">
          The PACE spacecraft is steadily sending data and high-resolution observations of Earth
          &apos;s oceans, aerosols, and clouds. We, a few curious undergraduate students from
          Bangladesh, made it our mission to turn this data into digestible chunks for better
          understanding. Presenting to you, team KUGLEBLITZ, where passion meets necessity,
          curiosity becomes a journey to impact globally.
        </p>
        <div className="mt-2">
          <button className="btn-prim z-10">Visit</button>
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
