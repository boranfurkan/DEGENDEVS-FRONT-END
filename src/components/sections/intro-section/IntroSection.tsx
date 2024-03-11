"use client";
import React from "react";
import styles from "./IntroSection.module.css";
import Navbar from "../Navbar";
import HeroText from "./HeroText";
import HeroIcons from "./HeroIcons";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CryptoSlider from "./CryptoSlider";

const IntroSection = () => {
  return (
    <div
      className={`h-screen w-full px-10 py-5 relative ${styles.bgAnimationColor} overflow-hidden`}
    >
      <div className="absolute inline-flex flex-row inset-0 justify-center items-center space-x-4 top-[50px]">
        <div className={`${styles.bigBubble} ${styles.animation1}`}></div>
        <div className={`${styles.bigBubble} ${styles.animation2}`}></div>
        <div className={`${styles.bigBubble} ${styles.animation3}`}></div>
      </div>
      <div className="w-full h-full">
        <div className={`${styles.glass} w-full h-full flex flex-col gap-16`}>
          <Navbar />
          <div className="flex items-center justify-center gap-28">
            <HeroText />
            <HeroIcons />
          </div>
          <motion.div
            className="mt-5 flex flex-col items-center gap-5"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <motion.p
              className="text-xl font-semibold leading-[30px] tracking-normal text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              We are a tech development business that has vast experience across{" "}
              <br />
              several blockchains, bringing your ideas to life!
            </motion.p>
            <Link href="/">
              <motion.div
                className="bg-primary-400 bg-opacity-50 text-white font-semibold text-lg rounded-md px-6 py-2"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
              >
                Start Your Development Here
              </motion.div>
            </Link>
            <motion.div
              className="mt-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
            >
              <Link href="/">
                <Image
                  src="/icons/arrow-down.svg"
                  width={50}
                  height={50}
                  alt="arrow"
                  className="animate-bounce"
                  style={{ animationDuration: "1.1s" }}
                />
              </Link>
            </motion.div>
            <CryptoSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
