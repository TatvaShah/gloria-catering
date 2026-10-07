"use client";

import { useEffect, useMemo, useState } from "react";
import {
  composeInquiry,
  eventTypes,
  instagramDmUrl,
  mailtoHref,
  trayOptions,
} from "@/lib/content";

const toastCopy = "Message copied, just paste it in the DM";

export function InquiryForm() {
  const [eventType, setEventType] = useState<string>(eventTypes[0]);
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("20");
  const [items, setItems] = useState<string[]>(["Charcuterie boards", "Fruit platters"]);
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [toast, setToast] = useState(false);

  const ready = date.length > 0 && Number(guests) > 0 && items.length > 0;
  const message = useMemo(() => {
    if (!ready) {
      return "Choose a date, a guest count, and at least one tray. The note below will update as you go.";
    }

    return composeInquiry({ eventType, date, guests, items, notes });
  }, [ready, eventType, date, guests, items, notes]);

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timer = window.setTimeout(() => setToast(false), 5000);
    return () => window.clearTimeout(timer);
  }, [toast]);

  function toggleItem(item: string) {
    setItems((current) =>
      current.includes(item) ? current.filter((entry) => entry !== item) : [...current, item],
    );
  }

  async function copyAndOpen() {
    if (!ready) {
      setError("Add a date, a guest count of at least 1, and at least one tray.");
      return;
    }

    setError("");
    const inquiry = composeInquiry({ eventType, date, guests, items, notes });

    try {
      await navigator.clipboard.writeText(inquiry);
      setToast(true);
      window.open(instagramDmUrl, "_blank", "noopener,noreferrer");
    } catch {
      setError("The message could not be copied in this browser. Use the email button, or copy the note below.");
    }
  }

  const mail = ready ? mailtoHref(composeInquiry({ eventType, date, guests, items, notes }), date) : `mailto:catering.gloria11@gmail.com`;

  return (
    <form
      className="fields"
      onSubmit={(event) => {
        event.preventDefault();
        void copyAndOpen();
      }}
    >
      <label>
        <span>Event type</span>
        <select value={eventType} onChange={(event) => setEventType(event.target.value)}>
          {eventTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>Date</span>
        <input
          type="date"
          value={date}
          required
          onChange={(event) => setDate(event.target.value)}
        />
      </label>
      <label>
        <span>Guest count</span>
        <input
          type="number"
          min={1}
          max={5000}
          inputMode="numeric"
          value={guests}
          required
          onChange={(event) => setGuests(event.target.value)}
        />
      </label>
      <fieldset className="checks">
        <legend>Items</legend>
        {trayOptions.map((item) => (
          <label key={item}>
            <input
              type="checkbox"
              checked={items.includes(item)}
              onChange={() => toggleItem(item)}
            />
            {item}
          </label>
        ))}
      </fieldset>
      <label>
        <span>Anything else</span>
        <textarea
          value={notes}
          maxLength={600}
          onChange={(event) => setNotes(event.target.value)}
          placeholder="Colours, dietary notes, or where the event will be held."
        />
      </label>
      {error ? <p className="form-error">{error}</p> : null}
      <p className="preview">{message}</p>
      <div className="form-actions">
        <button className="button" type="submit">
          Copy message and open Instagram
        </button>
        <a
          className="ghost"
          href={mail}
          onClick={(event) => {
            if (!ready) {
              event.preventDefault();
              setError("Add a date, a guest count of at least 1, and at least one tray.");
            }
          }}
        >
          Email this inquiry
        </a>
      </div>
      {toast ? (
        <p className="toast" role="status">
          {toastCopy}
        </p>
      ) : null}
    </form>
  );
}
