"use client";

import React, { useState, useEffect, useRef } from "react";
import { NavbarItems } from "@/constants";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateIndicatorPosition = () => {
      if (!navRef.current) return; // Checks if navRef.current is null and exits if true

      const activeItem = navRef.current.querySelector(
        `[data-section="${activeSection}"]`
      );
      if (activeItem) {
        const { left, width } = activeItem.getBoundingClientRect();
        const { left: navLeft } = navRef.current.getBoundingClientRect();
        setIndicatorStyle({
          left: left - navLeft - 7 + "px", // Added 'px' for CSS validity
          width: width + 14 + "px", // Added 'px' for CSS validity
          transition: "all 0.3s ease",
        });
      }
    };

    updateIndicatorPosition();
    // Update indicator position on window resize to ensure correct positioning
    window.addEventListener("resize", updateIndicatorPosition);

    return () => window.removeEventListener("resize", updateIndicatorPosition);
  }, [activeSection]);

  return (
    <div className="mockup-window bg-cream bg-opacity-40 w-full h-max relative">
      <div className="absolute inset-0 w-full h-max top-[0.7rem]">
        <nav
          ref={navRef}
          className="flex items-center justify-center gap-6 text-white relative"
        >
          <div
            className="absolute inset-0 -top-1 bg-white bg-opacity-30 rounded-full h-8 w-0 cursor-pointer"
            style={indicatorStyle}
          ></div>
          {NavbarItems.map((item, index) => {
            return (
              <Link
                href={`#${item.section}`}
                key={index}
                data-section={item.section}
                onClick={() => setActiveSection(item.section)}
                className={`text-white text-opacity-70 transition-colors duration-300 ease-in-out text-base font-semibold tracking-normal cursor-pointer ${
                  activeSection !== item.section && "hover-effect"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <Image
        src="/logo.png"
        alt="logo"
        width={60}
        height={30}
        className="absolute right-3 top-0.5"
      />
    </div>
  );
};

export default Navbar;
