import React from "react";
import styles from "./IntroSection.module.css";
import Navbar from "../Navbar";
import HeroText from "./HeroText";
import HeroIcons from "./HeroIcons";
import Link from "next/link";
import Image from "next/image";

const IntroSection = () => {
  return (
    <div
      className={`h-screen w-full px-10 py-5 relative ${styles.bgAnimationColor} overflow-hidden`}
    >
      <div className="absolute inline-flex flex-row inset-0 justify-center items-center space-x-4 top-[50px]">
        <div className={`${styles.bigBubble} ${styles.animation1}`}></div>
        <div className={`${styles.bigBubble} ${styles.animation2}`}></div>
        <div className={`${styles.bigBubble} ${styles.animation3}`}></div>
        {/* Add more bubbles with different classes for varied animations */}
      </div>
      <div className="w-full h-full">
        <div className={`${styles.glass} w-full h-full flex flex-col gap-16`}>
          <Navbar />
          <div className="flex items-center justify-between px-16">
            <HeroText />
            <div className="min-w-[400px]">
              <HeroIcons />
            </div>
          </div>
          <div className="mt-5 flex flex-col items-center gap-5">
            <p className="text-xl font-semibold leading-[30px] tracking-normal text-center">
              We are a tech development business that has vast experience across{" "}
              <br />
              several blockchains, bringing your ideas to life!
            </p>
            <Link
              href="/"
              className="bg-primary-400 bg-opacity-50 text-white font-semibold text-lg rounded-md px-6 py-2"
            >
              Start Your Development Here
            </Link>
            <Link href="/" className="mt-4">
              <Image
                src="/icons/arrow-down.svg"
                width={50}
                height={50}
                alt="arrow"
                className="animate-bounce"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
