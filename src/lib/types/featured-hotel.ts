export interface FeaturedHotel {
  tag: string;
  like: boolean;
  star: number;
  image: string;
  location: string;
  title: string;
  features: string[];
  overlinedPrice: number;
  price: number;
  striking: {
    text: string;
    color: "success" | "danger" | "warning" | "info" | "primary" | "secondary";
  };
}
