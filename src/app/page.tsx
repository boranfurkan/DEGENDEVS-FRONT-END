import ProjectsSlider from "@/components/sections/work/ProjectsSlider";
import About from "@/components/sections/about/About";
import IntroSection from "@/components/sections/intro-section/IntroSection";
import HowItWorks from "@/components/sections/work/HowItWorks";
import Work from "@/components/sections/work/Work";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section id="welcome">
        <IntroSection />
      </section>
      <div className="px-[7.5rem] py-12 flex flex-col gap-44 justify-center items-center w-full">
        <section id="about" className="max-w-[1272px]">
          <About />
        </section>
        <section id="work" className="max-w-[1272px] flex flex-col gap-44">
          <Work />
          <HowItWorks />
          <ProjectsSlider />
          <span className="opacity-0">s</span>
        </section>
      </div>
    </main>
  );
}
