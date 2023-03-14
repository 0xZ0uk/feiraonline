import React from "react";

interface IFooter {
  backgroundImage?: string;
}

const Footer: React.FC<IFooter> = () => {
  return <div className="mt-16 h-[40vh] w-full bg-green-900 text-white"></div>;
};

export default Footer;
