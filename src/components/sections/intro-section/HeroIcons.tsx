import React from "react";
import Lottie from "react-lottie";
import Hero from "../../../../public/assets/lootie/hero.json";

const HeroIcons = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Hero,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={350}
        width={350}
        isClickToPauseDisabled={true}
      />
    </div>
  );
};

export default HeroIcons;
