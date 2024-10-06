import Main from '@/components/layout/Main';
import StudyMaterialData from '../data';
import Quiz from './Quiz';
import One from './StudyMaterial/1';
import Two from './StudyMaterial/2';
import Three from './StudyMaterial/3';

export default function About({ params }: { params: { id: string } }) {
  const index = Number(params.id);
  const Data = StudyMaterialData[index];
  return (
    <>
      <Main>
        <main className="h-full justify-center lg:justify-between flex flex-col-reverse lg:flex-row items-center relative">
          <div className="flex flex-col pt-8 justify-center items-center w-full gap-8 h-full">
            <h1 className="text-center  text-4xl md:text-5xl tracking-widest  font-bold uppercase ">
              {Data.title}
            </h1>
            <div className="mx-auto h-2 w-full flex justify-center gap-4">
              <div className="h-2 w-[50px] bg-white/70 rounded-full "></div>
              <div className="h-2 w-[150px] bg-white/70 rounded-full "></div>
            </div>
            <img
              className="max-h-[50vh] w-full object-cover rounded-xl border-4 border-white h-full"
              src={Data.imgURL}
              alt=""
            />
          </div>
        </main>
      </Main>
      <div className="w-[85vw] detail">
        {index === 0 ? <One /> : index === 1 ? <Two /> : index === 2 ? <Three /> : null}
      </div>
      <div className=" w-[85vw] mx-auto mt-16 mb-32">
        <Quiz Data={Data} indexD={index} />
      </div>
    </>
  );
}
