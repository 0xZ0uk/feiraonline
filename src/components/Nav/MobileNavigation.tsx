import classNames from "classnames";
import React from "react";
import { RxHamburgerMenu, RxMagnifyingGlass, RxCross1 } from "react-icons/rx";

interface MobileNavigationProps {
  toggled: boolean;
  onMenuClick: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  toggled,
  onMenuClick,
}) => {
  return (
    <div className="flex gap-4 md:invisible md:hidden">
      <RxMagnifyingGlass className="cursor-pointer text-xl font-bold text-green-900" />
      {toggled ? (
        <RxHamburgerMenu
          className="cursor-pointer text-xl font-bold text-green-900"
          onClick={onMenuClick}
        />
      ) : (
        <RxCross1
          className="cursor-pointer text-xl font-bold text-green-900"
          onClick={onMenuClick}
        />
      )}
    </div>
  );
};

export default MobileNavigation;
