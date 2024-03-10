"use client";
import React from "react";
import Hero from "../../../../public/assets/lootie/hero.json";
import dynamic from "next/dynamic";

const PlayerWithNoSSR = dynamic(
  () =>
    import("@lottiefiles/react-lottie-player").then((module) => module.Player),
  { ssr: false }
);

const HeroIcons = () => {
  return (
    <div className="w-[300px] h-[300px] 2xl:w-[375px] 2xl:h-[375px]">
      <PlayerWithNoSSR
        autoplay
        keepLastFrame
        loop
        src={"/assets/lootie/hero.json"}
      />
    </div>
  );
};

export default HeroIcons;
