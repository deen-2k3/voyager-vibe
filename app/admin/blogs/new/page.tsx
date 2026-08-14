"use client";

import { FormEvent, useState } from "react";
import { adminFetch } from "@/lib/adminApi";
import ImageUploader from "@/components/admin/ImageUploader";

type Status = "idle" | "loading" | "success" | "error";

export default function NewBlogPostPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [createdSlug, setCreatedSlug] = useState("");
  const [images, setImages] = useState<string[]>([]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (images.length === 0) {
      setStatus("error");
      setErrorMessage("Upload a cover photo.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await adminFetch("/api/blogs", {
        method: "POST",
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

      if (!res.ok) {
        throw new Error(body.error || "Something went wrong");
      }

      setCreatedSlug(body.entry?.slug || "");
      setStatus("success");
      form.reset();
      setImages([]);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <div>
      <h1 className="font-serif text-2xl font-bold text-ink">Add Blog Post</h1>
      <p className="mt-1 text-sm text-ink-muted">Publish a new post to the Voyager Vibe blog.</p>

      {status === "success" ? (
        <div className="mt-6 rounded-xl bg-forest/10 p-4 text-sm text-forest">
          Post published{createdSlug ? ` (slug: ${createdSlug})` : ""}. It&apos;s now live on the
          site.
        </div>
      ) : null}

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
            placeholder="e.g. Packing Light for Mountain Treks"
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
              defaultValue="Voyager Vibe Team"
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
              defaultValue={new Date().toISOString().slice(0, 10)}
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
            placeholder="Short summary shown on the blog listing page"
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
            className="mt-1 w-full rounded-lg border border-border-soft px-3 py-2 text-sm focus:border-crimson focus:outline-none"
          />
        </div>

        {status === "error" ? <p className="text-sm text-crimson">{errorMessage}</p> : null}

        <button
          type="submit"
          disabled={status === "loading"}
          className="cursor-pointer rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 [@media(hover:hover)]:hover:bg-crimson-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Publishing…" : "Publish Post"}
        </button>
      </form>
    </div>
  );
}
