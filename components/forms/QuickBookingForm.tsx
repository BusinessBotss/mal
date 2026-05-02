"use client";

import { useState } from "react";
import { BookingFormShell, FormField, inputClass, selectClass } from "./BookingFormShell";
import { buildQuickBookingMessage, getWhatsAppUrl } from "@/lib/whatsapp";

export function QuickBookingForm() {
  const [plan, setPlan] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("");

  const ready = plan && date && people;
  const url = ready ? getWhatsAppUrl(buildQuickBookingMessage(plan, date, people)) : "#";

  return (
    <BookingFormShell title="Quick Booking" subtitle="Tell us your plan and we'll confirm availability.">
      <div className="space-y-5">
        <FormField label="What do you want to do?">
          <select value={plan} onChange={(e) => setPlan(e.target.value)} className={selectClass}>
            <option value="">Select a plan...</option>
            <option value="Jet Ski">Jet Ski</option>
            <option value="Boat Rental (no license)">Boat Rental (no license)</option>
            <option value="Restaurant Reservation">Restaurant Reservation</option>
            <option value="Nightlife / VIP">Nightlife / VIP</option>
            <option value="Full Day Trip">Full Day Trip</option>
            <option value="Other">Other</option>
          </select>
        </FormField>

        <FormField label="Date">
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputClass} />
        </FormField>

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
          Book via WhatsApp
        </a>
      </div>
    </BookingFormShell>
  );
}
