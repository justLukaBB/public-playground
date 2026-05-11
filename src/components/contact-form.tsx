"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/lib/site";

const topics = [
  { value: "weg", label: "WEG-Verwaltung" },
  { value: "miete", label: "Mietverwaltung" },
  { value: "sondereigentum", label: "Sondereigentum" },
  { value: "vermietung", label: "Vermietung" },
  { value: "sonstiges", label: "Sonstiges" },
];

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string) || "";
    const email = (data.get("email") as string) || "";
    const phone = (data.get("phone") as string) || "";
    const topic = (data.get("topic") as string) || "";
    const message = (data.get("message") as string) || "";
    const topicLabel =
      topics.find((t) => t.value === topic)?.label || "Anfrage";

    const subject = `Anfrage über die Webseite – ${topicLabel}`;
    const body = [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      phone ? `Telefon: ${phone}` : null,
      `Thema: ${topicLabel}`,
      "",
      "Nachricht:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setTimeout(() => setSubmitting(false), 1000);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input id="name" name="name" required placeholder="Ihr Name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-Mail *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="ihre@email.de"
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Telefon</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Optional"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="topic">Thema *</Label>
          <select
            id="topic"
            name="topic"
            required
            defaultValue=""
            className="flex h-11 w-full rounded-lg border border-input bg-card px-4 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent"
          >
            <option value="" disabled>
              Bitte wählen
            </option>
            {topics.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Ihre Nachricht *</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Beschreiben Sie kurz Ihr Anliegen — wir melden uns zügig bei Ihnen."
        />
      </div>
      <p className="text-xs text-muted-foreground">
        Mit dem Absenden öffnet sich Ihr Mail-Programm — Sie können die Nachricht
        dort vor dem Senden prüfen. Alternativ erreichen Sie uns telefonisch
        unter{" "}
        <a
          href={`tel:${siteConfig.phoneLink}`}
          className="underline-offset-2 hover:underline"
        >
          {siteConfig.phone}
        </a>
        .
      </p>
      <Button
        type="submit"
        variant="accent"
        size="lg"
        className="w-full sm:w-auto"
        disabled={submitting}
      >
        {submitting ? "Mail-Programm öffnet sich…" : "Nachricht senden"}
        <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  );
}
