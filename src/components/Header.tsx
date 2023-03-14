import React from "react";
import Nav from "./Nav";
import Topbar from "./Topbar";

interface IHeader {
  backgroundImage?: string;
}

const Header: React.FC<IHeader> = () => {
  return (
    <div className="h-[50vh] w-full bg-orange-200">
      <Topbar
        message={
          <p>
            <span className="font-bold">Entrega Grátis</span> em encomendas
            superiores a 50€
          </p>
        }
      />
      <Nav />
    </div>
  );
};

export default Header;
