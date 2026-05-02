import type { Metadata } from "next";
import { getFaqsByCategory, faqCategoryLabels } from "../../../content/utils";
import { PageIntro } from "@/components/PageIntro";
import { WhatsappCTA } from "@/components/WhatsappCTA";

export const metadata: Metadata = {
  title: "FAQs — MallorcasLocal",
  description: "Frequently asked questions about MallorcasLocal experiences and bookings.",
};

export default function FaqsPage() {
  const grouped = getFaqsByCategory();
  const categoryOrder = ["booking", "payments", "activities", "nightlife", "markets", "general"];

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <PageIntro
        eyebrow="Help"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about booking, payments, and experiences."
      />

      <div className="space-y-12">
        {categoryOrder.map((cat) => {
          const faqs = grouped[cat];
          if (!faqs || faqs.length === 0) return null;
          return (
            <div key={cat}>
              <h2 className="text-xs uppercase tracking-widest text-accent mb-4">
                {faqCategoryLabels[cat] ?? cat}
              </h2>
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <details
                    key={faq.id}
                    className="group rounded-2xl border border-card-border bg-card-bg overflow-hidden"
                  >
                    <summary className="cursor-pointer p-5 text-base font-medium flex items-center justify-between hover:text-accent transition-colors list-none">
                      {faq.question}
                      <span className="text-muted group-open:rotate-45 transition-transform text-lg ml-4 shrink-0">+</span>
                    </summary>
                    <div className="px-5 pb-5 -mt-1">
                      <p className="text-sm text-muted leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <WhatsappCTA label="Still have questions? Chat with us" message="Hola, tengo una pregunta" />
    </div>
  );
}
