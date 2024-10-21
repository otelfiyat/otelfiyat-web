import { Hero, SpecialOffersSlider } from "@/components";
import FeaturedHotels from "@/components/FeaturedHotels";
import { FeaturedHotel } from "@/lib/types/featured-hotel";

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

//TODO: FeaturedHotels need to be fetched from an API
const featuredHotels: FeaturedHotel[] = [
  {
    tag: "Popüler",
    like: true,
    star: 4,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Marmaris, Muğla",
    title: "Sentinus Beach Hotel",
    features: ["Havuz", "Spa", "Deniz Kıyısında"],
    overlinedPrice: 4345,
    price: 3200,
    striking: {
      text: "Bu fiyata son 3 oda",
      color: "danger",
    },
  },
  {
    tag: "Yeni",
    like: false,
    star: 5,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Kemer, Antalya",
    title: "Rixos Premium Belek",
    features: ["Havuz", "Spa", "Deniz Kıyısında"],
    overlinedPrice: 5345,
    price: 4200,
    striking: {
      text: "Erken Rezervasyon",
      color: "success",
    },
  },
  {
    tag: "Popüler",
    like: true,
    star: 4,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Alanya, Antalya",
    title: "Eftalia Aqua Resort",
    features: ["Havuz", "Spa", "Deniz Kıyısında"],
    overlinedPrice: 3345,
    price: 2200,
    striking: {
      text: "Ücretsiz İptal",
      color: "success",
    },
  },
];

const Homepage = () => {
  return (
    <main className="container flex flex-col">
      <Hero />
      <SpecialOffersSlider specialOffers={specialOffers} />
      <FeaturedHotels featuredHotels={featuredHotels} />
    </main>
  );
};

export default Homepage;
