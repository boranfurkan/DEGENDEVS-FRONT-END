"use client";
import dynamic from "next/dynamic";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import DocumentAnimation from "./DocumentAnimation";

const PlayerWithNoSSR = dynamic(
  () =>
    import("@lottiefiles/react-lottie-player").then((module) => module.Player),
  { ssr: false }
);

const HowItWorks = () => {
  const baseDivVariant = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const getDivVariantWithDelay = (delay: any) => ({
    ...baseDivVariant,
    onscreen: {
      ...baseDivVariant.onscreen,
      transition: {
        ...baseDivVariant.onscreen.transition,
        delay: delay,
      },
    },
  });

  const bulbVariant = {
    offscreen: {
      opacity: 1,
    },
    onscreen: {
      opacity: 1,
      rotate: [0, 0, 20, -20, 0],
      transition: { ease: "easeInOut", duration: 2, delay: 0 },
    },
  };

  const gearVariant = {
    offscreen: {
      opacity: 1,
    },
    onscreen: {
      opacity: 1,
      rotate: 360,
      transition: { ease: "easeInOut", duration: 3 },
    },
  };

  const rocketVariant = {
    offscreen: {
      opacity: 1,
    },
    onscreen: {
      opacity: 1,
      rotate: [0, -10, 10, -10, 0],
      transition: { ease: "easeInOut", duration: 3.5, delay: 0.5 },
    },
  };

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="flex flex-col gap-16">
      <h3 className="text-[64px] font-bold leading-[79px] tracking-normal text-center">
        How it works?
      </h3>
      <div className="flex flex-row gap-24 items-center justify-between">
        <DocumentAnimation />
        <div className="flex flex-col gap-10" ref={ref}>
          <motion.div
            className="px-10 py-5 rounded-[60px] flex flex-col gap-1 bg-primary-300 relative"
            initial="offscreen"
            animate={inView ? "onscreen" : "offscreen"}
            variants={getDivVariantWithDelay(0)}
          >
            <h2 className="text-5xl font-bold leading-[60px] tracking-normal text-left">
              1. Plan
            </h2>
            <p className="text-xl font-medium leading-[30px] tracking-normal text-left">
              Outline project goals & we align designs with your vision. We work
              with you to understand your business and your customers.
            </p>
            <motion.div
              initial="offscreen"
              animate={inView ? "onscreen" : "offscreen"}
              variants={bulbVariant}
              className="absolute -top-12 -left-12"
            >
              <Image
                src="/assets/bulb.png"
                width={108}
                height={103}
                alt="bulb"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="px-10 py-5 rounded-[60px] flex flex-col gap-1 bg-primary-300 relative"
            initial="offscreen"
            animate={inView ? "onscreen" : "offscreen"}
            variants={getDivVariantWithDelay(0.8)}
          >
            <h2 className="text-5xl font-bold leading-[60px] tracking-normal text-left">
              2. Iterate
            </h2>
            <p className="text-xl font-medium leading-[30px] tracking-normal text-left">
              Dive into the design phase and refine through unlimited revisions
              until perfection.
            </p>
            <motion.div
              initial="offscreen"
              animate={inView ? "onscreen" : "offscreen"}
              variants={gearVariant}
              className="absolute -top-12 -left-12"
            >
              <Image
                src="/assets/gear.png"
                width={108}
                height={103}
                alt="gear"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="px-10 py-5 rounded-[60px] flex flex-col gap-1 bg-primary-300 relative"
            initial="offscreen"
            animate={inView ? "onscreen" : "offscreen"}
            variants={getDivVariantWithDelay(1.6)}
          >
            <h2 className="text-5xl font-bold leading-[60px] tracking-normal text-left">
              3. Launch
            </h2>
            <p className="text-xl font-medium leading-[30px] tracking-normal text-left">
              Finalize your design, implement it, and let your business grow
              with a design that evolves with you.
            </p>
            <motion.div
              initial="offscreen"
              animate={inView ? "onscreen" : "offscreen"}
              variants={rocketVariant}
              className="absolute -top-12 -left-12"
            >
              <Image
                src="/assets/rocket.png"
                width={108}
                height={103}
                alt="rocket"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
