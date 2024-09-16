import React from 'react';

const TeamCard = ({ img, name, post }: { img: number; name: string; post: string }) => {
  return (
    <div className="relative group  h-[113px] overflow-hidden 2xl:h-[165px]">
      <div className="p-2 transition translate-y-[110%] text-center group-hover:translate-y-0 absolute top-0 left-0 h-full w-full flex justify-center items-center flex-col bg-black/60 backdrop-blur-sm">
        <p className="font-semibold">{name}</p>
        <p className="text-sm">{post}</p>
      </div>
      <img className="h-[113px] 2xl:h-[165px]" src={`/image/member/${img}.png`} alt="" />
    </div>
  );
};

export default TeamCard;
