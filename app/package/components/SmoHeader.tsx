import React from "react";

interface SmoHeaderProps {
  title: string;
  features: string[];
  pricing: string[];
}

const SmoHeader: React.FC<SmoHeaderProps> = ({ title, features, pricing }) => {
  return (
    <header className="common-margin common-height sticky top-0 z-50 bg-black">
      <h1 className="smo-package-header">{title}</h1>
      {/* Top Header */}
      <div className="grid grid-cols-2 gap-4 py-4 text-neutral-500 uppercase">
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
      <div className="grid grid-cols-2 gap-4 py-4 xxs-xs:pb-1 tm">
        {pricing.map((price, index) => (
          <div key={index} className="text-center">
            {price}
          </div>
        ))}
      </div>
    </header>
  );
};

export default SmoHeader;
