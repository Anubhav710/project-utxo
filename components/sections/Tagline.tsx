"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const Tagline = () => {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });
    tl.to(".rounded-div-wrapper", {
      height: 0,
      marginTop: 0,
    });
    tl.fromTo(
      ".tag",
      { clipPath: "inset(0 100% 0 0)" },
      {
        clipPath: "inset(0 0% 0 0)",
      }
    );
    tl.fromTo(
      ".tag-2",
      { clipPath: "inset(0 100% 0 0)" },
      {
        clipPath: "inset(0 0% 0 0)",
      },
      "<+=0.05"
    );
  }, []);
  return (
    <section id="about" className=" relative h-clamp  ">
      <div className=" rounded-div-wrapper">
        <div className="rounded-div  "></div>
      </div>
      <div className="  bg-white  flex h-full relative  flex-col justify-center lg:px-14 md:px-10 px-4">
        {/* BOX-1  */}
        <div className={`relative  `}>
          <h1 className=" tag  font-semibold tagline-header ">
            Building brands, one click at a time. Your digital navigator
          </h1>
          <h1 className=" absolute   top-0 opacity-[0.3] font-semibold tagline-header ">
            Building brands, one click at a time. Your digital navigator
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Tagline;
