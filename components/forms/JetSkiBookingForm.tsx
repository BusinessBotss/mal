"use client";

import { useState } from "react";
import { BookingFormShell, FormField, inputClass, selectClass } from "./BookingFormShell";
import { buildJetSkiMessage, getWhatsAppUrl } from "@/lib/whatsapp";

export function JetSkiBookingForm() {
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("");
  const [duration, setDuration] = useState("");

  const ready = date && people && duration;
  const url = ready ? getWhatsAppUrl(buildJetSkiMessage(date, people, duration)) : "#";

  return (
    <BookingFormShell title="Jet Ski Booking" subtitle="Choose your date, group size and duration.">
      <div className="space-y-5">
        <FormField label="Date">
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputClass} />
        </FormField>

        <FormField label="Number of people">
          <input
            type="number"
            min="1"
            max="10"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            placeholder="2"
            className={inputClass}
          />
        </FormField>

        <FormField label="Duration">
          <select value={duration} onChange={(e) => setDuration(e.target.value)} className={selectClass}>
            <option value="">Select duration...</option>
            <option value="30 min">30 minutes</option>
            <option value="1 hour">1 hour</option>
            <option value="2 hours">2 hours</option>
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
          Book Jet Ski via WhatsApp
        </a>
      </div>
    </BookingFormShell>
  );
}
