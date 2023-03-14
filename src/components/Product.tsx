import classNames from "classnames";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { base, headings } from "~/utils/fonts";

interface ProductProps {
  name: string;
  img: string;
  price: string;
  producer: string;
  alternativePrice?: string;
}

const CartButton = () => {
  return (
    <button className="h-fit w-fit rounded-full bg-green-900 p-3 text-white">
      <FaShoppingCart />
    </button>
  );
};

const Product: React.FC<ProductProps> = ({ name, img, price }) => {
  return (
    <div className="rounded-lg border shadow-sm">
      <div className="border-b">
        <img src={img} alt={name} className="aspect-square rounded-lg" />
      </div>
      <div className="flex items-center justify-between p-2">
        <div>
          <h3
            className={classNames(
              "font-headings text-xl font-bold",
              headings.variable
            )}
          >
            {name}
          </h3>
          <p className={classNames("font-base text-sm", base.variable)}>
            {price}
          </p>
        </div>
        <div>
          <CartButton />
        </div>
      </div>
    </div>
  );
};

export default Product;
