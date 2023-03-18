import dynamic from "next/dynamic";
import React from "react";
import Footer from "./Footer";

interface LayoutProps {
  headerType?: "solid" | "transparent";
  noMap?: boolean;
  children: React.ReactElement | React.ReactElement[];
}

const Header = dynamic(() => import("~/components/Header"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const Layout: React.FC<LayoutProps> = ({ headerType, noMap, children }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Header noMap={noMap} />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
