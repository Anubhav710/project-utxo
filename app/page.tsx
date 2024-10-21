import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";

import Projects from "@/components/sections/Projects";
import Tagline from "@/components/sections/Tagline";

import dynamic from "next/dynamic";

// ... other imports ...
const ServicesNoSSR = dynamic(() => import("@/components/sections/Service2"), {
  ssr: false,
});
const HowItWorkNoSSR = dynamic(
  () => import("@/components/sections/HowItWork"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="md:h-[120vh]  h-[220vh] w-full bg-transparent" />
      <Tagline />
      <Projects />
      <ServicesNoSSR />
      <HowItWorkNoSSR />
      <Contact />
      <Footer />
    </main>
  );
}
