import { Link } from "@/i18n/navigation";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "../lib/blog";

interface BlogPostCardProps {
  post: BlogPost;
  locale: string;
  readMore: string;
}

export function BlogPostCard({ post, locale, readMore }: BlogPostCardProps) {
  return (
    <article className="flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-3 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
 className="rounded-full bg-sky-50 dark:bg-sky-500/10 px-2.5 py-0.5 text-xs font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <h2 className="mb-2 text-lg font-semibold leading-snug text-foreground">
        <Link
          href={`/blog/${post.slug}`}
 className="hover:text-primary dark:hover:text-sky-400"
        >
          {post.title}
        </Link>
      </h2>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between text-xs text-muted-foreground/80">
        <span>{formatDate(post.date, locale)}</span>
        <Link
          href={`/blog/${post.slug}`}
 className="font-medium text-primary hover:underline dark:text-sky-400"
        >
          {readMore} →
        </Link>
      </div>
    </article>
  );
}
