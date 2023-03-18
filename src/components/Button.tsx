import classNames from "classnames";
import React from "react";
import { headings } from "~/utils/fonts";

interface ButtonProps {
  label: string;
  className?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      className={classNames(
        "rounded-md bg-green-900 px-8 py-4 font-headings text-lg font-bold text-white",
        headings.variable,
        className
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
