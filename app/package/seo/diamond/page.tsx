"use client";

import { seoPackage } from "@/constants/packagesData";
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import SeoHeader from "../../components/SeoHeader";

// Define TypeScript types based on the provided data structure
interface PackageType {
  subTitle: string;
  details: string[];
}

interface PackageSection {
  title: string;
  type: PackageType[];
}

interface SEOSilverPackage {
  features?: PackageSection;
  initialAudit?: PackageSection;
  technicalSEO?: PackageSection;
  onPageSEO?: PackageSection;
  offPageSEO?: PackageSection;
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
      <SeoHeader
        title="SEO Diamond Package"
        features={["Features", "Diamond"]}
        pricing={["", "₹1,00,000"]}
      />

      {/* Body */}
      <div>
        {seoPackage.seoDiamondPackage.map((section: any, sectionIndex: any) => (
          <div key={sectionIndex}>
            {/* Dynamic Section Title */}
            {Object.keys(section).map((sectionKey, index) => {
              const currentSection = section[
                sectionKey as keyof SEOSilverPackage
              ] as PackageSection;

              return (
                <div
                  key={index}
                  id={`${sectionKey} wrapper`}
                  className="border-t border-t-neutral-600"
                >
                  {/* Section Header */}
                  <div className=" gap-4 py-4 seo-common-sitcky-header bg-black">
                    <div className="common-heading-all ">
                      {currentSection.title}
                    </div>
                  </div>

                  {/* Section Body */}
                  {currentSection.type.map((typeItem, typeIndex) => (
                    <div
                      className="grid grid-cols-2 common-para-all gap-4 py-4 border-t border-neutral-900"
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
