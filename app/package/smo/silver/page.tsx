"use client";

import { smo } from "@/constants/packagesData";
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";

// Define TypeScript types based on the provided data structure
interface PackageType {
  subTitle: string;
  details: string[];
}

interface PackageSection {
  title: string;
  type: PackageType[];
}

interface SMOSilverPackage {
  features?: PackageSection;
  initialAudit?: PackageSection;
  technicalSMO?: PackageSection;
  onPageSMO?: PackageSection;
  offPageSMO?: PackageSection;
  toolsReporting?: PackageSection;
  socialMediaSetup?: PackageSection;
  marketingStrategy?: PackageSection;
  reporting?: PackageSection;
  minTimeDuration?: PackageSection;
}

const PricingPage: React.FC = () => {
  return (
    <div className="bg-black text-white p-4 sm:p-8 min-h-screen max-w-screen-xl mx-auto w-full cp">
      {/* Header Section */}
      <header className="smo-common-height smo-common-margin sticky  top-0 z-50 bg-black">
        <h1 className="  smo-package-header pt-5  font-bold text-center mb-4 sm:mb-6">
          SMO Silver Package
        </h1>
        <div className="grid grid-cols-2 gap-4 py-4  text-neutral-500 uppercase smo-common-size">
          <div className="text-left font-bold">Features</div>
          <div className="text-center font-bold">Silver</div>
        </div>

        {/* Pricing Header */}
        <div className="grid grid-cols-2 gap-4 py-4 ">
          <div className="text-center"></div>
          <div className="text-center">₹14,000 / Month</div>
        </div>
      </header>

      {/* Body */}
      <div>
        {smo.smoSilverPackage.map((section: any, sectionIndex: any) => (
          <div key={sectionIndex}>
            {/* Dynamic Section Title */}
            {Object.keys(section).map((sectionKey, index) => {
              const currentSection = section[
                sectionKey as keyof SMOSilverPackage
              ] as PackageSection;

              return (
                <div
                  key={index}
                  id={`${sectionKey} wrapper`}
                  className="border-t border-t-neutral-600 mt-4"
                >
                  {/* Section Header */}
                  <div className=" gap-4 py-4 smo-common-sitcky-header bg-black">
                    <div className="text-left text-[1.25rem] font-semibold md:text-2xl">
                      {currentSection.title}
                    </div>
                  </div>

                  {/* Section Body */}
                  {currentSection.type.map((typeItem, typeIndex) => (
                    <div
                      className="grid grid-cols-2 gap-4 py-4 border-t border-neutral-900"
                      key={typeIndex}
                    >
                      <div className="text-left">{typeItem.subTitle}</div>
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
