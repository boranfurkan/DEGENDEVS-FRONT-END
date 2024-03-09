"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroText = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="font-bold text-8xl">WE CAN BUILD</h2>
      <div className="min-h-10">
        <TypeAnimation
          sequence={[
            "your digital dreams into reality.",
            2000,
            "websites that captivate and convert.",
            2000,
            "bridges to your digital future.",
            2000,
            "the web, one pixel at a time.",
            2000,
            "smarter solutions for a digital world.",
            2000,
            "your online presence, beyond imagination.",
            2000,
            "the foundation of your digital empire.",
            2000,
            "innovative experiences for the web.",
            2000,
            "your vision into a virtual masterpiece.",
            2000,
            "seamless connections for a digital age.",
            2000,
            "the future of web development, today.",
            2000,
            "the code that changes the web.",
            2000,
          ]}
          speed={50}
          deletionSpeed={75}
          style={{ fontSize: "1.75rem" }}
          repeat={Infinity}
          className="text-primary-300 font-bold italic text-4xl tracking-wide"
        />
      </div>
    </div>
  );
};

export default HeroText;
