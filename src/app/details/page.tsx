'use client';
import Card from '@/components/Card';
import Carousel from '@/components/Carousel';
import Main from '@/components/layout/Main';
import StudyMaterialData from './data';

export default function About() {
  return (
    <>
      <Main>
        <main className="h-full justify-center lg:justify-between flex flex-col-reverse lg:flex-row items-center relative">
          <Carousel
            images={[
              '/image/details/a1/0.jpg',
              '/image/details/a2/0.jpg',
              '/image/details/a3/0.jpg',
            ]}
          />
          <img
            className="-right-20 lg:-left-20 -bottom-16  absolute w-[250px] lg:w-[300px] z-0  "
            src="/image/fish1.svg"
            alt=""
          />
          <img
            className="-right-20  -bottom-16  absolute w-[100px] lg:w-[150px] z-0 transition "
            src="/image/bbl.svg"
            alt=""
          />
        </main>
      </Main>
      <div className=" w-[85vw] mx-auto mx-auto mt-16 mb-32">
        <h1 className="text-center mb-8 text-4xl md:text-5xl tracking-widest  font-bold">
          STUDY MATERIALS
        </h1>
        <div className="grid-fluid-fit-[280px] md:grid-fluid-fit-[320px] gap-5 mt-8">
          {StudyMaterialData.map(({ title, desc, imgURL }, index) => {
            return (
              <Card
                key={index}
                title={title}
                desc={desc}
                imgURL={imgURL}
                href={`/details/${index}`}
              />
            );
          })}
        </div>
        <div className="my-16 bg-white/10 backdrop-blur-lg p-8 md:p-16 rounded-xl shadow-md">
          <h1 className="text-center text-2xl md:text-3xl tracking-widest  font-bold uppercase mb-4">
            how to utilize <br></br> study materials effectively?
          </h1>
          <p className="text-white/50 text-center text-sm">
            To use the resources on our website effectively, start by exploring each
            section—phytoplankton, aerosols or the carbon cycle. Each topic is designed to help you
            understand ocean science step by step. Use the diagrams and data provided to make
            complex ideas easier to grasp. Summarize what you learn in simple terms, and test your
            knowledge with any interactive elements or challenges on the site. This approach will
            help you get the most out of the information we offer.
          </p>
        </div>

        <div className="text-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.currentTarget.reset();
              alert('Feedback Send!');
            }}
          >
            <h1 className="text-center text-2xl md:text-3xl  font-semibold uppercase mb-4">
              SEND US FEEDBACK
            </h1>
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-2 ">
              <input
                className="bg-white/50 px-8 py-4 text-black rounded-full text-2xl max-w-[550px] w-full"
                type="text"
              />
              <button className="btn-prim" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
