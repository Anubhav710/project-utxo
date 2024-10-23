import React from "react";

interface SmoHeaderProps {
  title: string;
  features: string[];
  pricing: string[];
  isDiamond?: boolean;
  className?: string;
}

const SmoHeader: React.FC<SmoHeaderProps> = ({
  title,
  features,
  pricing,
  isDiamond,
  className,
}) => {
  return (
    <header className="common-margin common-height sticky top-0 z-50 bg-black">
      <h1 className="smo-package-header">{title}</h1>
      {/* Top Header */}
      <div
        className={`${
          isDiamond ? "grid grid-cols-2" : "grid grid-cols-3"
        } ${className}  gap-4 py-4 text-neutral-500 uppercase`}
      >
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
      <div
        className={` gap-4 py-4 xxs-xs:pb-1 tm ${
          isDiamond ? "grid grid-cols-2" : "grid grid-cols-3"
        }`}
      >
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
