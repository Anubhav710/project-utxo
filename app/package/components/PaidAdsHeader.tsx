import React from "react";

interface PaidAdsHeaderProps {
  title: string;
  features: { label: string; value: string }[];
}

const PaidAdsHeader: React.FC<PaidAdsHeaderProps> = ({ title, features }) => {
  return (
    <header className="sticky paid-ads-common-margin paid-ads-common-height top-0 z-50 bg-black ">
      <h1 className="md:pt-5 pt-1 paid-ads-package-header   font-bold">
        {title}
      </h1>
      <div className="grid grid-cols-2 gap-4 md:py-4 py-1  text-lg text-neutral-500 uppercase paid-ads-common-size">
        <div className="text-left font-bold">Features</div>
        <div className="text-center font-bold">{title.split(" ").pop()}</div>
      </div>

      {/* Pricing Header */}
      <div className="pricing-subheader xxs-md:space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="grid grid-cols-2 capitalize">
            <div className="text-left ">{feature.label}</div>
            <div className="text-center capitalize">{feature.value}</div>
          </div>
        ))}
      </div>
    </header>
  );
};

export default PaidAdsHeader;
