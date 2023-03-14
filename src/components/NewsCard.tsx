import classNames from "classnames";
import React from "react";
import { base, headings } from "~/utils/fonts";

interface NewsCardProps {
  title: string;
  description?: string;
  className?: string;
  src: string;
  img: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  className,
  src,
  img,
}) => {
  return (
    <div
      className={classNames("w-full rounded-lg border shadow-sm", className)}
    >
      <div className="flex aspect-video items-center justify-center border-b">
        <img src={img} alt={title.toLowerCase()} className="rounded-lg" />
      </div>
      <div className="flex items-center justify-between p-2">
        <div>
          <h3
            className={classNames(
              "mb-1 font-headings text-lg font-bold leading-tight md:text-xl",
              headings.variable
            )}
          >
            {title}
          </h3>
          <p
            className={classNames(
              "font-base  text-xs md:text-sm",
              base.variable
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
