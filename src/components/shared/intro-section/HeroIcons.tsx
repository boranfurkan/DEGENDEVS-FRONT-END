"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const HeroIcons = () => {
  const { scrollYProgress } = useScroll();

  // Calculate rotation based on scroll position
  // This is just an example, you may need to tweak the range and output values
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="flex flex-col gap-5 pr-12">
      {/* Wrap your Image components with motion.div to animate */}
      <motion.div
        className="flex items-center justify-center"
        style={{ rotate }}
      >
        <Image
          src="/assets/hero-icons/3.png"
          width={131}
          height={100}
          alt="hero-icon"
          className="scale-75"
        />
      </motion.div>
      <div className="flex items-center justify-between">
        <motion.div style={{ rotate }}>
          <Image
            src="/assets/hero-icons/5.png"
            width={113}
            height={100}
            alt="hero-icon"
            className="scale-75"
          />
        </motion.div>
        <motion.div style={{ rotate }}>
          <Image
            src="/assets/hero-icons/2.png"
            width={110}
            height={100}
            alt="hero-icon"
            className="scale-75"
          />
        </motion.div>
      </div>
      <div className="flex items-center justify-evenly mt-2">
        <motion.div style={{ rotate }}>
          <Image
            src="/assets/hero-icons/4.png"
            width={116}
            height={100}
            alt="hero-icon"
            className="scale-75"
          />
        </motion.div>
        <motion.div style={{ rotate }}>
          <Image
            src="/assets/hero-icons/9.png"
            width={113}
            height={100}
            alt="hero-icon"
            className="scale-75"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroIcons;
