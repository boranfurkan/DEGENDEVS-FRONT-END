'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';
import { Dialog } from '@headlessui/react';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    src: '/assets/projects/waka-flocka.png',
    title: 'Waka Flocka',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    src: '/assets/projects/btc-keys.png',
    title: 'BTC Keys',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    src: '/assets/videos/swag-logo.mp4',
    title: 'THE SWAG CITY',
    description:
      'Our Art team designed the Swag City map along with the Swag City website and animations.',
    isVideo: true,
  },
  {
    src: '/assets/videos/pl-map.mp4',
    title: 'PIONEER LEGENDS',
    description:
      'Everything you see on Pioneer Legends we were involved in, from the art, front end development, back end development, smart contracts, audits.',
    isVideo: true,
  },
  {
    src: '/assets/projects/ctrl-homepage.png',
    title: 'CTRL',
    description:
      'We were involved in the Ui and Front End development of the CTRL Terminal for their website and Telegram bot.',
  },
  {
    src: '/assets/projects/injstaking.png',
    title: 'INJSTAKING',
    description:
      'Multi staking platform on the Injective Blockchain, full package from Ui to development by us.',
  },
  {
    src: '/assets/projects/aion2.png',
    title: 'AION',
    description:
      'Our design team designed this new unique web3 poker platform.',
  },
  {
    src: '/assets/projects/restate.png',
    title: 'Restate',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    src: '/assets/projects/visionarystu.png',
    title: 'Vision Artystu',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

export default function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [visibleProjects, setVisibleProjects] = useState(5); // Default number of visible projects for mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if screen size is mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint from Tailwind (640px)
    };

    handleResize(); // Set the initial state based on the current screen size
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openModal = (index: number) => {
    setSelectedProject(index);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleSeeMore = () => {
    setVisibleProjects((prev) => prev + 5); // Load 5 more items
  };

  // Intersection Observer to trigger animations
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Container animation for staggering the child animations
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each child's animation
      },
    },
  };

  // Child card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h3 className="text-[64px] font-bold leading-[79px] tracking-normal text-center mb-12">
        Our Projects
      </h3>

      <motion.div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Render all projects on desktop, but limit to visibleProjects count on mobile */}
        {projects
          .slice(0, isMobile ? visibleProjects : projects.length)
          .map((project, index) => (
            <Parallax key={index} speed={5}>
              <motion.div
                className="relative group overflow-hidden rounded-xl shadow-xl hover:shadow-2xl h-[300px] md:h-[400px] lg:h-[500px] cursor-pointer"
                onClick={() => openModal(index)}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }} // Card lift effect on hover
              >
                {project.isVideo ? (
                  <motion.video
                    key={project.src}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                  >
                    <source src={project.src} type="video/mp4" />
                  </motion.video>
                ) : (
                  <Image
                    src={project.src}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <motion.div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end items-center opacity-100 transition-opacity duration-500 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white text-center">
                    {project.description}
                  </p>
                </motion.div>
              </motion.div>
            </Parallax>
          ))}
      </motion.div>

      {/* See More Button - Only show on mobile */}
      {isMobile && visibleProjects < projects.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSeeMore}
            className="px-6 py-2 bg-primary-300 text-white rounded-md shadow transition-all"
          >
            See More
          </button>
        </div>
      )}

      <AnimatePresence>
        {selectedProject !== null && (
          <Dialog
            open={selectedProject !== null}
            onClose={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center mx-3 outline-transparent focus:outline-none focus-within:outline-none "
          >
            <div
              className="fixed inset-0 bg-black opacity-50"
              aria-hidden="true"
            ></div>

            <motion.div
              className="relative bg-primary-200 rounded-lg shadow-lg mx-auto p-4 z-50 w-full max-w-3xl lg:max-w-4xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Dialog.Panel className="z-50 relative">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-primary-200 rounded-full bg-primary-500 z-50 text-4xl"
                >
                  ✖
                </button>

                <div className="w-full h-[400px] lg:h-[600px] relative">
                  {projects[selectedProject].isVideo ? (
                    <video
                      key={projects[selectedProject].src}
                      controls={false}
                      autoPlay
                      className="w-full h-full object-cover"
                      loop
                      playsInline
                      muted
                    >
                      <source
                        src={projects[selectedProject].src}
                        type="video/mp4"
                      />
                    </video>
                  ) : (
                    <Image
                      src={projects[selectedProject].src}
                      alt={projects[selectedProject].title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  )}
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-white uppercase">
                    {projects[selectedProject].title}
                  </h3>
                  <p className="text-white">
                    {projects[selectedProject].description}
                  </p>
                </div>
              </Dialog.Panel>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
