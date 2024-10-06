import Main from '@/components/layout/Main';
import TeamCard from '@/components/TeamCard';

const Members = [
  {
    name: 'Ahammed Shawki',
    post: 'UI/UX Designer',
  },
  {
    name: 'Mehedi Hasan Farhan',
    post: 'Video Editor',
  },
  {
    name: 'Mumtahina Ambrin',
    post: 'Content Writer',
  },
  {
    name: 'Fawziah Hossain Adiba',
    post: 'PPT Designer',
  },
  {
    name: 'Minhaz Mehedi',
    post: 'Animator',
  },
  {
    name: 'HRM Rafsan Amin',
    post: 'Web Developer',
  },
];

export default function Team() {
  return (
    <Main>
      <main className="h-full justify-center lg:justify-between flex flex-col-reverse lg:flex-row items-center relative my-auto">
        <div className="flex flex-col gap-4 lg:max-w-[700px] lg:w-[60%] z-10 lg:mt-5">
          <h1 className="text-4xl lg:text-[2.65rem] 2xl:text-5xl ">
            TEAM <br></br> <span className="hul tracking-widest font-bold">KUGELBLITZ</span>
          </h1>
          <h1 className="text-xl 2xl:text-2xl ">
            FROM <span className="text-2xl 2xl:text-3xl font-bold">BANGLADESH </span>
          </h1>
          <p className="text-sm sm:text-base w-fit  opacity-80">
            The PACE spacecraft is steadily sending data and high-resolution observations of Earth
            &apos;s oceans, aerosols, and clouds. We, a few curious undergraduate students from
            Bangladesh, made it our mission to turn this data into digestible chunks for better
            understanding. Presenting to you, team KUGLEBLITZ, where passion meets necessity,
            curiosity becomes a journey to impact globally.
          </p>
          <div className="mt-1">
            <button className="btn-prim z-10">Visit</button>
          </div>
        </div>
        <div className="lg:w-[40%] relative flex justify-center">
          <div className="grid sm:grid-cols-3 sm:grid-rows-2 lg:grid-cols-2 lg:grid-rows-3 grid-cols-2 grid-rows-3 gap-2 justify-items-center w-fit my-8 ">
            {Members.map((s, index) => {
              return <TeamCard img={index + 1} key={index} name={s.name} post={s.post} />;
            })}
          </div>
        </div>
        <img
          className="-right-20 lg:-left-20 -bottom-16  absolute w-[150px] 2xl:w-[200px] z-0 "
          src="/image/fish2.svg"
          alt=""
        />
      </main>
    </Main>
  );
}
