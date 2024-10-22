import FeatureCard from "./FeatureCard";

import { FEATURES_CARDS } from "@/lib/utils/features-cards";

const FeaturesCard = () => {
  return (
    <div className="grid grid-cols-1 gap-y-4 py-4 sm:grid-cols-2 sm:gap-x-4 xl:grid-cols-4">
      {FEATURES_CARDS.map((card, index) => (
        <FeatureCard key={index} card={card} />
      ))}
    </div>
  );
};

export default FeaturesCard;
