"use client";

import React, { useState, useEffect, useRef } from "react";
import { NavbarItems } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const updateIndicatorPosition = () => {
      if (!navRef.current) return;

      const activeItem = navRef.current.querySelector(
        `[data-section="${activeSection}"]`
      );
      if (activeItem) {
        const { left, width } = activeItem.getBoundingClientRect();
        const { left: navLeft } = navRef.current.getBoundingClientRect();
        setIndicatorStyle({
          left: left - navLeft - 7 + "px",
          width: width + 14 + "px",
          transition: "all 0.3s ease",
        });
      }
    };
    window.addEventListener("scroll", updateIndicatorPosition);

    updateIndicatorPosition();
    window.addEventListener("resize", updateIndicatorPosition);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateIndicatorPosition);
    };
  }, [activeSection, isSticky]);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsSticky(scrollTop > 110);
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollTop >= sectionTop - 100 &&
        scrollTop < sectionTop + sectionHeight - 100
      ) {
        setActiveSection(section.id);
      }
    });
  };

  const navbarAnimation = {
    hidden: { y: -100, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return isSticky ? (
    <div className="w-full fixed top-5 left-0 z-[99] flex items-center justify-center">
      <motion.div
        className="mockup-window w-[50%] h-max glass-lg max-sm:w-[92%] max-sm:py-6"
        initial="hidden"
        animate="show"
        variants={navbarAnimation}
      >
        <div className="absolute inset-0 w-full h-max top-[0.7rem]">
          <nav
            ref={navRef}
            className="flex items-center justify-center gap-6 text-white relative"
          >
            <div
              className="absolute inset-0 -top-1 bg-primary-400 bg-opacity-50 z-[-1] rounded-full h-8 w-0 cursor-pointer"
              style={indicatorStyle}
            ></div>
            {NavbarItems.map((item, index) => {
              return (
                <Link
                  href={`#${item.section}`}
                  key={index}
                  data-section={item.section}
                  onClick={() => setActiveSection(item.section)}
                  className={`text-white transition-colors duration-300 ease-in-out text-base font-semibold tracking-normal cursor-pointer ${
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
          className="absolute right-3 top-0.5 max-sm:hidden"
        />
      </motion.div>
    </div>
  ) : (
    <div className="mockup-window w-full h-max relative glass max-sm:py-6 min-h-[48px]">
      <div className="absolute inset-0 w-full h-max top-[0.7rem]">
        <nav
          ref={navRef}
          className="flex items-center justify-center gap-6 text-white relative"
        >
          <div
            className="absolute inset-0 -top-1 bg-primary-400 bg-opacity-50 z-[-1] rounded-full h-8 w-0 cursor-pointer"
            style={indicatorStyle}
          ></div>
          {NavbarItems.map((item, index) => {
            return (
              <Link
                href={`#${item.section}`}
                key={index}
                data-section={item.section}
                className={`text-white transition-colors duration-300 ease-in-out text-base font-semibold tracking-normal cursor-pointer ${
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
        className="absolute right-3 top-0.5 max-sm:hidden"
      />
    </div>
  );
};

export default Navbar;
