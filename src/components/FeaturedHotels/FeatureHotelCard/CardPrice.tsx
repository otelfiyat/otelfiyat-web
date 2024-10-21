import { FeaturedHotel } from "@/lib/types/featured-hotel";
import React from "react";

const CardPrice = ({ overlinedPrice, price, striking }: FeaturedHotel) => {
  const variant =
    striking.color === "success"
      ? "btn-success"
      : striking.color === "warning"
      ? "btn-warning"
      : striking.color === "danger"
      ? "btn-error"
      : striking.color === "info"
      ? "btn-info"
      : "btn-primary";
  striking.color === "secondary" ? "btn-secondary" : "btn-primary";

  return (
    <div className="flex items-center justify-between gap-1">
      <div className="flex flex-col gap-1">
        <span className="size-caption text-brand-neutral-800 line-through">
          {overlinedPrice} ₺
        </span>
        <h4 className="size-title2 text-brand-primary-900 font-bold">
          {price} ₺
        </h4>
      </div>
      <div className="flex flex-col gap-1">
        <button className={`btn size-btn text-brand-white ${variant}`}>
          {striking.text}
        </button>
      </div>
    </div>
  );
};

export default CardPrice;
