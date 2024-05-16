"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

import { Navigation, EffectCards, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

export default function ProjectsSlider() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <div className="flex flex-col gap-10 items-center">
      <h3 className="text-[64px] font-bold leading-[79px] tracking-normal text-center">
        Our Projects
      </h3>
      <motion.div
        className="flex flex-col gap-10 items-center max-sm:-mt-[8rem]"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 2 }}
      >
        <Swiper
          effect={"cards"}
          grabCursor={true}
          navigation={true}
          modules={[Navigation, Autoplay, EffectCards]}
          className="mySwiper max-sm:scale-[0.36]"
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
        >
          <SwiperSlide className="shadow-[0px_5px_50px_0px_#00000080]">
            <div className="h-full w-full">
              <video
                preload="none"
                autoPlay
                loop
                muted={true}
                playsInline
                className="object-cover w-full h-full"
                controls={false}
              >
                <source src="/assets/videos/swag-city.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="overlay">
                <h3 className="text-2xl font-extrabold leading-9 tracking-normal text-left text-primary-200 uppercase">
                  THE SWAG CITY
                </h3>
                <p className="overlay-text">
                  Our Art team designed the Swag City map along with the Swag
                  City website and animations.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-[0px_5px_50px_0px_#00000080]">
            <div className="h-full w-full">
              <video
                preload="none"
                autoPlay
                loop
                muted={true}
                playsInline
                className="object-cover w-full h-full"
                controls={false}
              >
                <source src="/assets/videos/swag-logo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="overlay">
                <h3 className="text-2xl font-extrabold leading-9 tracking-normal text-left text-primary-200 uppercase">
                  THE SWAG CITY
                </h3>
                <p className="overlay-text">
                  Our Art team designed the Swag City map along with the Swag
                  City website and animations.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-[0px_5px_50px_0px_#00000080]">
            <div className="h-full w-full">
              <video
                preload="none"
                autoPlay
                loop
                muted={true}
                playsInline
                className="object-cover w-full h-full"
                controls={false}
              >
                <source src="/assets/videos/pl-map.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="overlay">
                <h3 className="text-2xl font-extrabold leading-9 tracking-normal text-left text-primary-200 uppercase">
                  pioneer legends
                </h3>
                <p className="overlay-text">
                  Everything you see on Pioneer Legends we were involved in,
                  from the art, front end development, back end development,
                  smart contracts, audits
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-[0px_5px_50px_0px_#00000080]">
            <div className="h-full w-full">
              <video
                preload="none"
                autoPlay
                loop
                muted={true}
                playsInline
                className="object-cover w-full h-full"
                controls={false}
              >
                <source src="/assets/videos/pl.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="overlay">
                <h3 className="text-2xl font-extrabold leading-9 tracking-normal text-left text-primary-200 uppercase">
                  pioneer legends
                </h3>
                <p className="overlay-text">
                  Everything you see on Pioneer Legends we were involved in,
                  from the art, front end development, back end development,
                  smart contracts, audits
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-[0px_5px_50px_0px_#00000080]">
            <div className="image-container">
              <Image
                src="/assets/projects/ctrl-homepage.png"
                alt="Project Description"
                layout="fill"
                objectFit="cover"
              />
              <div className="overlay">
                <h3 className="text-2xl font-extrabold leading-9 tracking-normal text-left text-primary-200 uppercase">
                  CTRL
                </h3>
                <p className="overlay-text">
                  We were involved in the Ui and Front End development of the
                  CTRL Terminal for their website and Telegram bot.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-[0px_5px_50px_0px_#00000080]">
            <div className="image-container">
              <Image
                src="/assets/projects/ctrl-mobile.png"
                alt="Project Description"
                layout="fill"
                objectFit="cover"
              />
              <div className="overlay">
                <h3 className="text-2xl font-extrabold leading-9 tracking-normal text-left text-primary-200 uppercase">
                  CTRL
                </h3>
                <p className="overlay-text">
                  We were involved in the Ui and Front End development of the
                  CTRL Terminal for their website and Telegram bot.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-[0px_5px_50px_0px_#00000080]">
            <div className="image-container">
              <Image
                src="/assets/projects/injstaking.png"
                alt="Project Description"
                layout="fill"
                objectFit="cover"
              />
              <div className="overlay">
                <h3 className="text-2xl font-extrabold leading-9 tracking-normal text-left text-primary-200 uppercase">
                  INJSTAKING
                </h3>
                <p className="overlay-text">
                  Multi staking platform on the Injective Blockchain, full
                  package from Ui to development by us.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="shadow-[0px_5px_50px_0px_#00000080]">
            <div className="image-container">
              <Image
                src="/assets/projects/injstaking-2.png"
                alt="Project Description"
                layout="fill"
                objectFit="cover"
              />
              <div className="overlay">
                <h3 className="text-2xl font-extrabold leading-9 tracking-normal text-left text-primary-200 uppercase">
                  INJSTAKING
                </h3>
                <p className="overlay-text">
                  Multi staking platform on the Injective Blockchain, full
                  package from Ui to development by us.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="shadow-[0px_5px_50px_0px_#00000080]">
            <div className="image-container">
              <Image
                src="/assets/projects/injstaking-3.png"
                alt="Project Description"
                layout="fill"
                objectFit="cover"
              />
              <div className="overlay">
                <h3 className="text-2xl font-extrabold leading-9 tracking-normal text-left text-primary-200 uppercase">
                  INJSTAKING
                </h3>
                <p className="overlay-text">
                  Multi staking platform on the Injective Blockchain, full
                  package from Ui to development by us.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  );
}
