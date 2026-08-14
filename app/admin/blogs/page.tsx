"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { adminFetch } from "@/lib/adminApi";
import type { BlogPost } from "@/lib/api";

export default function AdminBlogsListPage() {
  const [posts, setPosts] = useState<BlogPost[] | null>(null);
  const [error, setError] = useState("");
  const [deletingSlug, setDeletingSlug] = useState<string | null>(null);

  useEffect(() => {
    load();
  }, []);

  function load() {
    adminFetch("/api/blogs")
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to load blog posts");
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch(() => setError("Could not load blog posts."));
  }

  async function handleDelete(slug: string, title: string) {
    if (!window.confirm(`Delete "${title}"? This can't be undone.`)) return;

    setDeletingSlug(slug);
    try {
      const res = await adminFetch(`/api/blogs/${slug}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      setPosts((prev) => (prev ? prev.filter((p) => p.slug !== slug) : prev));
    } catch {
      setError(`Could not delete "${title}".`);
    } finally {
      setDeletingSlug(null);
    }
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl font-bold text-ink">Blog Posts</h1>
          <p className="mt-1 text-sm text-ink-muted">
            {posts ? `${posts.length} live on the site` : "Loading…"}
          </p>
        </div>
        <Link
          href="/admin/blogs/new"
          className="cursor-pointer rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 [@media(hover:hover)]:hover:bg-crimson-dark"
        >
          + Add Blog Post
        </Link>
      </div>

      {error ? <p className="mt-6 text-sm text-crimson">{error}</p> : null}

      {posts ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <div
              key={p.slug}
              className="overflow-hidden rounded-2xl border border-border-soft bg-white shadow-sm"
            >
              <div className="relative h-36 w-full">
                <Image src={p.image} alt={p.title} fill className="object-cover" sizes="400px" />
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-forest">
                  {p.author} · {new Date(p.date).toLocaleDateString("en-US", { dateStyle: "medium" })}
                </p>
                <h3 className="mt-1 font-serif text-base font-semibold text-ink">{p.title}</h3>
                <div className="mt-3 flex items-center gap-3">
                  <Link
                    href={`/admin/blogs/${p.slug}/edit`}
                    className="cursor-pointer text-sm font-semibold text-forest [@media(hover:hover)]:hover:text-crimson"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(p.slug, p.title)}
                    disabled={deletingSlug === p.slug}
                    className="cursor-pointer text-sm font-semibold text-crimson disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {deletingSlug === p.slug ? "Deleting…" : "Delete"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
