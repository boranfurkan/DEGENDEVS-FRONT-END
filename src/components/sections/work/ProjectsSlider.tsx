"use client";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    src: "/assets/projects/waka-flocka.png",
    title: "Waka Flocka",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    src: "/assets/projects/btc-keys.png",
    title: "BTC Keys",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    src: "/assets/videos/swag-city.mp4",
    title: "THE SWAG CITY",
    description:
      "Our Art team designed the Swag City map along with the Swag City website and animations.",
    isVideo: true,
  },
  {
    src: "/assets/videos/swag-logo.mp4",
    title: "THE SWAG CITY",
    description:
      "Our Art team designed the Swag City map along with the Swag City website and animations.",
    isVideo: true,
  },
  {
    src: "/assets/videos/pl-map.mp4",
    title: "PIONEER LEGENDS",
    description:
      "Everything you see on Pioneer Legends we were involved in, from the art, front end development, back end development, smart contracts, audits.",
    isVideo: true,
  },
  {
    src: "/assets/videos/pl.mp4",
    title: "PIONEER LEGENDS",
    description:
      "Everything you see on Pioneer Legends we were involved in, from the art, front end development, back end development, smart contracts, audits.",
    isVideo: true,
  },
  {
    src: "/assets/projects/ctrl-homepage.png",
    title: "CTRL",
    description:
      "We were involved in the Ui and Front End development of the CTRL Terminal for their website and Telegram bot.",
  },
  {
    src: "/assets/projects/ctrl-mobile.png",
    title: "CTRL",
    description:
      "We were involved in the Ui and Front End development of the CTRL Terminal for their website and Telegram bot.",
  },
  {
    src: "/assets/projects/injstaking.png",
    title: "INJSTAKING",
    description:
      "Multi staking platform on the Injective Blockchain, full package from Ui to development by us.",
  },
  {
    src: "/assets/projects/injstaking-2.png",
    title: "INJSTAKING",
    description:
      "Multi staking platform on the Injective Blockchain, full package from Ui to development by us.",
  },
  {
    src: "/assets/projects/injstaking-3.png",
    title: "INJSTAKING",
    description:
      "Multi staking platform on the Injective Blockchain, full package from Ui to development by us.",
  },
  {
    src: "/assets/projects/aion2.png",
    title: "AION",
    description:
      "Our design team designed this new unique web3 poker platform.",
  },
  {
    src: "/assets/projects/restate.png",
    title: "Restate",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    src: "/assets/projects/visionarystu.png",
    title: "Vision Artystu",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const ParallaxProjectsSlider: React.FC = () => {
  const component = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const pixelsPause = 300;
      const panels = gsap.utils.toArray<HTMLDivElement>(".custom-panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current!,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          start: `top+=${pixelsPause} top`,
          end: () => "+=" + window.innerWidth * panels.length,
        },
      });
      ScrollTrigger.create({
        trigger: slider.current!,
        end: () => "+=" + (window.innerWidth * panels.length + pixelsPause),
        pin: true,
      });
    }, component);
    return () => ctx.revert();
  }, []);

  const renderProject = (project: any, className: string) => (
    <div className={className} key={project.src}>
      {project.isVideo ? (
        <video
          preload="none"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full border-4 border-primary-300"
          controls={false}
        >
          <source src={project.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="custom-image-container">
          <Image
            src={project.src}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="border-4 border-primary-300"
          />
        </div>
      )}
      <div className="custom-overlay max-sm:h-[40vh]">
        <h3 className="custom-overlay-title">{project.title}</h3>
        <p className="custom-overlay-text">{project.description}</p>
      </div>
    </div>
  );

  const firstProjects = projects.slice(0, 2);
  const lastProjects = projects.slice(-2);
  const middleProjects = projects.slice(2, -2);

  return (
    <div className="flex flex-col gap-10 w-full">
      <h3 className="text-[64px] font-bold leading-[79px] tracking-normal text-center">
        Our Projects
      </h3>
      <div className="custom-app" ref={component}>
        <div className="custom-first-container">
          {firstProjects.map((project) =>
            renderProject(project, "custom-panel-first")
          )}
        </div>
        <div ref={slider} className="custom-container">
          {middleProjects.map((project) =>
            renderProject(project, "custom-panel")
          )}
        </div>
        <div className="custom-last-container">
          {lastProjects.map((project) =>
            renderProject(project, "custom-panel-last")
          )}
        </div>
      </div>
    </div>
  );
};

export default ParallaxProjectsSlider;
