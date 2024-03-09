import About from "@/components/sections/about/About";
import IntroSection from "@/components/sections/intro-section/IntroSection";
import Work from "@/components/sections/work/Work";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section id="welcome">
        <IntroSection />
      </section>
      <div className="px-[7.5rem] py-12 flex flex-col gap-52">
        <section id="about" className="mx-auto">
          <About />
        </section>
        <section id="work" className="mx-auto">
          <Work />
        </section>
      </div>
    </main>
  );
}
