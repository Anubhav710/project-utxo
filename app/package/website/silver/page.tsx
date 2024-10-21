"use client";

import { website } from "@/constants/packagesData";
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCheck, FaCircleCheck, FaCross } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

interface PackageType {
  subTitle: string;
  details: string[];
}

interface PackageSection {
  title: string;
  type: PackageType[];
}

interface WebsiteGoldPackage {
  purpose: PackageSection;
  pages: PackageSection;
  // Add other sections like `design`, `features`, etc.
}

const PricingPage: React.FC = () => {
  return (
    <div className="bg-black   text-white p-4 cp sm:p-8 min-h-screen relative max-w-screen-xl mx-auto w-full ">
      
      <header className="common-margin  common-height sticky  top-0 z-50 bg-black">
      <h1 className=" website-package-header ">
       Website Silver Package
      </h1>
        {/* Top Header */}
        <div className="grid  common-size grid-cols-4 gap-4 py-4  text-neutral-500 uppercase ">
          <div className="text-left font-bold">Features</div>
          <div className="text-center font-bold">Basic</div>
          <div className="text-center font-bold">Premium</div>
          <div className="text-center font-bold">Advance</div>
        </div>
        {/* Pricing Header */}
        <div className="grid grid-cols-4 gap-4 py-4 xxs-xs:pb-1  tm">
          <div></div>
          <div className="text-center">₹15,000 / Month</div>
          <div className="text-center">₹25,000 / Month</div>
          <div className="text-center">₹35,000 / Month</div>
        </div>
      </header>

      {/* Body */}
      <div className="relative">
        {website.websiteSilverPackage.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {/* Dynamic Section Title */}
            {Object.keys(section).map((sectionKey, index) => {
              // Type casting to access the section properly
              const currentSection = section[
                sectionKey as keyof WebsiteGoldPackage
              ] as PackageSection;
              return (
                <div
                  key={index}
                  id={`${sectionKey} wrapper`}
                  className="border-t border-t-neutral-600"
                >
                  {/* Section Header */}
                  <div className=" py-4 sticky top-[180px]    z-40 bg-black xxs-xs:block">
                    <div className="text-left font-semibold text-2xl xxs-xs:text-[1.25rem]">
                      {currentSection.title}
                    </div>
                  
                  </div>

                  {/* Section Body */}
                  {currentSection.type.map((typeItem, typeIndex) => (
                    <div
                      className="grid grid-cols-4 gap-4 py-4 border-t border-neutral-900 tm"
                      key={typeIndex}
                    >
                      <div className="text-left  xxs-xs:text-xs">{typeItem.subTitle}</div>
                      {typeItem.details.map((detail, detailIndex) => (
                        <div className="flex justify-center " key={detailIndex}>
                          {detail === "Yes" ? <FaRegCheckCircle className="text-[#00fb33]"/> : detail === "" ?<ImCross className="text-[#734545]"/> : detail}
                          
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
