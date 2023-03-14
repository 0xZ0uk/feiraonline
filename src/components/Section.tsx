import classNames from "classnames";
import React from "react";
import { headings } from "~/utils/fonts";

interface SectionProps {
  title: string;
  children: React.ReactElement | React.ReactElement[];
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div className="w-full p-4 md:p-8">
      <h2
        className={classNames(
          "mb-4 font-headings text-2xl font-bold text-stone-400 md:text-3xl",
          headings.variable
        )}
      >
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
};

export default Section;
