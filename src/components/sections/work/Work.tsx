import React from "react";
import Image from "next/image";

const Work = () => {
  return (
    <div className="flex flex-col gap-48 min-w-[1272px]">
      <div className="p-[50px] pr-[180px] bg-cream rounded-[60px] w-max flex flex-col gap-5 relative shadow-[0px_5px_50px_0px_#00000040]">
        <h3 className="text-5xl font-bold leading-[60px] tracking-normal text-left text-primary-200">
          Why choose us?
        </h3>
        <p className="text-2xl font-medium leading-9 tracking-normal text-left text-brown">
          Our portfolio speaks for itself, we have worked across <br />
          several different blockchains. We ensure every customer <br />
          100% satisifaction before payment.
        </p>
        <Image
          src="/assets/star.png"
          width={410}
          height={355}
          alt="star"
          className="absolute -right-56 -top-10"
          quality={100}
        />
      </div>
      <div className="p-[50px] pl-[180px] bg-cream rounded-[60px] w-max flex flex-col gap-5 relative shadow-[0px_5px_50px_0px_#00000040] self-end">
        <h3 className="text-5xl font-bold leading-[60px] tracking-normal text-left text-primary-200">
          Best team for you!
        </h3>
        <p className="text-2xl font-medium leading-9 tracking-normal text-left text-brown max-w-[606px]">
          We’re a one stop process to bringing your development <br /> to life,
          from the full design package, to development, to aftercard we have you
          covered.
        </p>
        <Image
          src="/assets/trophy.png"
          width={413}
          height={447}
          alt="star"
          className="absolute -left-64 -top-[6.5rem]"
          quality={100}
        />
      </div>
    </div>
  );
};

export default Work;
