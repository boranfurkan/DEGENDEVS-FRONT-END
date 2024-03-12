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
        className="flex flex-col gap-10 items-center"
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
          className="mySwiper"
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
        >
          <SwiperSlide>
            <div className="image-container">
              <Image
                src="/assets/sample.png"
                alt="Project Description"
                layout="fill"
                objectFit="cover"
              />
              <div className="overlay">
                <h3 className="text-2xl font-extrabold leading-9 tracking-normal text-left text-primary-200">
                  Title of the project
                </h3>
                <p className="overlay-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  nisi ea magni porro commodi praesentium ipsa distinctio sit
                  pariatur veritatis, corrupti ipsam magnam nemo voluptas
                  numquam quos enim? Excepturi, doloremque.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
              <Image
                src="/assets/sample2.png"
                alt="Project Description"
                layout="fill"
                objectFit="cover"
              />
              <div className="overlay">
                <h3 className="text-2xl font-extrabold leading-9 tracking-normal text-left text-primary-200">
                  Title of the project
                </h3>
                <p className="overlay-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  nisi ea magni porro commodi praesentium ipsa distinctio sit
                  pariatur veritatis, corrupti ipsam magnam nemo voluptas
                  numquam quos enim? Excepturi, doloremque.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
              <Image
                src="/assets/sample.png"
                alt="Project Description"
                layout="fill"
                objectFit="cover"
              />
              <div className="overlay">
                <h3 className="text-2xl font-extrabold leading-9 tracking-normal text-left text-primary-200">
                  Title of the project
                </h3>
                <p className="overlay-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  nisi ea magni porro commodi praesentium ipsa distinctio sit
                  pariatur veritatis, corrupti ipsam magnam nemo voluptas
                  numquam quos enim? Excepturi, doloremque.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
              <Image
                src="/assets/sample2.png"
                alt="Project Description"
                layout="fill"
                objectFit="cover"
              />
              <div className="overlay">
                <h3 className="text-2xl font-extrabold leading-9 tracking-normal text-left text-primary-200">
                  Title of the project
                </h3>
                <p className="overlay-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  nisi ea magni porro commodi praesentium ipsa distinctio sit
                  pariatur veritatis, corrupti ipsam magnam nemo voluptas
                  numquam quos enim? Excepturi, doloremque.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
              <Image
                src="/assets/sample.png"
                alt="Project Description"
                layout="fill"
                objectFit="cover"
              />
              <div className="overlay">
                <h3 className="text-2xl font-extrabold leading-9 tracking-normal text-left text-primary-200">
                  Title of the project
                </h3>
                <p className="overlay-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  nisi ea magni porro commodi praesentium ipsa distinctio sit
                  pariatur veritatis, corrupti ipsam magnam nemo voluptas
                  numquam quos enim? Excepturi, doloremque.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
              <Image
                src="/assets/sample2.png"
                alt="Project Description"
                layout="fill"
                objectFit="cover"
              />
              <div className="overlay">
                <h3 className="text-2xl font-extrabold leading-9 tracking-normal text-left text-primary-200">
                  Title of the project
                </h3>
                <p className="overlay-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  nisi ea magni porro commodi praesentium ipsa distinctio sit
                  pariatur veritatis, corrupti ipsam magnam nemo voluptas
                  numquam quos enim? Excepturi, doloremque.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
              <Image
                src="/assets/sample.png"
                alt="Project Description"
                layout="fill"
                objectFit="cover"
              />
              <div className="overlay">
                <h3 className="text-2xl font-extrabold leading-9 tracking-normal text-left text-primary-200">
                  Title of the project
                </h3>
                <p className="overlay-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  nisi ea magni porro commodi praesentium ipsa distinctio sit
                  pariatur veritatis, corrupti ipsam magnam nemo voluptas
                  numquam quos enim? Excepturi, doloremque.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
              <Image
                src="/assets/sample2.png"
                alt="Project Description"
                layout="fill"
                objectFit="cover"
              />
              <div className="overlay">
                <h3 className="text-2xl font-extrabold leading-9 tracking-normal text-left text-primary-200">
                  Title of the project
                </h3>
                <p className="overlay-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  nisi ea magni porro commodi praesentium ipsa distinctio sit
                  pariatur veritatis, corrupti ipsam magnam nemo voluptas
                  numquam quos enim? Excepturi, doloremque.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
              <Image
                src="/assets/sample.png"
                alt="Project Description"
                layout="fill"
                objectFit="cover"
              />
              <div className="overlay">
                <h3 className="text-2xl font-extrabold leading-9 tracking-normal text-left text-primary-200">
                  Title of the project
                </h3>
                <p className="overlay-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  nisi ea magni porro commodi praesentium ipsa distinctio sit
                  pariatur veritatis, corrupti ipsam magnam nemo voluptas
                  numquam quos enim? Excepturi, doloremque.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  );
}
