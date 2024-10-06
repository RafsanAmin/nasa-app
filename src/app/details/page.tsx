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
      <div className=" w-[85vw] mx-auto mt-16 mb-32">
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
            PACE features three advanced instruments, including the Ocean Color Instrument (OCI),
            which maps ocean hues from near-infrared to ultraviolet with high resolution, revealing
            ocean health and phytoplankton composition. The vibrant colours of the ocean are shaped
            by sunlight interacting with substances like chlorophyll. revealing ocean health and
            phytoplankton composition. The vibrant colours of the ocean are shaped by sunlight
            interacting with substances like chlorophyll.
          </p>
        </div>

        <div className="text-center">
          <h1 className="text-center text-2xl md:text-3xl  font-semibold uppercase mb-4">
            SEND US FEEDBACK
          </h1>
          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-2 ">
            <input
              className="bg-white/50 px-8 py-4 text-black rounded-full text-2xl max-w-[550px] w-full"
              type="text"
            />
            <button className="btn-prim">Send</button>
          </div>
        </div>
      </div>
    </>
  );
}
