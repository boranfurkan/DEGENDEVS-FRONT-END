import React from "react";
import styles from "./IntroSection.module.css";
import Navbar from "../Navbar";

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
        <div className={`${styles.glass} w-full h-full`}>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
