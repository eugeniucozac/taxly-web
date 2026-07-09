import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit } from "@/lib/rate-limit";
import { env } from "@/lib/env";

const NOTIFY = env.CONTACT_EMAIL.split(",").map((e) => e.trim()).filter(Boolean);

export async function POST(req: NextRequest) {
  const body = await req.json() as {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
    locale?: string;
  };

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!checkRateLimit(`contact:${ip}`, 3)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const { name, email, subject, message } = body;
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const resend = new Resend(env.RESEND_API_KEY);
  try {
    await resend.emails.send({
      from: "Taxly Contact <noreply@gettaxly.com>",
      to: NOTIFY,
      replyTo: email,
      subject: `[Contact] ${subject ?? "General"} — ${name ?? email}`,
      text: `From: ${name ?? "Unknown"} <${email}>\nSubject: ${subject ?? "General"}\n\n${message}`,
    });
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
