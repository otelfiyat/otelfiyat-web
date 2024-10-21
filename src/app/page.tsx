import { Hero, SpecialOffersSlider } from "@/components";
import FeaturedHotels from "@/components/FeaturedHotels";

//TODO: SpecialOffers need to be fetched from an API
const specialOffers = [
  { text: "4981 Otelde En Uygun Fiyat Garantisi", emphasis: "En Uygun" },
  {
    text: "Erken Rezervasyona Özel %50'ye Varan İndirim",
    emphasis: "%50'ye Varan",
  },
  {
    text: "Şimdi Rezervasyon Yapın Otele Gidince Ödeyin",
    emphasis: "Otele Gidince",
  },
  {
    text: "Erken Rezervasyona Özel %50'ye Varan İndirim",
    emphasis: "%50'ye Varan",
  },
  {
    text: "Peşin Fiyatına 9 Taksit Fırsatı",
    emphasis: "9 Taksit",
  },
];

const Homepage = () => {
  return (
    <main className="container flex flex-col">
      <Hero />
      <SpecialOffersSlider specialOffers={specialOffers} />
      <FeaturedHotels />
    </main>
  );
};

export default Homepage;
