import {
  Hero,
  SpecialOffersSlider,
  FeaturedHotels,
  HolidayThemes,
  PopularLocations,
} from "@/components";

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
  {
    text: "Peşin Fiyatına 9 Taksit Fırsatı",
    emphasis: "9 Taksit",
  },
  {
    text: "Peşin Fiyatına 9 Taksit Fırsatı",
    emphasis: "9 Taksit",
  },
]; // 7 offers

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
]; // 8 hotels

//TODO: HolidayThemes need to be fetched from an API
const holidayThemes = [
  {
    title: "Ekonomik Oteller",
    image:
      "https://images.unsplash.com/photo-1526996970093-36148727de98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsJTIwZXVyb3BlfGVufDB8MXwwfHx8MA%3D%3D",
  },
  {
    title: "Balayı Otelleri",
    image:
      "https://images.unsplash.com/photo-1694125852939-1267174f2770?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsJTIwZXVyb3BlfGVufDB8MXwwfHx8MA%3D%3D",
  },
  {
    title: "Termal Oteller",
    image:
      "https://images.unsplash.com/photo-1630665425312-37a2c337694b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Şehir Otelleri",
    image:
      "https://images.unsplash.com/photo-1654086317502-531c0d05919b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGhvdGVsJTIwZXVyb3BlfGVufDB8MXwwfHx8MA%3D%3D",
  },
  {
    title: "5 Yıldızlı Oteller",
    image:
      "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const popularLocations = [
  {
    location: "Marmaris, Muğla",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    location: "Kemer, Antalya",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    location: "Alanya, Antalya",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    location: "Marmaris, Muğla",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]; // 4 locations

const Homepage = () => {
  return (
    <main className="flex flex-col h-[3000px]">
      <Hero />
      <SpecialOffersSlider specialOffers={specialOffers} />
      <FeaturedHotels featuredHotels={featuredHotels} />
      <HolidayThemes themes={holidayThemes} />
      <PopularLocations locations={popularLocations} />
    </main>
  );
};

export default Homepage;
