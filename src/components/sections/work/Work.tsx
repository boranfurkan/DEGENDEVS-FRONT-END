"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Work = () => {
  const stickerVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        duration: 2,
      },
    },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="flex flex-col gap-48">
      <div
        className="p-[50px] pr-[180px] bg-cream rounded-[60px] w-max flex flex-col gap-5 relative shadow-[0px_5px_50px_0px_#00000040]"
        ref={ref}
      >
        <h3 className="text-5xl font-bold leading-[60px] tracking-normal text-left text-primary-200">
          Why choose us?
        </h3>
        <p className="text-2xl font-medium leading-9 tracking-normal text-left text-brown">
          Our portfolio speaks for itself, we have worked across <br />
          several different blockchains. We ensure every customer <br />
          100% satisfaction before payment.
        </p>
        <motion.div
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={stickerVariants}
          className="absolute -right-56 -top-10"
        >
          <Image
            src="/assets/star.png"
            width={410}
            height={355}
            alt="star"
            quality={100}
          />
        </motion.div>
      </div>
      <div
        className="p-[50px] pl-[180px] bg-cream rounded-[60px] w-max flex flex-col gap-5 relative shadow-[0px_5px_50px_0px_#00000040] self-end"
        ref={ref2}
      >
        <h3 className="text-5xl font-bold leading-[60px] tracking-normal text-left text-primary-200">
          Best team for you!
        </h3>
        <p className="text-2xl font-medium leading-9 tracking-normal text-left text-brown max-w-[606px]">
          We’re a one-stop process to bringing your development <br /> to life,
          from the full design package, to development, to aftercare we have you
          covered.
        </p>
        <motion.div
          variants={stickerVariants}
          initial="initial"
          animate={inView2 ? "animate" : "initial"}
          className="absolute -left-64 -top-[6.5rem]"
        >
          <Image
            src="/assets/trophy.png"
            width={413}
            height={447}
            alt="star"
            quality={100}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
