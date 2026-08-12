"use client";

import { FormEvent, useState } from "react";
import { adminFetch } from "@/lib/adminApi";
import ImageUploader from "@/components/admin/ImageUploader";

type Status = "idle" | "loading" | "success" | "error";

export default function NewDestinationPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [createdSlug, setCreatedSlug] = useState("");
  const [images, setImages] = useState<string[]>([]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (images.length === 0) {
      setStatus("error");
      setErrorMessage("Upload at least one photo.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const [image, ...gallery] = images;

    try {
      const res = await adminFetch("/api/destinations", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          region: formData.get("region"),
          image,
          gallery: gallery.length > 0 ? images : undefined,
          tagline: formData.get("tagline"),
          description: formData.get("description"),
          rating: Number(formData.get("rating")),
          bestSeason: formData.get("bestSeason"),
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
      <h1 className="font-serif text-2xl font-bold text-ink">Add Destination</h1>
      <p className="mt-1 text-sm text-ink-muted">
        Upload up to 10 photos. The first one becomes the cover image shown on cards.
      </p>

      {status === "success" ? (
        <div className="mt-6 rounded-xl bg-forest/10 p-4 text-sm text-forest">
          Destination added{createdSlug ? ` (slug: ${createdSlug})` : ""}. It&apos;s now live on
          the site.
        </div>
      ) : null}

      <form
        onSubmit={handleSubmit}
        className="mt-6 max-w-xl space-y-4 rounded-2xl border border-border-soft bg-white p-6 shadow-sm"
      >
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Destination name
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="e.g. Paris, France"
            className="mt-1 w-full rounded-lg border border-border-soft px-3 py-2 text-sm focus:border-crimson focus:outline-none"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="region" className="text-sm font-medium text-ink">
              Region
            </label>
            <input
              id="region"
              name="region"
              required
              placeholder="e.g. Europe"
              className="mt-1 w-full rounded-lg border border-border-soft px-3 py-2 text-sm focus:border-crimson focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="bestSeason" className="text-sm font-medium text-ink">
              Best season
            </label>
            <input
              id="bestSeason"
              name="bestSeason"
              required
              placeholder="e.g. Apr – Jun"
              className="mt-1 w-full rounded-lg border border-border-soft px-3 py-2 text-sm focus:border-crimson focus:outline-none"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-ink">Photos</p>
          <div className="mt-1">
            <ImageUploader images={images} onChange={setImages} />
          </div>
        </div>

        <div>
          <label htmlFor="tagline" className="text-sm font-medium text-ink">
            Tagline
          </label>
          <input
            id="tagline"
            name="tagline"
            required
            placeholder="Short, punchy line under the destination name"
            className="mt-1 w-full rounded-lg border border-border-soft px-3 py-2 text-sm focus:border-crimson focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="description" className="text-sm font-medium text-ink">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            className="mt-1 w-full rounded-lg border border-border-soft px-3 py-2 text-sm focus:border-crimson focus:outline-none"
          />
        </div>

        <div className="w-40">
          <label htmlFor="rating" className="text-sm font-medium text-ink">
            Rating (1–5)
          </label>
          <input
            id="rating"
            name="rating"
            type="number"
            min="1"
            max="5"
            step="0.1"
            defaultValue="4.8"
            required
            className="mt-1 w-full rounded-lg border border-border-soft px-3 py-2 text-sm focus:border-crimson focus:outline-none"
          />
        </div>

        {status === "error" ? <p className="text-sm text-crimson">{errorMessage}</p> : null}

        <button
          type="submit"
          disabled={status === "loading"}
          className="cursor-pointer rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 [@media(hover:hover)]:hover:bg-crimson-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Saving…" : "Add Destination"}
        </button>
      </form>
    </div>
  );
}
