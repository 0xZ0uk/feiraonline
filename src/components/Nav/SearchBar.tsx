import classNames from "classnames";
import React from "react";
import { RxMagnifyingGlass } from "react-icons/rx";

interface SearchBarProps {
  value?: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div
      className={classNames(
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

export default SearchBar;
