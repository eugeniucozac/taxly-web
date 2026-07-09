import { notFound } from "next/navigation";

/**
 * Catch-all inside the locale segment: any unknown path renders the branded
 * [locale]/not-found.tsx (with navbar/footer) instead of the bare root 404.
 */
export default function CatchAll() {
  notFound();
}
