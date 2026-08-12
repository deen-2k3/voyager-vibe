import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/api";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-2xl border border-border-soft bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h3 className="mt-2 font-serif text-lg font-semibold text-ink">{post.title}</h3>
        <p className="mt-2 text-sm text-ink-muted">{post.excerpt}</p>
        <span className="mt-3 inline-block text-sm font-semibold text-crimson">Read more →</span>
      </div>
    </Link>
  );
}
