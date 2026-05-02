export interface FaqSeed {
  id: string;
  slug: string;
  question: string;
  answer: string;
  category:
    | "booking"
    | "payments"
    | "activities"
    | "nightlife"
    | "markets"
    | "general";
}

export const faqsSeed: FaqSeed[] = [
  {
    id: "faq-how-book",
    slug: "how-do-i-book",
    question: "How do I book through MallorcasLocal?",
    answer:
      "Most plans are booked through WhatsApp. You choose the experience, send your preferred date and group size, and we confirm availability.",
    category: "booking",
  },
  {
    id: "faq-payments",
    slug: "do-i-pay-online",
    question: "Do I need to pay online in advance?",
    answer:
      "It depends on the activity. Some plans are pay-on-arrival, while others may require a deposit or pre-sale ticket.",
    category: "payments",
  },
  {
    id: "faq-boat-license",
    slug: "do-i-need-license-for-boat",
    question: "Do I need a license for the no-license boat rental?",
    answer:
      "No. The boat rental listed as no-license does not require a boating license, but it may require a deposit and basic check-in instructions.",
    category: "activities",
  },
  {
    id: "faq-jetski-transport",
    slug: "is-jetski-transport-included",
    question: "Is transport included for jet ski tours?",
    answer:
      "For selected jet ski tours, transport may be included. Final pickup details are confirmed during the booking flow.",
    category: "activities",
  },
  {
    id: "faq-nightlife-age",
    slug: "nightlife-age-requirements",
    question: "Are nightlife tickets only for adults?",
    answer:
      "Yes. Nightlife entries and club access are for adults only and may require valid ID at the door.",
    category: "nightlife",
  },
  {
    id: "faq-dress-code",
    slug: "is-there-a-dress-code-for-clubs",
    question: "Is there a dress code for clubs?",
    answer:
      "Some venues apply smart-casual or elegant dress code rules. Sportswear, beachwear or inappropriate outfits may be refused.",
    category: "nightlife",
  },
  {
    id: "faq-markets-days",
    slug: "where-can-i-see-market-days",
    question: "Where can I see the market schedule by day?",
    answer:
      "You will be able to browse markets by weekday inside the markets section, with location links and local notes.",
    category: "markets",
  },
  {
    id: "faq-local-recommendations",
    slug: "are-these-generic-tourist-recommendations",
    question: "Are these generic tourist recommendations?",
    answer:
      "No. The goal is to mix highly useful places with more selective and less obvious recommendations, keeping the experience more local and better curated.",
    category: "general",
  },
  {
    id: "faq-updated-content",
    slug: "is-the-content-updated",
    question: "Is the content updated regularly?",
    answer:
      "Yes. The content base is designed to be updated continuously as businesses, prices, schedules or seasonal recommendations change.",
    category: "general",
  },
  {
    id: "faq-recommendation-help",
    slug: "can-you-help-me-build-a-plan",
    question: "Can you help me build a plan for my trip?",
    answer:
      "Yes. You can use the short forms to tell us your interests, date, budget and group type, and we'll guide you toward the best options.",
    category: "booking",
  },
];
