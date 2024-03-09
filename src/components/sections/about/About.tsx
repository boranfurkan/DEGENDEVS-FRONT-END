import React from "react";
import { AboutCardsContent } from "@/constants";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="flex flex-col gap-5 w-max">
      <div className="flex flex-row items-center justify-center gap-8 h-full">
        <div className="flex flex-col gap-5 h-full">
          <div className="bg-cream px-10 py-[30px] rounded-[60px] w-full text-center">
            <span className="text-[64px] font-semibold leading-[70px] tracking-normal text-primary-200">
              WHO WE ARE?
            </span>
          </div>
          <AboutCard
            {...AboutCardsContent[0]}
            className="px-36 py-20 h-full items-center justify-center"
          />
        </div>
        <div className="flex flex-col h-full gap-4 justify-between">
          <div className="px-9 py-10 rounded-[60px] bg-[#992C11] text-center">
            <span className="text-xl font-medium leading-9 tracking-normal">
              Whether you have a new venture, a <br />
              pivot, or elevating your brand, you need <br />a design that
              speaks volumes, without
              <br /> draining your resources.
            </span>
          </div>
          <AboutCard
            {...AboutCardsContent[1]}
            className="px-[102px] py-[35px]"
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-5">
        <AboutCard
          {...AboutCardsContent[2]}
          className="px-[102px] py-[50px] h-full items-center justify-center"
        />
        <AboutCard
          {...AboutCardsContent[3]}
          className="px-36 py-[65px] h-full items-center justify-center flex-grow"
        />
      </div>
    </div>
  );
};

export default About;
