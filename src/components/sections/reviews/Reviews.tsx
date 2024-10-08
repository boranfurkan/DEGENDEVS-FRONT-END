'use client';
import React, { useEffect, useRef } from 'react';
import { Reviews as ReviewsData } from '@/constants';
import Slider from 'infinite-react-carousel';
import ReviewCard from './ReviewCard';

const Reviews = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    slidesPerRow: 1,
    slidesToShow: 1,
    dots: true,
    className: '!w-full',
  };

  return (
    <div className="flex flex-col gap-10 w-full ">
      <h3 className="text-[64px] font-bold leading-[79px] tracking-normal text-center">
        What clients say about us
      </h3>

      <Slider {...settings} className="max-sm:hidden">
        <div className="!flex items-center justify-center gap-10 w-full">
          <ReviewCard {...ReviewsData[3]} borderType={'middle'} />
          <ReviewCard {...ReviewsData[0]} borderType={'middle'} />
        </div>
        <div className="!flex items-center justify-center gap-10 w-full">
          <ReviewCard {...ReviewsData[2]} borderType={'middle'} />
          <ReviewCard {...ReviewsData[1]} borderType={'middle'} />
        </div>
        <div className="!flex items-center justify-center gap-10 w-full">
          <ReviewCard {...ReviewsData[4]} borderType={'middle'} />
          <ReviewCard {...ReviewsData[5]} borderType={'middle'} />
        </div>
        <div className="!flex items-center justify-center gap-10 w-full">
          <ReviewCard {...ReviewsData[6]} borderType={'middle'} />
          <ReviewCard {...ReviewsData[7]} borderType={'middle'} />
        </div>
      </Slider>

      <Slider {...settings} className="sm:hidden">
        <ReviewCard {...ReviewsData[3]} borderType={'middle'} />
        <ReviewCard {...ReviewsData[0]} borderType={'middle'} />
        <ReviewCard {...ReviewsData[2]} borderType={'middle'} />
        <ReviewCard {...ReviewsData[4]} borderType={'middle'} />
        <ReviewCard {...ReviewsData[5]} borderType={'middle'} />
        <ReviewCard {...ReviewsData[6]} borderType={'middle'} />
        <ReviewCard {...ReviewsData[7]} borderType={'middle'} />
      </Slider>
    </div>
  );
};

export default Reviews;
