import React from "react";
import Link from "next/link";
import cn from "classnames";
import { RxHamburgerMenu, RxMagnifyingGlass, RxAvatar } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";
import { headings } from "~/utils/fonts";

const Logo = () => {
  return (
    <h2
      className={cn(
        headings.variable,
        "font-headings text-3xl font-bold text-green-900"
      )}
    >
      <Link className="font-bold" href="/">
        FeiraOnline
      </Link>
    </h2>
  );
};

interface SearchBarProps {
  value?: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div
      className={cn(
        "hidden h-12 items-center justify-between rounded-full border-2 border-green-900/60 px-4 aria-selected:w-96 md:flex"
      )}
    >
      <input
        className="h-full w-72 bg-transparent text-green-900 placeholder-green-900/60 outline-none transition-[width] focus:w-96"
        value={value}
        placeholder="O que procura?"
        onChange={(e) => onChange(e.target.value)}
      />
      <RxMagnifyingGlass className="cursor-pointer text-xl font-bold text-green-900/60" />
    </div>
  );
};

const DefaultNav = () => {
  return (
    <ul className="hidden gap-4 text-green-900 md:flex md:items-center">
      <li className="menuLink">Produtos</li>
      <li className="menuLink">Feiras</li>
      <li className="menuLink">Sobre Nós</li>
      <div className="ml-4 flex gap-4 text-2xl">
        <FaShoppingCart />
        <RxAvatar />
      </div>
    </ul>
  );
};

const MobileNav = () => {
  return (
    <div className="flex gap-4 md:invisible md:hidden">
      <RxMagnifyingGlass className="cursor-pointer text-xl font-bold text-green-900" />
      <RxHamburgerMenu className="cursor-pointer text-xl font-bold text-green-900" />
    </div>
  );
};

interface INav {
  children?: React.ReactElement[];
}

const Nav: React.FC<INav> = ({}) => {
  const [search, setSearch] = React.useState<string | undefined>(undefined);

  return (
    <div className="absolute z-20 flex h-20 w-full items-center justify-between border-b-2 border-b-green-900/10 bg-white/10 px-6 backdrop-blur md:px-8">
      <Logo />
      <SearchBar value={search} onChange={(value) => setSearch(value)} />
      <DefaultNav />
      <MobileNav />
    </div>
  );
};

export default Nav;
