"use client";

import { FormEvent, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { adminFetch } from "@/lib/adminApi";
import ImageUploader from "@/components/admin/ImageUploader";
import type { BlogPost } from "@/lib/api";

type Status = "loading" | "ready" | "saving" | "error" | "not-found";

export default function EditBlogPostPage() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();

  const [status, setStatus] = useState<Status>("loading");
  const [errorMessage, setErrorMessage] = useState("");
  const [post, setPost] = useState<BlogPost | null>(null);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    adminFetch(`/api/blogs/${params.slug}`)
      .then(async (res) => {
        if (res.status === 404) {
          setStatus("not-found");
          return null;
        }
        if (!res.ok) throw new Error("Failed to load blog post");
        return res.json();
      })
      .then((data: BlogPost | null) => {
        if (!data) return;
        setPost(data);
        setImages([data.image]);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, [params.slug]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (images.length === 0) {
      setErrorMessage("Keep a cover photo.");
      return;
    }

    setStatus("saving");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await adminFetch(`/api/blogs/${params.slug}`, {
        method: "PUT",
        body: JSON.stringify({
          title: formData.get("title"),
          image: images[0],
          author: formData.get("author"),
          date: formData.get("date"),
          excerpt: formData.get("excerpt"),
          content: formData.get("content"),
        }),
      });

      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || "Something went wrong");

      router.push("/admin/blogs");
    } catch (err) {
      setStatus("ready");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  async function handleDelete() {
    if (!post) return;
    if (!window.confirm(`Delete "${post.title}"? This can't be undone.`)) return;

    try {
      const res = await adminFetch(`/api/blogs/${params.slug}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      router.push("/admin/blogs");
    } catch {
      setErrorMessage("Could not delete this post.");
    }
  }

  if (status === "loading") {
    return <p className="text-sm text-ink-muted">Loading…</p>;
  }

  if (status === "not-found") {
    return <p className="text-sm text-crimson">Blog post not found.</p>;
  }

  if (status === "error" || !post) {
    return <p className="text-sm text-crimson">Could not load this blog post.</p>;
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-serif text-2xl font-bold text-ink">Edit {post.title}</h1>
        <button
          type="button"
          onClick={handleDelete}
          className="cursor-pointer rounded-full border border-crimson px-5 py-2 text-sm font-semibold text-crimson transition-colors duration-200 [@media(hover:hover)]:hover:bg-crimson [@media(hover:hover)]:hover:text-white"
        >
          Delete Post
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-6 max-w-xl space-y-4 rounded-2xl border border-border-soft bg-white p-6 shadow-sm"
      >
        <div>
          <label htmlFor="title" className="text-sm font-medium text-ink">
            Title
          </label>
          <input
            id="title"
            name="title"
            required
            defaultValue={post.title}
            className="mt-1 w-full rounded-lg border border-border-soft px-3 py-2 text-sm focus:border-crimson focus:outline-none"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="author" className="text-sm font-medium text-ink">
              Author
            </label>
            <input
              id="author"
              name="author"
              required
              defaultValue={post.author}
              className="mt-1 w-full rounded-lg border border-border-soft px-3 py-2 text-sm focus:border-crimson focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="date" className="text-sm font-medium text-ink">
              Publish date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              required
              defaultValue={post.date}
              className="mt-1 w-full rounded-lg border border-border-soft px-3 py-2 text-sm focus:border-crimson focus:outline-none"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-ink">Cover photo</p>
          <div className="mt-1">
            <ImageUploader images={images} onChange={setImages} max={1} />
          </div>
        </div>

        <div>
          <label htmlFor="excerpt" className="text-sm font-medium text-ink">
            Excerpt
          </label>
          <textarea
            id="excerpt"
            name="excerpt"
            required
            rows={2}
            defaultValue={post.excerpt}
            className="mt-1 w-full rounded-lg border border-border-soft px-3 py-2 text-sm focus:border-crimson focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="content" className="text-sm font-medium text-ink">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            required
            rows={10}
            defaultValue={post.content}
            className="mt-1 w-full rounded-lg border border-border-soft px-3 py-2 text-sm focus:border-crimson focus:outline-none"
          />
        </div>

        {errorMessage ? <p className="text-sm text-crimson">{errorMessage}</p> : null}

        <button
          type="submit"
          disabled={status === "saving"}
          className="cursor-pointer rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 [@media(hover:hover)]:hover:bg-crimson-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "saving" ? "Saving…" : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
