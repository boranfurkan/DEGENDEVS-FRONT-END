import About from "@/components/sections/about/About";
import IntroSection from "@/components/sections/intro-section/IntroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section id="welcome">
        <IntroSection />
      </section>
      <div className="px-20 py-12">
        <section id="about" className="flex items-center justify-center">
          <About />
        </section>
        <section id="work"></section>
      </div>
    </main>
  );
}
