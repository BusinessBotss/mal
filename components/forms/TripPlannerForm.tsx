"use client";

import { useState } from "react";
import { BookingFormShell, FormField, inputClass, selectClass } from "./BookingFormShell";
import { buildTripPlannerMessage, getWhatsAppUrl } from "@/lib/whatsapp";

export function TripPlannerForm() {
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [people, setPeople] = useState("");
  const [interests, setInterests] = useState("");
  const [budget, setBudget] = useState("");

  const ready = arrival && departure && people && interests;
  const url = ready ? getWhatsAppUrl(buildTripPlannerMessage(arrival, departure, people, interests, budget)) : "#";

  return (
    <BookingFormShell title="Plan Your Trip" subtitle="Tell us about your ideal Mallorca experience.">
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label="Arrival date">
            <input type="date" value={arrival} onChange={(e) => setArrival(e.target.value)} className={inputClass} />
          </FormField>
          <FormField label="Departure date">
            <input type="date" value={departure} onChange={(e) => setDeparture(e.target.value)} className={inputClass} />
          </FormField>
        </div>

        <FormField label="Number of people">
          <input
            type="number"
            min="1"
            max="20"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            placeholder="2"
            className={inputClass}
          />
        </FormField>

        <FormField label="What interests you?">
          <select value={interests} onChange={(e) => setInterests(e.target.value)} className={selectClass}>
            <option value="">Select interests...</option>
            <option value="Beaches & Calas">Beaches & Calas</option>
            <option value="Restaurants & Food">Restaurants & Food</option>
            <option value="Water Sports">Water Sports</option>
            <option value="Mountains & Nature">Mountains & Nature</option>
            <option value="Nightlife & Parties">Nightlife & Parties</option>
            <option value="Culture & Villages">Culture & Villages</option>
            <option value="Mix of everything">Mix of everything</option>
          </select>
        </FormField>

        <FormField label="Budget range (optional)">
          <select value={budget} onChange={(e) => setBudget(e.target.value)} className={selectClass}>
            <option value="">Select budget...</option>
            <option value="Budget-friendly">Budget-friendly</option>
            <option value="Mid-range">Mid-range</option>
            <option value="Premium">Premium</option>
            <option value="No limit">No limit</option>
          </select>
        </FormField>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 w-full text-sm font-medium px-6 py-3.5 rounded-full transition-colors ${
            ready
              ? "bg-[#25D366] text-white hover:bg-[#20bd5a]"
              : "bg-card-border text-muted cursor-not-allowed pointer-events-none"
          }`}
        >
          Plan My Trip via WhatsApp
        </a>
      </div>
    </BookingFormShell>
  );
}
