"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const PlayerWithNoSSR = dynamic(
  () =>
    import("@lottiefiles/react-lottie-player").then((module) => module.Player),
  { ssr: false }
);

const DocumentAnimation = () => {
  return (
    <div className="w-[300px] h-[300px] 2xl:w-[375px] 2xl:h-[375px]">
      <PlayerWithNoSSR
        autoplay
        keepLastFrame
        speed={1}
        loop
        src={"/assets/lootie/document.json"}
      />
    </div>
  );
};

export default DocumentAnimation;
