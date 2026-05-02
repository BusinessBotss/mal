"use client";

import { useState } from "react";
import { BookingFormShell, FormField, inputClass, selectClass } from "./BookingFormShell";
import { buildRestaurantMessage, getWhatsAppUrl } from "@/lib/whatsapp";

export function RestaurantBookingForm({ restaurantName }: { restaurantName?: string }) {
  const [restaurant, setRestaurant] = useState(restaurantName ?? "");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("");
  const [time, setTime] = useState("");

  const ready = restaurant && date && people && time;
  const url = ready ? getWhatsAppUrl(buildRestaurantMessage(restaurant, date, people, time)) : "#";

  return (
    <BookingFormShell title="Restaurant Reservation" subtitle="Reserve your table through WhatsApp.">
      <div className="space-y-5">
        {!restaurantName && (
          <FormField label="Restaurant name">
            <input
              type="text"
              value={restaurant}
              onChange={(e) => setRestaurant(e.target.value)}
              placeholder="e.g. Casa Maruka"
              className={inputClass}
            />
          </FormField>
        )}

        <FormField label="Date">
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputClass} />
        </FormField>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

          <FormField label="Preferred time">
            <select value={time} onChange={(e) => setTime(e.target.value)} className={selectClass}>
              <option value="">Select time...</option>
              <option value="13:00">13:00</option>
              <option value="13:30">13:30</option>
              <option value="14:00">14:00</option>
              <option value="14:30">14:30</option>
              <option value="20:00">20:00</option>
              <option value="20:30">20:30</option>
              <option value="21:00">21:00</option>
              <option value="21:30">21:30</option>
              <option value="22:00">22:00</option>
            </select>
          </FormField>
        </div>

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
          Reserve via WhatsApp
        </a>
      </div>
    </BookingFormShell>
  );
}
