import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { RxCaretDown } from "react-icons/rx";
import { routes } from "~/utils/routes";
import DesktopNavigation from "./DesktopNavigation";
import Logo from "./Logo";
import MobileNavigation from "./MobileNavigation";
import SearchBar from "./SearchBar";

interface INav {
  children?: React.ReactElement[];
}

const Nav: React.FC<INav> = ({}) => {
  const [search, setSearch] = React.useState<string | undefined>(undefined);
  const [mobileMenu, setMobileMenu] = React.useState<boolean>(false);

  return (
    <div>
      <div className="absolute z-20 flex h-20 w-full items-center justify-between border-b-2 border-b-green-900/10 bg-white/10 px-6 backdrop-blur md:px-8">
        <Logo />
        <SearchBar value={search} onChange={(value) => setSearch(value)} />
        <DesktopNavigation />
        <MobileNavigation
          toggled={mobileMenu}
          onMenuClick={() => setMobileMenu(!mobileMenu)}
        />
      </div>
      <div
        className={classNames(
          "absolute top-28 z-30 w-full bg-green-900 transition-all md:hidden",
          !mobileMenu ? "block h-fit" : "hidden h-0"
        )}
      >
        {routes.map((r) => (
          <div className="border-white/30font-bold border-b text-white">
            <div
              className={classNames(
                "flex w-full  cursor-pointer  items-center justify-between p-4",
                r.subroutes && "border-b border-white/40 "
              )}
            >
              {r.subroutes ? (
                <h3>{r.name}</h3>
              ) : (
                <Link href={r.link}>
                  <h3>{r.name}</h3>
                </Link>
              )}
              {r.subroutes && <RxCaretDown aria-hidden />}
            </div>
            {r.subroutes && r.toggled && (
              <div>
                {r.subroutes.map((sr) => (
                  <div
                    className={classNames(
                      "flex w-full items-center justify-between px-4 py-2",
                      r.subroutes &&
                        "border-b border-white/40 last-of-type:border-none"
                    )}
                  >
                    <Link href={sr.link}>
                      <h4 className="text-white/70">{sr.name}</h4>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
