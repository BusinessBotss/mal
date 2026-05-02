"use client";

import { useState } from "react";
import { BookingFormShell, FormField, inputClass, selectClass } from "./BookingFormShell";
import { buildNightlifeMessage, getWhatsAppUrl } from "@/lib/whatsapp";

export function NightlifeBookingForm() {
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("");

  const ready = event && date && people;
  const url = ready ? getWhatsAppUrl(buildNightlifeMessage(event, date, people)) : "#";

  return (
    <BookingFormShell title="Nightlife & VIP" subtitle="Book your night out in Mallorca.">
      <div className="space-y-5">
        <FormField label="Type of event">
          <select value={event} onChange={(e) => setEvent(e.target.value)} className={selectClass}>
            <option value="">Select event type...</option>
            <option value="Club entry">Club entry</option>
            <option value="VIP table">VIP table</option>
            <option value="Boat party">Boat party</option>
            <option value="Private event">Private event</option>
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
            placeholder="4"
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
          Book Nightlife via WhatsApp
        </a>
      </div>
    </BookingFormShell>
  );
}
