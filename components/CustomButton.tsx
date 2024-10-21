"use client";
import { motion } from "framer-motion";
import React from "react";
import { twMerge as tw } from "tailwind-merge";

const CustomButton = ({
  children,
  className,
  onClick,
  disable,
}: {
  children: React.ReactNode;
  className?: any;
  onClick: any;
  disable?: any;
}) => {
  return (
    <motion.button
      whileHover={"whileHover"}
      className={tw(
        "bg-black text-lg   text-white w-max md:px-6 px-4  md:h-[2.4rem] h-[2.2rem] overflow-hidden   rounded-full cursor-pointer ",
        className
      )}
      onClick={onClick}
      disabled={disable}
    >
      {/* SLIDER Container */}
      <motion.div
        variants={{
          whileHover: {
            y: `${disable ? "0" : "-100%"}`,
          },
        }}
        transition={{
          duration: 0.5,
          ease: "backOut",
        }}
        className=" h-full   w-full   "
      >
        <div className="  h-full flex items-center justify-center">
          {children}
        </div>

        <div className="h-full  flex items-center justify-center">
          {children}
        </div>
      </motion.div>
    </motion.button>
  );
};

export default CustomButton;
