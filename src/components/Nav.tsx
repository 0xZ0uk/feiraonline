import React from "react";
import Link from "next/link";
import cn from "classnames";
import { useUser, UserButton } from "@clerk/nextjs";
import {
  RxHamburgerMenu,
  RxMagnifyingGlass,
  RxCaretDown,
} from "react-icons/rx";
import { MdEgg } from "react-icons/md";
import { FaShoppingCart, FaTruck } from "react-icons/fa";
import { headings } from "~/utils/fonts";
import { useRouter } from "next/router";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";

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

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }: any, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <Link
          className={classNames(
            "focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors focus:shadow-[0_0_0_2px]",
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="mb-[5px] text-lg font-medium leading-[1.2] text-green-900">
            {title}
          </div>
          <p className="text-mauve11 leading-[1.4] text-green-900/50">
            {children}
          </p>
        </Link>
      </NavigationMenu.Link>
    </li>
  )
);

const DefaultNav = () => {
  const { isSignedIn } = useUser();
  const router = useRouter();

  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="hidden gap-4 text-green-900 md:flex md:items-center">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="flex items-center gap-2">
            Produtos <RxCaretDown aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-14 right-20 w-full sm:w-auto">
            <ul className="one m-0 grid list-none gap-x-[10px] rounded-lg border border-green-900/20 bg-white/50 p-[22px] backdrop-blur-sm sm:w-[1000px] sm:grid-cols-[0.75fr_1fr_1fr_1fr]">
              <li className="row-span-3 grid">
                <NavigationMenu.Link asChild>
                  <div className="focus:shadow-violet7 flex h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b from-green-900 to-lime-700 p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]">
                    <FaTruck className="text-5xl text-white" />
                    <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">
                      Entregas Grátis
                    </div>
                    <p className="text-[14px] leading-[1.3] text-white">
                      Em todas encomendas superiores a 150€.
                    </p>
                  </div>
                </NavigationMenu.Link>
              </li>

              <ListItem href="/frutas-legumes" title="Frutas e Legumes">
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem href="/peixaria" title="Peixaria">
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href="/talho" title="Talho">
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href="/ovos-laticinios" title="Ovos e Latícinios">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
              <ListItem href="/charcutaria-queijos" title="Charcutaria">
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem href="/queijos" title="Queijos">
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem href="/padaria-pastelaria" title="Padaria e Pastelaria">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
              <ListItem href="/produtos-vegan" title="Produtos Vegan">
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href="/artesanato" title="Artesanato">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link>
            <Link href={"/feiras"}>Feiras</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link>
            <Link href={"/sobre"}>Sobre Nós</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <div className="ml-4 flex items-center gap-4 text-2xl">
          {isSignedIn ? (
            <>
              <FaShoppingCart />
              <UserButton />
            </>
          ) : (
            <button
              className="rounded-full bg-green-900 px-4 py-2 text-base font-bold text-white"
              onClick={() => router.push("/sign-in")}
            >
              Entrar/Registar
            </button>
          )}
        </div>
      </NavigationMenu.List>
    </NavigationMenu.Root>
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
