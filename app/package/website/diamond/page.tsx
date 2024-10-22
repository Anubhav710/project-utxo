"use client";

import { website } from "@/constants/packagesData";
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import WebsiteHeader from "../../components/WebsiteHeader";

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
    <div className="bg-black text-white p-4 sm:p-8 min-h-screen max-w-screen-xl mx-auto w-full cp">
      <WebsiteHeader
        title="Website Diamond Package"
        features={["Features", "Price Based On Project Scope"]}
        pricing={["", "Start at ₹1,50,000+"]}
      />

      {/* Body */}
      <div>
        {website.websiteDiamondPackage.map((section, sectionIndex) => (
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
                  <div className=" gap-4 py-4  sticky top-[180px]  z-40 bg-black">
                    <div className=" common-heading-all">
                      {currentSection.title}
                    </div>
                  </div>

                  {/* Section Body */}
                  {currentSection.type.map((typeItem, typeIndex) => (
                    <div
                      className="grid grid-cols-2 common-para-all  gap-4 py-4 border-t border-neutral-900"
                      key={typeIndex}
                    >
                      <div className="text-left ">{typeItem.subTitle}</div>
                      {typeItem.details.map((detail, detailIndex) => (
                        <div className="flex justify-center " key={detailIndex}>
                          {detail === "Yes" ? (
                            <FaRegCheckCircle className="text-[#00fb33]" />
                          ) : detail === "" ? (
                            <ImCross className="text-[#734545]" />
                          ) : (
                            detail
                          )}
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
