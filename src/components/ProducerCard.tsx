import classNames from "classnames";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { base, headings } from "~/utils/fonts";
import { RxHeart, RxHeartFilled } from "react-icons/rx";

interface ProducerCardProps {
  name: string;
  img: string;
}

const ProducerCard: React.FC<ProducerCardProps> = ({ name, img }) => {
  return (
    <div className="rounded-lg border shadow-sm">
      <div className="border-b">
        <img
          src={""}
          alt={name}
          className="aspect-video rounded-lg object-fill p-4 md:p-8"
        />
      </div>
      <div className="flex h-20 items-center justify-between gap-4 px-2 md:px-4">
        <h3
          className={classNames(
            "max-w-[80%] font-headings text-sm font-bold md:text-xl",
            headings.variable
          )}
        >
          {name}
        </h3>
        <button className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-green-900 bg-transparent p-1 font-bold text-green-900 transition-all duration-100 ease-in-out hover:h-11 hover:w-11 md:h-10 md:w-10">
          <RxHeart />
        </button>
      </div>
    </div>
  );
};

export default ProducerCard;
