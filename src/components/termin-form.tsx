"use client";

import { useMemo, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const topics = [
  { value: "WEG-Verwaltung", label: "WEG-Verwaltung" },
  { value: "Mietverwaltung", label: "Mietverwaltung" },
  { value: "Sondereigentum", label: "Sondereigentum" },
  { value: "Vermietung", label: "Vermietung" },
  { value: "Erstgespräch", label: "Erstgespräch / Wechsel" },
  { value: "Sonstiges", label: "Sonstiges" },
];

// Bürozeiten: Mo.–Fr. 09:00 – 16:00 Uhr · Slots alle 30 Minuten
function buildTimeSlots(startMin = 9 * 60, endMin = 16 * 60, stepMin = 30) {
  const slots: string[] = [];
  for (let m = startMin; m <= endMin; m += stepMin) {
    const h = Math.floor(m / 60).toString().padStart(2, "0");
    const mm = (m % 60).toString().padStart(2, "0");
    slots.push(`${h}:${mm}`);
  }
  return slots;
}

// Liefert die nächsten n Werktage (Mo–Fr) als ISO-Datum + lesbares Label
function buildWeekdayOptions(count = 60) {
  const options: { value: string; label: string }[] = [];
  const now = new Date();
  const d = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  while (options.length < count) {
    const day = d.getDay(); // 0 = So, 6 = Sa
    if (day !== 0 && day !== 6) {
      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const dd = String(d.getDate()).padStart(2, "0");
      const value = `${yyyy}-${mm}-${dd}`;
      const label = d.toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
      options.push({ value, label });
    }
    d.setDate(d.getDate() + 1);
  }
  return options;
}

type Status = "idle" | "submitting" | "success" | "error";

export function TerminForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const timeSlots = useMemo(() => buildTimeSlots(), []);
  const dateOptions = useMemo(() => buildWeekdayOptions(60), []);
  const defaultDate = dateOptions[0]?.value;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/termine", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const d = (await res.json().catch(() => ({}))) as { error?: string };
        setStatus("error");
        setErrorMsg(d.error || "Senden fehlgeschlagen. Bitte erneut versuchen.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Netzwerkfehler. Bitte erneut versuchen.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent/30 bg-accent/10 p-8 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-4 font-serif text-2xl font-semibold">
          Vielen Dank — Ihre Anfrage ist bei uns!
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Wir prüfen Ihren Wunschtermin und melden uns kurzfristig per E-Mail
          zurück. Eine Bestätigung haben wir Ihnen außerdem an Ihre
          E-Mail-Adresse geschickt.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Weitere Anfrage stellen
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Ihr Name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-Mail *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="ihre@email.de"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="telefon">Telefon</Label>
          <Input
            id="telefon"
            name="telefon"
            type="tel"
            autoComplete="tel"
            placeholder="Optional"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="thema">Thema *</Label>
          <select
            id="thema"
            name="thema"
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

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="datum">Wunschdatum *</Label>
          <select
            id="datum"
            name="datum"
            required
            defaultValue={defaultDate}
            className="flex h-11 w-full rounded-lg border border-input bg-card px-4 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent"
          >
            {dateOptions.map((d) => (
              <option key={d.value} value={d.value}>
                {d.label}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="uhrzeit">Wunschuhrzeit *</Label>
          <select
            id="uhrzeit"
            name="uhrzeit"
            required
            defaultValue="10:00"
            className="flex h-11 w-full rounded-lg border border-input bg-card px-4 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent"
          >
            {timeSlots.map((t) => (
              <option key={t} value={t}>
                {t} Uhr
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="grund">Worum geht es? *</Label>
        <Textarea
          id="grund"
          name="grund"
          required
          rows={5}
          placeholder="Beschreiben Sie kurz Ihr Anliegen — z. B. neue Verwaltung gesucht, Frage zur Abrechnung, Wechsel der WEG-Verwaltung."
        />
      </div>

      <p className="text-xs text-muted-foreground">
        Pflichtfelder sind mit * markiert. Unsere Bürozeiten: Mo.–Fr. 9:00–16:00
        Uhr. Wunschtermine außerhalb dieser Zeiten gerne telefonisch anfragen —
        wir melden uns kurzfristig zurück.
      </p>

      {status === "error" && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
          {errorMsg}
        </div>
      )}

      <Button
        type="submit"
        variant="accent"
        size="lg"
        className="w-full sm:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Wird gesendet…" : "Termin anfragen"}
        <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  );
}
