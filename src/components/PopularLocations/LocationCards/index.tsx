import LocationCard from "./LocationCard";

interface LocationCardsProps {
  locations: {
    location: string;
    image: string;
  }[];
}
const LocationCards = ({ locations }: LocationCardsProps) => {
  return (
    <section className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:grid-rows-3 sm:gap-y-0">
      <LocationCard location={locations[0]} order={1} />
      <LocationCard location={locations[1]} order={2} />
      <LocationCard location={locations[2]} order={3} />
      <LocationCard location={locations[3]} order={4} />
    </section>
  );
};

export default LocationCards;
