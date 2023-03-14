import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { headings } from "~/utils/fonts";

const Logo = () => {
  return (
    <h2
      className={classNames(
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

export default Logo;
