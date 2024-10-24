"use client";
import { useState } from "react";

import ShowMoreButton from "./ShowMoreButton";

import { FEATURURED_HOTELS_TYPE } from "@/lib/utils/featured-hotels-type";

interface HotelTypeSelectorProps {
  showMore: boolean;
  toggle: () => void;
}

const HotelTypeSelector = ({ showMore, toggle }: HotelTypeSelectorProps) => {
  const [selectedHotelType, setSelectedHotelType] = useState(
    FEATURURED_HOTELS_TYPE[0].value
  );

  const handleHotelTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedHotelType(event.target.value);
  };

  const buttonText = showMore ? "Daha Az Göster" : "Daha Fazla Göster";

  return (
    <section className="flex flex-col gap-2">
      <select
        className="select select-primary w-[230px] text-brand-primary-500 size-body1 font-semibold sm:hidden"
        style={{
          appearance: "none",
          WebkitAppearance: "none",
          MozAppearance: "none",
          padding: "0.5rem 2rem 0.5rem 1rem",
          background:
            "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3NTZDQUMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICA8cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSI+PC9wb2x5bGluZT4KPC9zdmc+Cg==) no-repeat right 1rem center/1.5rem 1.5rem",
        }}
        value={selectedHotelType}
        onChange={handleHotelTypeChange}
      >
        {FEATURURED_HOTELS_TYPE.map((hotelType) => (
          <option key={hotelType.value} value={hotelType.value}>
            {hotelType.label}
          </option>
        ))}
      </select>
      <div className="hidden sm:flex justify-between gap-4">
        <div className="flex gap-4">
          {FEATURURED_HOTELS_TYPE.map((hotelType) => (
            <button
              key={hotelType.value}
              className={`btn btn-primary size-btn ${
                selectedHotelType === hotelType.value
                  ? "btn-primary-active"
                  : "btn-outline"
              }`}
              onClick={() => setSelectedHotelType(hotelType.value)}
            >
              {hotelType.label}
            </button>
          ))}
        </div>
        <ShowMoreButton
          className="hidden 2xl:flex"
          text={buttonText}
          onClick={toggle}
        />
      </div>
    </section>
  );
};

export default HotelTypeSelector;
