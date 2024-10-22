import {
  Hero,
  SpecialOffersSlider,
  FeaturedHotels,
  HolidayThemes,
  PopularLocations,
  BottomCards,
} from "@/components";

import { getHomepageData } from "@/lib/helpers/getHomepageData";

const Homepage = async () => {
  const data = await getHomepageData();

  const { specialOffers, featuredHotels, holidayThemes, popularLocations } =
    data[0];

  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <SpecialOffersSlider specialOffers={specialOffers} />
      <FeaturedHotels featuredHotels={featuredHotels} />
      <HolidayThemes themes={holidayThemes} />
      <PopularLocations locations={popularLocations} />
      <BottomCards />
    </main>
  );
};

export default Homepage;
