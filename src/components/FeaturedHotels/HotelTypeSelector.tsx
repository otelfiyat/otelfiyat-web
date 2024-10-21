"use client";

import { FEATURURED_HOTELS_TYPE } from "@/lib/utils/featured-hotels-type";
import ShowMoreButton from "./ShowMoreButton";

interface HotelTypeSelectorProps {
  children: React.ReactNode;
}

const HotelTypeSelector = ({ children }: HotelTypeSelectorProps) => {
  return (
    <section className="flex flex-col gap-2 min-h-screen">
      <select
        className="select select-primary w-[230px] border-2 text-brand-primary-400 size-body1 font-medium sm:hidden"
        style={{
          appearance: "none",
          WebkitAppearance: "none",
          MozAppearance: "none",
          padding: "0.5rem 2rem 0.5rem 1rem",
          background:
            "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3NTZDQUMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICA8cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSI+PC9wb2x5bGluZT4KPC9zdmc+Cg==) no-repeat right 1rem center/1.5rem 1.5rem",
        }}
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
              className="btn btn-primary btn-outline size-btn"
              type="button"
            >
              {hotelType.label}
            </button>
          ))}
        </div>
        <ShowMoreButton className="hidden lg:flex" onClick={() => {}} />
      </div>
      {children}
      <ShowMoreButton
        className="hidden sm:flex items-center gap-1 lg:hidden"
        onClick={() => {}}
      />
    </section>
  );
};

export default HotelTypeSelector;
