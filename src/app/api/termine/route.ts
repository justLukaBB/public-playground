import { NextResponse } from "next/server";

const TERMINE_API_URL = process.env.TERMINE_API_URL || "http://localhost:3200";

interface TerminPayload {
  name?: string;
  email?: string;
  grund?: string;
  datum?: string;
  uhrzeit?: string;
  telefon?: string;
  thema?: string;
}

export async function POST(request: Request) {
  let body: TerminPayload;
  try {
    body = (await request.json()) as TerminPayload;
  } catch {
    return NextResponse.json(
      { error: "Ungültige Anfrage." },
      { status: 400 }
    );
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const grund = body.grund?.trim();
  const datum = body.datum?.trim();
  const uhrzeit = body.uhrzeit?.trim();
  const telefon = body.telefon?.trim();
  const thema = body.thema?.trim();

  if (!name || !email || !grund || !datum || !uhrzeit) {
    return NextResponse.json(
      { error: "Bitte alle Pflichtfelder ausfüllen." },
      { status: 400 }
    );
  }

  const grundErweitert = [
    `[Hürland Hausverwaltung] Anfrage über Webseite`,
    thema ? `Thema: ${thema}` : null,
    telefon ? `Telefon: ${telefon}` : null,
    "",
    grund,
  ]
    .filter((line) => line !== null)
    .join("\n");

  try {
    const response = await fetch(`${TERMINE_API_URL}/api/termine`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        grund: grundErweitert,
        datum,
        uhrzeit,
      }),
    });

    if (!response.ok) {
      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
      };
      return NextResponse.json(
        {
          error:
            data.error ||
            "Der Termin konnte nicht gespeichert werden. Bitte später erneut versuchen.",
        },
        { status: response.status }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[api/termine] Weiterleitung fehlgeschlagen:", error);
    return NextResponse.json(
      {
        error:
          "Der Termin-Service ist gerade nicht erreichbar. Bitte später erneut versuchen oder telefonisch anfragen.",
      },
      { status: 502 }
    );
  }
}
