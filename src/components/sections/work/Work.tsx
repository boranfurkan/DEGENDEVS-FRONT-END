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
    <div className="flex flex-col gap-48 max-md:gap-36">
      <div
        className="p-[50px] pr-[180px] bg-cream rounded-[60px] w-max flex flex-col gap-5 relative shadow-[0px_5px_50px_0px_#00000040] max-xl:w-full max-md:p-[25px] max-md:text-center max-md:pt-20"
        ref={ref}
      >
        <h3 className="text-5xl font-bold leading-[60px] tracking-normal text-primary-200">
          Why choose us?
        </h3>
        <p className="text-2xl font-medium leading-9 tracking-normal text-brown max-sm:hidden">
          Our portfolio speaks for itself, we have worked across <br />
          several different blockchains. We ensure every customer <br />
          100% satisfaction before payment.
        </p>
        <p className="text-2xl font-medium leading-9 tracking-normal text-brown hidden max-sm:block">
          Our portfolio speaks for itself, we have worked across several
          different blockchains. We ensure every customer 100% satisfaction
          before payment.
        </p>
        <motion.div
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={stickerVariants}
          className="absolute -right-56 -top-10 max-md:-right-10 max-md:-top-20  max-xl:-right-16"
        >
          <Image
            src="/assets/star.png"
            width={410}
            height={355}
            alt="star"
            quality={100}
            className="max-md:w-[200px] max-md:h-auto"
          />
        </motion.div>
      </div>
      <div
        className="p-[50px] pl-[180px] bg-cream rounded-[60px] w-max flex flex-col gap-5 relative shadow-[0px_5px_50px_0px_#00000040] self-end max-xl:w-full max-md:p-[25px] max-md:text-center max-md:pt-20 max-xl:text-right"
        ref={ref2}
      >
        <h3 className="text-5xl font-bold leading-[60px] tracking-normal text-primary-200">
          Best team for you!
        </h3>
        <p className="text-2xl font-medium leading-9 tracking-normal text-brown max-w-[606px] max-xl:hidden">
          We’re a one-stop process to bringing your development <br /> to life,
          from the full design package, to development, to aftercare we have you
          covered.
        </p>

        <p className="text-2xl font-medium leading-9 tracking-normal text-brown max-w-[606px] hidden max-xl:block max-xl:self-end">
          We’re a one-stop process to bringing your development to life, from
          the full design package, to development, to aftercare we have you
          covered.
        </p>

        <motion.div
          variants={stickerVariants}
          initial="initial"
          animate={inView2 ? "animate" : "initial"}
          className="absolute -left-64 -top-[6.5rem] max-md:-left-10 max-md:-top-28 max-xl:-left-8"
        >
          <Image
            src="/assets/trophy.png"
            width={413}
            height={447}
            alt="star"
            quality={100}
            className="max-md:w-[200px] max-md:h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
