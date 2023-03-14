import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { RxCaretDown } from "react-icons/rx";
import { FaShoppingCart, FaTruck } from "react-icons/fa";

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

const DesktopNavigation = () => {
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
            <Link href={"/sobre"}>Receitas</Link>
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

export default DesktopNavigation;