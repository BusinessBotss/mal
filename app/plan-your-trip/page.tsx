import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { TripPlannerForm } from "@/components/forms/TripPlannerForm";
import { WhatsappCTA } from "@/components/WhatsappCTA";

export const metadata: Metadata = {
  title: "Plan Your Trip — MallorcasLocal",
  description: "Tell us about your ideal Mallorca experience and we'll build the perfect plan for you.",
};

export default function PlanYourTripPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <PageIntro
        eyebrow="Your Trip"
        title="Plan Your Mallorca Experience"
        subtitle="Fill in your dates, interests and group size. We'll help you build a custom itinerary via WhatsApp."
      />

      <TripPlannerForm />

      <WhatsappCTA label="Or just message us directly" />
    </div>
  );
}
