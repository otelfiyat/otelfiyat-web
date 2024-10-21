import LocationCards from "./LocationCards";
import LocationSelector from "./LocationSelector";

interface PopularLocationsProps {
  locations: {
    location: string;
    image: string;
  }[];
}

const PopularLocations = ({ locations }: PopularLocationsProps) => {
  return (
    <section className="container flex flex-col gap-3">
      <h2 className="font-bold size-h5 text-brand-primary-700">
        Popüler Bölgeler
      </h2>
      <LocationSelector />
      <LocationCards locations={locations} />
    </section>
  );
};

export default PopularLocations;
