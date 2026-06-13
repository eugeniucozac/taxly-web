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
    <article className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-3 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-sky-50 px-2.5 py-0.5 text-xs font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <h2 className="mb-2 text-lg font-semibold leading-snug text-gray-900 dark:text-white">
        <Link
          href={`/blog/${post.slug}`}
          className="hover:text-sky-600 dark:hover:text-sky-400"
        >
          {post.title}
        </Link>
      </h2>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
        <span>{formatDate(post.date, locale)}</span>
        <Link
          href={`/blog/${post.slug}`}
          className="font-medium text-sky-600 hover:underline dark:text-sky-400"
        >
          {readMore} →
        </Link>
      </div>
    </article>
  );
}
