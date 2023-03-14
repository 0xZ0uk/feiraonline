import classNames from "classnames";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { base, headings } from "~/utils/fonts";
import { RxHeart, RxHeartFilled } from "react-icons/rx";

interface ProductProps {
  name: string;
  img: string;
  price: string;
  producer: string;
  alternativePrice?: string;
}

const Product: React.FC<ProductProps> = ({
  name,
  img,
  price,
  alternativePrice,
  producer,
}) => {
  return (
    <div className="flex flex-col justify-evenly rounded-lg border shadow-sm">
      <div className="basis-2/4 border-b p-4 md:p-8">
        <img src={img} alt={name} className="aspect-square rounded-lg" />
      </div>
      <div className="flex basis-1/4 items-center justify-between border-b border-stone-100 p-2">
        <div>
          <p className="text-xs font-bold uppercase text-green-900/30 md:text-sm">
            {producer}
          </p>
          <h3
            className={classNames(
              "font-headings text-base font-bold md:text-xl",
              headings.variable
            )}
          >
            {name}
          </h3>
        </div>
      </div>
      <div className="flex basis-1/4 items-center justify-between p-2">
        <div>
          <p
            className={classNames(
              "font-base text-sm text-green-900/30",
              base.variable
            )}
          >
            {alternativePrice}
          </p>
          <p
            className={classNames(
              "font-base text-xl font-bold md:text-2xl ",
              base.variable
            )}
          >
            {price}
          </p>
        </div>
        <div className="flex gap-1 md:gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-green-900 bg-transparent p-1 font-bold text-green-900 transition-all duration-100 ease-in-out hover:h-11 hover:w-11 md:h-10 md:w-10">
            <RxHeart />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-green-900 p-2 text-white transition-all duration-100 ease-in-out hover:h-11 hover:w-11 md:h-10 md:w-10 md:p-3">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
