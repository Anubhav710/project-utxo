"use client";
import { myFont } from "@/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",

        start: "50% 50%",
        end: "+=2200",
        pin: true,

        scrub: 1,
      },
    });
    tl.to(
      "#text-cont",
      {
        height: "60vh",
      },
      0
    );
    tl.to(
      "#our-work-div",
      {
        height: "60vh",
      },
      0
    );
    tl.to(
      "#our",
      {
        left: 0,
      },
      0
    );
    tl.to(
      "#work",
      {
        right: 0,
      },
      0
    );
    tl.to("#scroll-img", {
      yPercent: -500,
      duration: 8,
    });
  }, []);
  return (
    <section
      id="projects"
      className=" flex relative items-center justify-center w-full h-screen bg-black"
    >
      <div
        id="text-cont"
        className={` absolute   z-[9]  md:w-[58%] w-[70%] h-[0] ${myFont.className} `}
      >
        <h1
          id="our"
          className="lg:text-8xl tablet-md:!left-[34%] desktop-lg:!left-[31%] large-screen:!left-[30%] laptop-md:left-[234px] md:text-6xl xxs-xs:!left-[32%] text-4xl text-white font-semibold absolute top-0 lg:left-[36%] left-[25%] md:left-[35%]    -translate-y-1/2  -translate-x-1/2 "
        >
          Our
        </h1>
        <h1
          id="work"
          className="lg:text-8xl tablet-md:!right-[34%] laptop-md:right-[203px] desktop-lg:!right-[31%] large-screen:!right-[40%] md:text-6xl text-4xl text-white xxs-xs:!right-[32%]  font-semibold absolute  bottom-0 lg:right-[44%] right-[25%] md:right-[20%]  translate-x-1/2 translate-y-1/2"
        >
          Work
        </h1>
      </div>
      <div
        id="our-work-div"
        className="flex items-center justify-center overflow-hidden  h-[0]  md:w-[58%] w-[90%] bg-teal-100"
      >
        <div className="scroll-work w-full h-[60vh] overflow-hidden ">
          <div id="scroll-img" className=" h-full  w-full ">
            <Image
              src="/images/p-2.jpg"
              width={1204}
              height={800}
              alt="one"
              className="w-full h-full object-cover  "
            />
            <Image
              src="/images/p-1.jpg"
              width={1204}
              height={800}
              alt="two"
              className="w-full h-full object-cover  "
            />
            <Image
              src="/images/p-3.jpg"
              width={1204}
              height={800}
              alt="three"
              className="w-full h-full object-cover  "
            />
            <Image
              src="/images/p-4.jpg"
              width={1204}
              height={800}
              alt="four"
              className="w-full h-full object-cover  "
            />
            <Image
              src="/images/p-5.jpg"
              width={1204}
              height={800}
              alt="four"
              className="w-full h-full object-cover  "
            />
            <Image
              src="/images/p-6.jpg"
              width={1204}
              height={800}
              alt="five"
              className="w-full h-full object-cover  "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
