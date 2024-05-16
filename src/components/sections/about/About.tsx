"use client";
import React from "react";
import { AboutCardsContent } from "@/constants";
import AboutCard from "./AboutCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col gap-5 w-max max-sm:w-full" ref={ref}>
      <div className="flex flex-row items-center justify-center gap-8 h-full max-sm:flex-col">
        <motion.div
          className="flex flex-col gap-5 h-full max-sm:w-full"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-cream px-10 py-[30px] rounded-[60px] w-full text-center max-sm:py-2 max-sm:self-center"
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[64px] font-semibold leading-[70px] tracking-normal text-primary-200 max-sm:text-[36px]">
              WHO WE ARE?
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="max-sm:w-full"
          >
            <AboutCard
              {...AboutCardsContent[0]}
              className="px-36 py-20 h-full items-center justify-center max-sm:px-10 max-sm:py-10 "
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-col h-full gap-4 justify-between max-sm:items-center max-sm:justify-center max-sm:w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="px-9 py-10 rounded-[60px] bg-[#992C11] text-center max-sm:max-w-fit max-sm:px-4 max-sm:py-7"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xl font-medium leading-9 tracking-normal max-sm:hidden">
              We are a one stop shop for all your WEB3 <br /> Development needs.
              There isn’t a <br /> task we can’t take on. We are <br /> a team
              of experts.
            </span>

            <span className="text-xl font-medium leading-9 tracking-normal sm:block">
              We are a one stop shop for all your WEB3 Development needs. There
              isn’t a task we can’t take on. We are a team of experts.
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="max-sm:w-full "
          >
            <AboutCard
              {...AboutCardsContent[1]}
              className="px-[102px] py-[35px] max-sm:px-12 max-sm:py-5"
            />
          </motion.div>
        </motion.div>
      </div>
      <div
        className="flex flex-row items-center justify-center gap-5 max-sm:flex-col"
        ref={ref2}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-sm:w-full "
        >
          <AboutCard
            {...AboutCardsContent[2]}
            className="px-[102px] py-[50px] h-full items-center justify-center max-sm:px-12 max-sm:py-5"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex-grow max-sm:w-full"
        >
          <AboutCard
            {...AboutCardsContent[3]}
            className="px-36 py-[65px] h-full items-center justify-center !w-full max-sm:px-12 max-sm:py-5"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
