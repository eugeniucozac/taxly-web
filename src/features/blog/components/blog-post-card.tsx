import { Link } from "@/i18n/navigation";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "../lib/blog";
import { categoryThemes } from "../lib/category-theme";

interface BlogPostCardProps {
  post: BlogPost;
  locale: string;
  readMore: string;
  categoryLabel: string;
  readTimeLabel: string;
}

export function BlogPostCard({
  post,
  locale,
  readMore,
  categoryLabel,
  readTimeLabel,
}: BlogPostCardProps) {
  const theme = categoryThemes[post.category];
  const Icon = theme.icon;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className={`h-1.5 bg-gradient-to-r ${theme.gradient}`} aria-hidden />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${theme.chip}`}
          >
            <Icon size={12} aria-hidden />
            {categoryLabel}
          </span>
          <span className="text-xs text-muted-foreground/80">{readTimeLabel}</span>
        </div>

        <h2 className="mb-2 text-lg font-semibold leading-snug text-foreground">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary">
            {post.title}
          </Link>
        </h2>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>

        <div className="flex items-center justify-between text-xs text-muted-foreground/80">
          <span>{formatDate(post.date, locale)}</span>
          <Link href={`/blog/${post.slug}`} className="font-medium text-primary hover:underline">
            {readMore} →
          </Link>
        </div>
      </div>
    </article>
  );
}
