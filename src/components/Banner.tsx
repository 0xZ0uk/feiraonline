import React from "react";

interface BannerProps {
  children: React.ReactElement | React.ReactElement[];
}

const Banner: React.FC<BannerProps> = ({ children }) => {
  return (
    <div className="flex h-96 w-full items-center justify-center bg-orange-200 text-green-900">
      {children}
    </div>
  );
};

export default Banner;
