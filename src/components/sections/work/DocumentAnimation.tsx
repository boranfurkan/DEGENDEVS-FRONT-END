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
    <div>
      <PlayerWithNoSSR
        autoplay
        keepLastFrame
        speed={1}
        src={"/assets/lootie/document.json"}
        className="w-[450px] h-[450px] 2xl:w-[500px] 2xl:h-[500px]"
      />
    </div>
  );
};

export default DocumentAnimation;
