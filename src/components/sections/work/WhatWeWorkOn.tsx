"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const WhatWeWorkOn = () => {
  const works = [
    {
      image: "/assets/work-icons/2.svg",
      description: "Website Development",
      width: 78,
      height: 71,
    },
    {
      image: "/assets/work-icons/3.svg",
      description: "Game Development",
      width: 93,
      height: 71,
    },
    {
      image: "/assets/work-icons/4.svg",
      description: "UI/UX Design",
      width: 82,
      height: 71,
    },
    {
      image: "/assets/work-icons/6.svg",
      description: "Casino Development",
      width: 81,
      height: 71,
    },
    {
      image: "/assets/work-icons/7.svg",
      description: "Staking Platform",
      width: 73,
      height: 71,
    },
    {
      image: "/assets/work-icons/8.svg",
      description: "Prize Picks Platform Development",
      width: 83,
      height: 71,
    },
    {
      image: "/assets/work-icons/9.svg",
      description: "Telegram/Discord Bot Development",
      width: 80,
      height: 71,
    },
    {
      image: "/assets/work-icons/10.svg",
      description: "Decentralized Application (dApp)",
      width: 73,
      height: 71,
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex flex-col gap-10">
      <h3 className="text-[64px] font-bold leading-[79px] tracking-normal text-center">
        What we work on
      </h3>
      <div
        ref={ref}
        className="flex flex-row items-center justify-center gap-x-5 gap-y-9 flex-wrap"
      >
        {works.map((work, index) => {
          return (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-between gap-3 w-[200px] text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Image
                src={work.image}
                alt={work.description}
                width={work.width}
                height={work.height}
              />
              <span className="text-xl font-medium leading-[30px] tracking-normal text-center">
                {work.description}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatWeWorkOn;
