import ProjectsSlider from "@/components/sections/work/ProjectsSlider";
import About from "@/components/sections/about/About";
import IntroSection from "@/components/sections/intro-section/IntroSection";
import HowItWorks from "@/components/sections/work/HowItWorks";
import Work from "@/components/sections/work/Work";
import Reviews from "@/components/sections/reviews/Reviews";
import Footer from "@/components/Footer";
import WhatWeWorkOn from "@/components/sections/work/WhatWeWorkOn";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section id="welcome">
        <IntroSection />
      </section>
      <div className="px-[7.5rem] py-12 flex flex-col gap-44 justify-center items-center w-full max-sm:px-5 max-sm:gap-28 max-xl:px-10 max-xl:gap-36">
        <section id="about" className="max-w-[1272px] max-xl:w-full ">
          <About />
        </section>
        <section
          id="work"
          className="max-w-[1272px] flex flex-col gap-44 max-xl:w-full max-sm:gap-28 max-xl:gap-36"
        >
          <Work />
          <WhatWeWorkOn />
          <HowItWorks />
          <ProjectsSlider />
        </section>
        <section id="reviews" className="w-[1272px] max-xl:w-full">
          <Reviews />
        </section>
      </div>
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}
