import { cn } from "@/lib/utils";

/**
 * The Taxly logo: the Form-404/1040 brand chrome miniaturized into a mark —
 * an ink-bordered form card (header rule + number cell + dotted fill-in
 * lines) with the bold sky check breaking out of the card. Pure SVG in
 * currentColor tokens, so it follows light/dark automatically.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" aria-hidden focusable="false">
        {/* form card */}
        <rect
          x="3"
          y="2.75"
          width="17.5"
          height="18.5"
          rx="2.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="text-foreground"
        />
        {/* header rule + number cell (the "1040" box, abstracted) */}
        <line
          x1="3"
          y1="8.25"
          x2="20.5"
          y2="8.25"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-foreground"
        />
        <line
          x1="9"
          y1="2.75"
          x2="9"
          y2="8.25"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-foreground"
        />
        {/* dotted fill-in lines */}
        <line
          x1="6.25"
          y1="12.25"
          x2="14.5"
          y2="12.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="0.1 2.6"
          className="text-muted-foreground"
        />
        <line
          x1="6.25"
          y1="15.75"
          x2="11.5"
          y2="15.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="0.1 2.6"
          className="text-muted-foreground"
        />
        {/* the sky check, breaking out of the card */}
        <path
          d="M12.75 16.25l3.35 3.35L22.5 13"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        />
      </svg>
      <span className="text-xl font-bold tracking-tight text-foreground">Taxly</span>
    </span>
  );
}
