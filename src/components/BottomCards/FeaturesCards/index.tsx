import FeatureCard from "./FeatureCard";

import { FEATURES_CARDS } from "@/lib/utils/features-cards";

const FeaturesCards = () => {
  return (
    <section className="bg-brand-white mt-10 mb-6 select-none">
      <div className="container grid grid-cols-1 gap-y-4 py-6 sm:grid-cols-2 sm:gap-x-4 xl:grid-cols-4">
        {FEATURES_CARDS.map((card, index) => (
          <FeatureCard key={index} card={card} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesCards;
