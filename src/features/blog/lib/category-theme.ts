import { AlarmClock, BookOpen, Briefcase, type LucideIcon } from "lucide-react";
import type { BlogCategory } from "../data/en";

export interface CategoryTheme {
  /** Message key under blog.categories.* for the localized label. */
  labelKey: BlogCategory;
  gradient: string;
  chip: string;
  icon: LucideIcon;
}

export const categoryThemes: Record<BlogCategory, CategoryTheme> = {
  basics: {
    labelKey: "basics",
    gradient: "from-sky-500 to-cyan-500",
    chip: "bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300",
    icon: BookOpen,
  },
  gig: {
    labelKey: "gig",
    gradient: "from-violet-500 to-purple-500",
    chip: "bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300",
    icon: Briefcase,
  },
  deadlines: {
    labelKey: "deadlines",
    gradient: "from-amber-500 to-orange-500",
    chip: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
    icon: AlarmClock,
  },
};
