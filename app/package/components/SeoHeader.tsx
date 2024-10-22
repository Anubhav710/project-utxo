import React from "react";

interface SeoHeaderProps {
  title: string;
  features: string[];
  pricing: string[];
}

const SeoHeader: React.FC<SeoHeaderProps> = ({ title, features, pricing }) => {
  return (
    <header className="sticky seo-common-margin seo-common-height top-0 z-50 bg-black">
      <h1 className="pt-5 seo-package-header font-bold text-center mb-4 sm:mb-6">
        {title}
      </h1>
      <div className="grid grid-cols-3 gap-4 py-1 xxs-xs:text-sm text-lg text-neutral-500 uppercase seo-common-size">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${index === 0 ? "text-left" : "text-center"} font-bold`}
          >
            {feature}
          </div>
        ))}
      </div>

      {/* Pricing Header */}
      <div className="grid grid-cols-3 gap-4 py-1">
        {pricing.map((price, index) => (
          <div key={index} className={`${index === 0 ? "" : "text-center"}`}>
            {price}
          </div>
        ))}
      </div>
    </header>
  );
};

export default SeoHeader;
