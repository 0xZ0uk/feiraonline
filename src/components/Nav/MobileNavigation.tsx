import React from "react";
import { RxHamburgerMenu, RxMagnifyingGlass } from "react-icons/rx";

const MobileNavigation = () => {
  return (
    <div className="flex gap-4 md:invisible md:hidden">
      <RxMagnifyingGlass className="cursor-pointer text-xl font-bold text-green-900" />
      <RxHamburgerMenu className="cursor-pointer text-xl font-bold text-green-900" />
    </div>
  );
};

export default MobileNavigation;
