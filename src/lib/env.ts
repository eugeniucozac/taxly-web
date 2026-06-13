export const env = {
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gettaxly.com",
  RESEND_API_KEY: process.env.RESEND_API_KEY ?? "",
  CONTACT_EMAIL: process.env.CONTACT_EMAIL ?? "hello@gettaxly.com",
} as const;
