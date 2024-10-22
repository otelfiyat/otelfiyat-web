import ActionCard from "./ActionCard";

import { CALL_ACTIONS_CARDS } from "@/lib/utils/call-actions-cards";

const CallActionsCards = () => {
  return (
    <section className="container grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
      {CALL_ACTIONS_CARDS.map((card, index) => (
        <ActionCard key={index} {...card} />
      ))}
    </section>
  );
};

export default CallActionsCards;
