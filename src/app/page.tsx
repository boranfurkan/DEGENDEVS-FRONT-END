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
      <div className="px-[7.5rem] py-12 flex flex-col gap-44">
        <section id="about" className="mx-auto">
          <About />
        </section>
        <section
          id="work"
          className="mx-auto min-w-[1272px] flex flex-col gap-44"
        >
          <Work />
          <HowItWorks />
        </section>
      </div>
    </main>
  );
}
