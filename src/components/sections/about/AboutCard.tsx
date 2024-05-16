"use client";
import React, { useEffect, useState } from "react";
import SlotCounter from "react-slot-counter";
import { useInView } from "react-intersection-observer";

interface AboutCardProps {
  headingNumber: number;
  subtitle: string;
  content: string;
  className?: string;
}

const AboutCard = ({
  headingNumber,
  subtitle,
  content,
  className,
}: AboutCardProps) => {
  const [mounted, setMounted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const duration = headingNumber >= 500 ? 1.5 : 1;

  return (
    <div
      className={`bg-cream px-24 py-12 rounded-[60px] flex flex-col gap-3 w-max shadow-[0px_5px_50px_0px_#00000040] max-sm:max-w-fit ${className}`}
    >
      <div className="flex flex-col gap-1.5">
        <span className="text-[64px] font-extrabold leading-[75px] tracking-normal text-center text-primary-200">
          <div ref={ref}>
            {inView && (
              <SlotCounter value={headingNumber} duration={duration} />
            )}
            +
          </div>
        </span>
        <h6 className="text-2xl font-bold leading-7 tracking-normal text-center text-primary-200">
          {subtitle}
        </h6>
      </div>
      <p className="text-xl font-medium leading-[30px] tracking-normal text-center text-brown max-sm:hidden">
        {content.split("\n").map((line, index) => (
          <span className="block" key={index}>
            {line}
          </span>
        ))}
      </p>
      <p className="text-xl font-medium leading-[30px] tracking-normal text-center text-brown sm:hidden">
        {content}
      </p>
    </div>
  );
};

export default AboutCard;
