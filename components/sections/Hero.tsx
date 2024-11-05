"use client";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { myFont } from "@/fonts";
import Image from "next/image";
import { container } from "@/constants";
import Cursor from "../cursor";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "center center",
        end: "+=4000",
        pin: true,
        pinSpacing: false,
        scrub: 2,
      },
    });

    tl.to(
      "#row-1",
      {
        yPercent: -30,
        duration: 2,
      },
      0
    );
    tl.to(
      "#row-2",
      {
        yPercent: -40,
        duration: 2,
      },
      0
    );
    tl.to(
      "#row-3",
      {
        yPercent: -45,
        duration: 2,
      },
      0
    );
    tl.to(
      "#row-4",
      {
        yPercent: -50,
        duration: 2,
      },
      0
    );
    tl.to(
      "#row-5",
      {
        yPercent: -55,
        duration: 2,
      },
      0
    );
    tl.to(
      "#rotate-div",
      {
        rotate: -12,
        scale: 0.7,
      },
      "<"
    );

    tl.fromTo(
      "#overlay-div-h1",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      "<0.1"
    );
    tl.to(
      "#overlay-div",
      {
        backgroundColor: "#1B1B1B",
        duration: 1,
      },
      "<0.1"
    );
    tl.to(
      "#scroll-div-process",
      {
        width: "100%",
      },
      0
    );
  }, []);
  return (
    <section id="hero" className=" relative ">
      <Cursor />

      {/* CONATINER  */}
      <div className=" bg-black  h-screen w-full flex flex-col items-center overflow-hidden relative  scale-[1]      ">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-black/40 to-black/20 z-20"></div>
        {/* ROTATE DIV  */}
        <div id="rotate-div" className="w-[200vw] h-[300vh]   flex gap-4">
          {/* ROWS 1 */}
          <div id="row-1" className="rows -translate-y-[37rem]">
            {container.slice(0, 10).map((img) => (
              <div key={img.id} id="image-connatiner" className="img-c">
                <Image
                  src={img.url}
                  alt="image"
                  height={1200}
                  width={1200}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          {/* ROWS 2 */}
          <div id="row-2" className="rows -translate-y-[40rem]">
            {container.slice(8, 20).map((img) => (
              <div key={img.id} id="image-connatiner" className="img-c">
                <Image
                  src={img.url}
                  alt="image"
                  height={1200}
                  width={1200}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          {/* ROWS 3 */}
          <div id="row-3" className="rows -translate-y-[43rem]">
            {container.slice(16, 26).map((img) => (
              <div key={img.id} id="image-connatiner" className="img-c">
                <Image
                  src={img.url}
                  alt="image"
                  height={1200}
                  width={1200}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          {/* ROWS 4 */}
          <div id="row-4" className="rows -translate-y-[46rem]">
            {container.slice(24, 36).map((img) => (
              <div key={img.id} id="image-connatiner" className="img-c">
                <Image
                  src={img.url}
                  alt="image"
                  height={1200}
                  width={1200}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          {/* ROWS 5 */}
          <div id="row-5" className="rows -translate-y-[49rem]">
            {container.slice(32, 40).map((img) => (
              <div key={img.id} id="image-connatiner" className="img-c">
                <Image
                  src={img.url}
                  alt="image"
                  height={1200}
                  width={1200}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        {/* OVERLAY-DIV  */}
        <div
          id="overlay-div"
          className="h-screen   flex items-center justify-center w-full absolute z-20 bg-transparent text-white"
        >
          <h1
            id="overlay-div-h1"
            className={`text-clamp  cursor-default   font-semibold opacity-0 ${myFont.className} `}
          >
            UTXO Tech
          </h1>
          {/* Scroll-down  */}
          <div className="absolute bottom-10">
            <p className="uppercase text-white text-2xl font-semibold xxs-xs:text-lg">
              Scroll Down
            </p>
            <div className="w-full h-[2px] bg-gray-600 mt-">
              <div
                id="scroll-div-process"
                className="h-full w-0 bg-white"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
