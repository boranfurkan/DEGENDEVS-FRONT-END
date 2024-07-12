"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
interface AnimatedTickerProps {
  className?: string;
}

const AnimatedTicker: React.FC<AnimatedTickerProps> = ({ className }) => {
  const [width, setWidth] = useState(0);
  const tickerRef = useRef<HTMLDivElement>(null);
  const tickerContentRef = useRef<HTMLDivElement>(null);
  const scrollSpeed = 1;

  const logos = [
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
    "/icons/sol.png",
    "/icons/ethereum.svg",
    "/icons/bitcoin.svg",
    "/icons/cosmos.svg",
  ];

  const tickerItems = logos.map((logo, index) => (
    <Image
      key={index}
      src={logo}
      className="mx-2 h-[50px] w-[50px]"
      width={50}
      height={50}
      alt="Crypto Logo"
    />
  ));

  useEffect(() => {
    if (tickerContentRef.current) {
      setWidth(tickerContentRef.current.scrollWidth);
      tickerContentRef.current.innerHTML = "";
      tickerItems.forEach((item) => {
        const element = document.createElement("img");
        element.src = item.props.src;
        element.className = item.props.className;
        element.width = item.props.width;
        element.height = item.props.height;
        element.alt = item.props.alt;
        tickerContentRef.current?.appendChild(element);
      });
    }
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    const scrollTicker = () => {
      if (tickerRef.current && tickerContentRef.current) {
        const currentScroll = tickerRef.current.scrollLeft;
        const maxScroll =
          tickerRef.current.scrollWidth - tickerRef.current.clientWidth;

        if (currentScroll >= maxScroll) {
          tickerRef.current.scrollLeft = 0;
        } else {
          tickerRef.current.scrollLeft = currentScroll + scrollSpeed;
        }
      }
      animationFrameId = requestAnimationFrame(scrollTicker);
    };

    animationFrameId = requestAnimationFrame(scrollTicker);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      className={`overflow-hidden whitespace-nowrap bg-primary py-3 ${className}`}
      ref={tickerRef}
    >
      <div ref={tickerContentRef} style={{ display: "flex" }}></div>
    </div>
  );
};

export default AnimatedTicker;
