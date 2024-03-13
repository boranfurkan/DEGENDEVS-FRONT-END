import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="pt-20">
      <footer className="bg-[#992C11] text-white text-center w-full py-10 px-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-4">
            <Image src="/logo.png" alt="logo" width={150} height={150} />
            <p className="text-xs font-normal leading-[18px] tracking-normal text-left max-w-72">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis ipsam incidunt minus eum architecto et dolor facere
              animi voluptatum tempore rem voluptas pariatur blanditiis facilis
              voluptatibus ipsa consequatur, ducimus praesentium.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-start gap-4 w-max">
              <Link href="degendevs">
                <Image
                  src="/icons/socials/facebook.svg"
                  alt="facebook"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="degendevs">
                <Image
                  src="/icons/socials/x.svg"
                  alt="twitter"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="degendevs">
                <Image
                  src="/icons/socials/telegram.svg"
                  alt="telegram"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="degendevs">
                <Image
                  src="/icons/socials/linkedin.svg"
                  alt="linkedin"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="degendevs">
                <Image
                  src="/icons/socials/discord.svg"
                  alt="discord"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
            <p className="text-sm font-semibold leading-[21px] tracking-normal text-right text-white">
              2024 © All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
