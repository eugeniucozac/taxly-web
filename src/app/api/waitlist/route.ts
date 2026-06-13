import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit } from "@/lib/rate-limit";
import { env } from "@/lib/env";

const resend = new Resend(env.RESEND_API_KEY);
const NOTIFY = env.CONTACT_EMAIL.split(",")
  .map((e) => e.trim())
  .filter(Boolean);

const WELCOME = {
  en: {
    subject: "You're on the Taxly waitlist",
    body: `Thanks for joining the Taxly waitlist!

We're building the simplest way to file US federal and state taxes — guided, plain-English, no surprise fees.

We'll email you as soon as Taxly is ready. In the meantime, if you have questions or feedback, just reply to this email.

— The Taxly team
https://gettaxly.com`,
  },
  es: {
    subject: "Estás en la lista de espera de Taxly",
    body: `¡Gracias por unirte a la lista de espera de Taxly!

Estamos construyendo la forma más sencilla de presentar impuestos federales y estatales en EE. UU. — guiado, en español claro, sin cargos sorpresa.

Te enviaremos un correo en cuanto Taxly esté listo. Mientras tanto, si tienes preguntas o comentarios, responde a este correo.

— El equipo de Taxly
https://gettaxly.com`,
  },
} as const;

type Locale = keyof typeof WELCOME;

export async function POST(req: NextRequest) {
  const body = await req.json() as { email?: string; locale?: string; website?: string };

  // Honeypot: bots fill this, real users never see it
  if (body.website) return NextResponse.json({ ok: true });

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!checkRateLimit(`waitlist:${ip}`, 3)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const { email, locale } = body;
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const copy = WELCOME[(locale as Locale) in WELCOME ? (locale as Locale) : "en"];

  try {
    await Promise.all([
      resend.emails.send({
        from: "Taxly <noreply@gettaxly.com>",
        to: NOTIFY,
        subject: `[Waitlist] New signup: ${email}`,
        text: `New waitlist signup: ${email} (locale: ${locale ?? "unknown"})`,
      }),
      resend.emails.send({
        from: "Taxly <hello@gettaxly.com>",
        to: email,
        subject: copy.subject,
        text: copy.body,
      }),
    ]);
  } catch {
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
