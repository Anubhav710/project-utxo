"use client";
import { myFont } from "@/fonts";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { ServiceContainer } from "@/constants";
import Lottie from "lottie-react";
import Design from "@/public/images/design.json";
import Tech from "@/public/images/tech.json";
import Marketing from "@/public/images/markating.json";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 319px) and (max-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: "#mobile-ul-1",
        start: "top center",

        animation: gsap.from(".mli-1", {
          xPercent: -100,
          stagger: 0.05,
          opacity: 0,
        }),
        toggleActions: "play none none reverse",
      });
      ScrollTrigger.create({
        trigger: "#design-cnt-img",
        start: "top 60%",

        animation: gsap.from("#design-cnt-img", {
          xPercent: -100,
          stagger: 0.05,
          opacity: 0,
        }),
        toggleActions: "play none none reverse",
      });
      ScrollTrigger.create({
        trigger: "#mobile-ul-2",
        start: "top center",

        animation: gsap.from(".mli-2", {
          xPercent: -100,
          stagger: 0.05,
          opacity: 0,
        }),
        toggleActions: "play none none reverse",
      });
      ScrollTrigger.create({
        trigger: "#tech-cnt-img",
        start: "top 60%",

        animation: gsap.from("#tech-cnt-img", {
          xPercent: -100,
          stagger: 0.05,
          opacity: 0,
        }),
        toggleActions: "play none none reverse",
      });
      ScrollTrigger.create({
        trigger: "#mobile-ul-3",
        start: "top center",

        animation: gsap.from(".mli-3", {
          xPercent: -100,
          stagger: 0.05,
          opacity: 0,
        }),
        toggleActions: "play none none reverse",
      });
      ScrollTrigger.create({
        trigger: "#marketing-cnt-img",
        start: "top 60%",

        animation: gsap.from("#marketing-cnt-img", {
          xPercent: -100,
          stagger: 0.05,
          opacity: 0,
        }),
        toggleActions: "play none none reverse",
      });
    });

    mm.add("(min-width: 768px)", () => {
      const serviceTl = gsap.timeline();

      serviceTl.to("#service-cnt-left-1-1-1", {
        left: "20%",
        duration: 1,
        ease: "power2.inOut",
      });

      //   serviceTl.to("#design-ul",{
      //     height:"auto",
      //     duration:1,
      //     ease:"power2.inOut"
      //   })

      //   serviceTl.to(".design-list-item",{
      //     xPercent:102,
      //    opacity:1,
      //     stagger:0.2
      //   })

      //   serviceTl.to(".hide",{
      //     translateY:"200%",
      //     height:0,
      //     duration:1,
      //     opacity:0,
      //     ease:"power2.inOut"
      //   },"<")

      //  serviceTl.from(".image-1",{
      //   opacity:0,
      //   duration:1,
      //   ease:"power2.inOut"
      //  },0.2)

      const serviceTl2 = gsap.timeline();

      serviceTl2.to("#tech-ul", {
        height: "auto",
        duration: 1,
        ease: "power2.inOut",
      });

      serviceTl2.to(".tech-list-item", {
        xPercent: 100,

        stagger: 0.2,
      });

      serviceTl2.from(
        ".image-2",
        {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        0.2
      );

      serviceTl2.to(
        ".image-2",
        {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        0.2
      );
      serviceTl2.to(
        ".image-1",
        {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        0.2
      );

      const serviceTl3 = gsap.timeline();

      serviceTl3.to("#marketing-ul", {
        height: "auto",
        duration: 1,
        ease: "power2.inOut",
      });

      serviceTl3.to(".marketing-list-item", {
        xPercent: 100,

        stagger: 0.2,
      });

      serviceTl3.from(
        ".image-3",
        {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        0.2
      );

      serviceTl3.to(
        ".image-3",
        {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        0.2
      );
      serviceTl3.to(
        ".image-2",
        {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        0.2
      );

      ScrollTrigger.create({
        trigger: "#service-cnt-left-1",
        start: "top -10%",
        end: "bottom -10%",

        animation: serviceTl,
        toggleActions: "play none none reverse",
      });
      ScrollTrigger.create({
        trigger: "#tech-cnt",
        start: "top top",
        end: "bottom top",
        markers: true,
        animation: serviceTl2,
        toggleActions: "play none none reverse",
      });

      ScrollTrigger.create({
        trigger: "#marketing-cnt",
        start: "top top",
        end: "bottom top",

        animation: serviceTl3,
        toggleActions: "play none none reverse",
      });
      ScrollTrigger.create({
        trigger: "#services",
        start: "top top",
        end: "bottom bottom",

        pin: "#service-cnt-right",

        toggleActions: "play none none reverse",
      });
    });
  });

  return (
    <section id="services" className="w-full    md:max-w-[1200px] mx-auto flex">
      <div id="service-cnt-left" className="md:w-1/2  h-full ">
        {/* Left container content */}
        <div
          id="service-cnt-left-1"
          className="h-screen w-full relative z-40 hidden md:flex items-center justify-center "
        >
          <div id="service-cnt-left-1-1" className=" font-bold  sticky top-10 ">
            <div
              id="service-cnt-left-1-1-1"
              className="relative z-20  left-full -translate-x-[20%]  "
            >
              <div>
                <h1 className={`service-title mb-5 ${myFont.className}`}>
                  Design
                </h1>
                <ul id="design-ul" className=" text-xl h-0 space-y-3  ">
                  {ServiceContainer.design.map((item, index) => (
                    <li
                      key={index}
                      className="design-list-item font-medium opacity-0   relative -left-full text-gray-600"
                    >
                      <span className="font-semibold text-2xl text-black">
                        {item.title}:{" "}
                      </span>
                      {item.description}
                    </li>
                  ))}
                </ul>
              </div>
              <h1 className={`hide service-title ${myFont.className}`}>Tech</h1>
              <h1 className={`hide service-title  ${myFont.className}`}>
                Marketing
              </h1>
            </div>
          </div>
        </div>
        <div
          id="tech-cnt"
          className="h-screen w-full hidden   md:flex  pl-[5%]"
        >
          <div className="sticky top-10  h-max">
            <h1 className={`service-title font-bold mb-5 ${myFont.className}`}>
              Tech
            </h1>
            <ul
              id="tech-ul"
              className="pl-4 text-xl h-0  space-y-3 overflow-hidden"
            >
              {ServiceContainer.tech.map((item, index) => (
                <li
                  key={index}
                  className=" pl-3 font-semibold tech-list-item text-gray-600 relative -left-[103%]"
                >
                  <span className="font-semibold text-2xl text-black">
                    {item.title}:
                  </span>
                  {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          id="marketing-cnt"
          className="h-screen w-full  md:flex hidden  pl-[5%]"
        >
          <div className=" h-screen flex flex-col justify-center">
            <h1 className={`service-title font-bold mb-5  ${myFont.className}`}>
              Marketing
            </h1>
            <ul
              id="marketing-ul"
              className="pl-4 text-xl h-0 space-y-3 overflow-hidden"
            >
              {ServiceContainer.marketing.map((item, index) => (
                <li
                  key={index}
                  className="  font-semibold marketing-list-item relative text-gray-600 -left-[103%]"
                >
                  <span className="font-semibold text-2xl text-black">
                    {item.title}:
                  </span>{" "}
                  {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Right Container */}
      <div
        id="service-cnt-right"
        className="md:w-1/2 w-full md:h-screen flex  items-center"
      >
        {/* Desktop Start */}
        <div className="h-full w-full hidden md:block">
          <div className="h-full w-full relative flex justify-center items-center ">
            <div className="image-1 absolute  ">
              <Lottie
                animationData={Design}
                style={{ width: "620px", height: "620px", opacity: 0 }}
              />
            </div>
            <div className="image-2 absolute ">
              <Lottie
                animationData={Tech}
                style={{ width: "620px", height: "620px" }}
              />
            </div>
            <div className="image-3 absolute ">
              <Lottie
                animationData={Marketing}
                style={{ width: "620px", height: "620px" }}
              />
            </div>
          </div>
        </div>
        {/* Desktop End */}

        {/* Mobile Start */}
        <div className="flex flex-col  items-center w-full gap-10 md:hidden py-10 pl-2">
          {/* Design for mobile */}
          <div className="w-full">
            <h1
              className={`ser-text-clamp-s text-6xl mb-2 font-bold ${myFont.className} text-center`}
            >
              Design
            </h1>
            <ul id="mobile-ul-1" className="space-y-3 pt-2 pl-4 text-left">
              {ServiceContainer.design.map((l1) => (
                <li className="mli-1 text-gray-500" key={l1.title}>
                  <span className="font-semibold text-xl text-black">
                    {l1.title}:
                  </span>{" "}
                  {l1.description}
                </li>
              ))}
            </ul>
            <div
              id="design-cnt-img"
              className="w-full h-72 flex justify-center items-center"
            >
              <Lottie
                animationData={Design}
                style={{ width: "100%", height: "100%", opacity: 1 }}
              />
            </div>
          </div>

          {/* Tech for mobile */}
          <div className="w-full ">
            <h1
              className={`ser-text-clamp-s mb-2 text-6xl font-bold ${myFont.className} text-center`}
            >
              Tech
            </h1>
            <ul id="mobile-ul-2" className="space-y-3 pt-2 pl-4 text-left">
              {ServiceContainer.tech.map((l1) => (
                <li className="mli-2 text-gray-500" key={l1.title}>
                  <span className="font-semibold text-xl text-black">
                    {l1.title}:
                  </span>{" "}
                  {l1.description}
                </li>
              ))}
            </ul>
            <div
              id="tech-cnt-img"
              className="w-full h-72  flex justify-center items-center"
            >
              <Lottie
                animationData={Tech}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>

          {/* Marketing for mobile */}
          <div className="w-full">
            <h1
              className={`ser-text-clamp-s text-6xl mb-2 font-bold ${myFont.className} text-center`}
            >
              Marketing
            </h1>
            <ul id="mobile-ul-3" className="space-y-3 pt-2 pl-4 text-left">
              {ServiceContainer.marketing.map((l1) => (
                <li className="mli-3 text-gray-500" key={l1.title}>
                  <span className="font-semibold text-xl text-black">
                    {l1.title}:
                  </span>{" "}
                  {l1.description}
                </li>
              ))}
            </ul>
            <div
              id="marketing-cnt-img"
              className="w-full h-72 flex justify-center items-center"
            >
              <Lottie
                animationData={Marketing}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>

        {/* Mobile End */}
      </div>
    </section>
  );
};

export default Service;
