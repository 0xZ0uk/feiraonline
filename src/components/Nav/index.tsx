import React from "react";
import DesktopNavigation from "./DesktopNavigation";
import Logo from "./Logo";
import MobileNavigation from "./MobileNavigation";
import SearchBar from "./SearchBar";

interface INav {
  children?: React.ReactElement[];
}

const Nav: React.FC<INav> = ({}) => {
  const [search, setSearch] = React.useState<string | undefined>(undefined);

  return (
    <div className="absolute z-20 flex h-20 w-full items-center justify-between border-b-2 border-b-green-900/10 bg-white/10 px-6 backdrop-blur md:px-8">
      <Logo />
      <SearchBar value={search} onChange={(value) => setSearch(value)} />
      <DesktopNavigation />
      <MobileNavigation />
    </div>
  );
};

export default Nav;
