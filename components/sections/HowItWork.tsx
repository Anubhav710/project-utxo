"use client";
import { useGSAP } from "@gsap/react";
import React from "react";
import gsap, { ScrollTrigger } from "gsap/all";
import { myFont } from "@/fonts";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const HowItWork = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#containerio",
        start: "top top",
        end: "+=2500 bottom",
        pin: true,
        scrub: 3,
      },
    });

    // Horizontal scroll effect
    tl.to("#cnt-2", {
      xPercent: -80,
      ease: "none",
    });
  }, []);

  return (
    <section
      id="containerio"
      className="min-h-screen w-full py-7 md:py-14 bg-black flex items-center text-white overflow-hidden"
    >
      <div className="w-full space-y-10 desktop-lg:pl-[20%] large-screen:pl-[25%] xxs-xs:space-y-0 lg:pl-[35%] md:pl-[20%] pl-[0]">
        <h1
          className={`md:text-8xl text-[3rem] tablet-md:text-[5rem]  text-center md:text-left font-bold ${myFont.className}`}
        >
          How We Work
        </h1>

        <div
          id="cnt-2"
          className="flex pl-[1.3rem] md:pl-[0] gap-10 w-[500%] md:w-[350%] lg:w-[200%] large-screen:w-[260%] desktop-lg:w-[300%] h-max py-7"
        >
          {/* Cards */}
          <HowWorksCard
            number="1"
            title="Discovery "
            para="We kick off with a detailed survey to grasp your needs and goals—like a detective gathering clues. This step is all about listening to you, understanding your brand, and defining the project scope. Your vision is our blueprint!"
          />
          <HowWorksCard
            number="2"
            title="Research "
            para="Next, we conduct thorough research to explore market trends, competitor strategies, and user preferences—like a treasure hunt for insights. This phase helps us gather valuable information that will shape our approach and ensure your project shines."
          />
          <HowWorksCard
            number="3"
            title="Design "
            para="With insights in hand, our creative team begins designing—like artists painting a masterpiece. We create wireframes and mockups that visualize the user experience and interface. This is where your ideas start to take shape, ensuring a seamless and engaging design."
          />
          <HowWorksCard
            number="4"
            title="Development "
            para="Once the design is approved, our developers get to work—like skilled builders constructing a house. They bring the designs to life, coding the front-end and back-end functionalities. This step transforms concepts into a fully functional product, ready for testing."
          />
          <HowWorksCard
            number="5"
            title="Deployment "
            para="Finally, we deploy your project to the live environment—like launching a rocket into space. After rigorous testing to ensure everything runs smoothly, we unveil your site or app. Your digital presence is now live, and we're here to support you every step of the way!"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
// Card Component
const HowWorksCard = ({
  title,
  para,
  number, // Adding number as a prop
}: {
  title: string;
  para: string;
  number: string;
}) => {
  return (
    <motion.div
      className="bg-gray-800 text-white py-12 leading-3 md:px-14 px-6  rounded-[3.5rem] w-[90vw] md:w-[35vw] lg:w-[30vw] tablet-md:w-[60vw] h-auto shadow-md laptop-md:w-[900vw] desktop-lg:w-[1000vw]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      {/* Container for the number and the title */}
      <div className="relative">
        {/* Number behind the text */}
        <h1 className="md:text-8xl text-[4rem]  font-extrabold absolute md:-top-10 -top-[0] left-0 text-gray-200/15 z-10">
          {number}
        </h1>

        {/* Title text */}
        <h2 className="text-[1.6rem] md:text-4xl font-semibold mb-4 relative z-20 ">
          {title}
        </h2>
      </div>

      {/* Description paragraph */}
      <p className="text-gray-300 text-[1.2rem] leading-7">{para}</p>
    </motion.div>
  );
};
