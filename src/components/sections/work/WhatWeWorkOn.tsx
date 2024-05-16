import React from "react";
import Image from "next/image";

const WhatWeWorkOn = () => {
  const works = [
    {
      image: "/assets/work-icons/2.svg",
      desciption: "Website Development",
      width: 78,
      height: 71,
    },
    {
      image: "/assets/work-icons/3.svg",
      desciption: "Game Development",
      width: 93,
      height: 71,
    },
    {
      image: "/assets/work-icons/4.svg",
      desciption: "UI/UX Design",
      width: 82,
      height: 71,
    },

    {
      image: "/assets/work-icons/6.svg",
      desciption: "Casino Development",
      width: 81,
      height: 71,
    },
    {
      image: "/assets/work-icons/7.svg",
      desciption: "Staking Platform",
      width: 73,
      height: 71,
    },
    {
      image: "/assets/work-icons/8.svg",
      desciption: "Prize Picks Platform Development",
      width: 83,
      height: 71,
    },
    {
      image: "/assets/work-icons/9.svg",
      desciption: "Telegram/Discord Bot Development",
      width: 80,
      height: 71,
    },
    {
      image: "/assets/work-icons/10.svg",
      desciption: "Decentralized Application (dApp)",
      width: 73,
      height: 71,
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      <h3 className="text-[64px] font-bold leading-[79px] tracking-normal text-center">
        What we work on
      </h3>
      <div className="flex flex-row items-center justify-center gap-x-5 gap-y-9 flex-wrap">
        {works.map((work, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-between gap-3 w-[200px] text-center"
            >
              <Image
                src={work.image}
                alt={work.desciption}
                width={work.width}
                height={work.height}
              />
              <span className="text-xl font-medium leading-[30px] tracking-normal text-center">
                {work.desciption}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatWeWorkOn;
