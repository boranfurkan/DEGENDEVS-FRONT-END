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
    <div className="flex flex-col gap-5 w-max" ref={ref}>
      <div className="flex flex-row items-center justify-center gap-8 h-full">
        <motion.div
          className="flex flex-col gap-5 h-full"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-cream px-10 py-[30px] rounded-[60px] w-full text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[64px] font-semibold leading-[70px] tracking-normal text-primary-200">
              WHO WE ARE?
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <AboutCard
              {...AboutCardsContent[0]}
              className="px-36 py-20 h-full items-center justify-center"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-col h-full gap-4 justify-between"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="px-9 py-10 rounded-[60px] bg-[#992C11] text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xl font-medium leading-9 tracking-normal">
              We are a one stop shop for all your WEB3 <br /> Development needs.
              There isn’t a <br /> task we can’t take on. We are <br /> a team
              of experts.
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <AboutCard
              {...AboutCardsContent[1]}
              className="px-[102px] py-[35px]"
            />
          </motion.div>
        </motion.div>
      </div>
      <div
        className="flex flex-row items-center justify-center gap-5"
        ref={ref2}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <AboutCard
            {...AboutCardsContent[2]}
            className="px-[102px] py-[50px] h-full items-center justify-center"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex-grow"
        >
          <AboutCard
            {...AboutCardsContent[3]}
            className="px-36 py-[65px] h-full items-center justify-center !w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
