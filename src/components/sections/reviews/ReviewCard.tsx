import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ReviewCardProps {
  name: string;
  role: string;
  review: string;
  img: string;
  link: string;
  borderType: "left" | "right" | "middle";
}

const ReviewCard = ({
  name,
  role,
  review,
  img,
  link,
  borderType,
}: ReviewCardProps) => {
  let border = "border-[3px] border-solid border-[#992C11] rounded-[60px]";
  if (borderType === "left") {
    border += " rounded-br-none";
  } else if (borderType === "right") {
    border += " rounded-bl-none";
  }

  return (
    <Link
      href={link}
      className={`py-5 px-10 bg-cream flex-col gap-4 h-[261px] w-[410px] flex ${border} max-sm:w-full max-sm:h-[500px]`}
      target="_blank"
    >
      <div className="flex flex-row items-center justify-start gap-1.5">
        <Image
          src={img}
          alt="review-image"
          width={52}
          height={52}
          className="rounded-[10px]"
        />
        <div className="flex flex-col justify-between">
          <h3 className="text-xl font-bold leading-6 tracking-normal text-left capitalize text-brown">
            {name}
          </h3>
          <span className="text-base font-medium leading-5 tracking-normal text-left text-primary-200">
            {role}
          </span>
        </div>
      </div>
      <p className="text-sm font-medium leading-[21px] tracking-normal text-left text-brown overflow-y-scroll no-scrollbar">
        &quot;{review}&quot;
      </p>
    </Link>
  );
};

export default ReviewCard;
