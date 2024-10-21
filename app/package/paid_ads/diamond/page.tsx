"use client";

import { paidAds } from "@/constants/packagesData";
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import PaidAdsHeader from "../../components/PaidAdsHeader";

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
      <PaidAdsHeader
        title="Paid Ads Diamond Package"
        features={[
          {
            label: "suggested min monthly ad spend",
            value: "₹2,00,000 / month",
          },
          { label: "initial setup fees (one time)", value: "₹15,000" },
          { label: "minimum management fees", value: "₹10,000 / month" },
          {
            label: "management fees (excluding gst) % of monthly ad spend",
            value: "15%",
          },
        ]}
      />

      {/* Body */}
      <div>
        {paidAds.paidAdsDiamondPackage.map(
          (section: any, sectionIndex: any) => (
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
                    className="border-t border-t-neutral-600"
                  >
                    {/* Section Header */}
                    <div className=" gap-4 py-4 paid-ads-common-sticky-header z-40 bg-black">
                      <div className="text-left font-semibold md:text-2xl text-lg">
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
                          <div
                            className="flex justify-center "
                            key={detailIndex}
                          >
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
          )
        )}
      </div>
    </div>
  );
};

export default PricingPage;
