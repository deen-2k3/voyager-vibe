"use client";

import { FormEvent, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { adminFetch } from "@/lib/adminApi";
import ImageUploader from "@/components/admin/ImageUploader";
import type { Destination } from "@/lib/api";

type Status = "loading" | "ready" | "saving" | "error" | "not-found";

export default function EditDestinationPage() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();

  const [status, setStatus] = useState<Status>("loading");
  const [errorMessage, setErrorMessage] = useState("");
  const [destination, setDestination] = useState<Destination | null>(null);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    adminFetch(`/api/destinations/${params.slug}`)
      .then(async (res) => {
        if (res.status === 404) {
          setStatus("not-found");
          return null;
        }
        if (!res.ok) throw new Error("Failed to load destination");
        return res.json();
      })
      .then((data: Destination | null) => {
        if (!data) return;
        setDestination(data);
        setImages(data.gallery && data.gallery.length > 0 ? data.gallery : [data.image]);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, [params.slug]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (images.length === 0) {
      setErrorMessage("Keep at least one photo.");
      return;
    }

    setStatus("saving");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const [image, ...gallery] = images;

    try {
      const res = await adminFetch(`/api/destinations/${params.slug}`, {
        method: "PUT",
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
      if (!res.ok) throw new Error(body.error || "Something went wrong");

      router.push("/admin/destinations");
    } catch (err) {
      setStatus("ready");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  async function handleDelete() {
    if (!destination) return;
    if (!window.confirm(`Delete "${destination.name}"? This can't be undone.`)) return;

    try {
      const res = await adminFetch(`/api/destinations/${params.slug}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      router.push("/admin/destinations");
    } catch {
      setErrorMessage("Could not delete this destination.");
    }
  }

  if (status === "loading") {
    return <p className="text-sm text-ink-muted">Loading…</p>;
  }

  if (status === "not-found") {
    return <p className="text-sm text-crimson">Destination not found.</p>;
  }

  if (status === "error" || !destination) {
    return <p className="text-sm text-crimson">Could not load this destination.</p>;
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-serif text-2xl font-bold text-ink">Edit {destination.name}</h1>
        <button
          type="button"
          onClick={handleDelete}
          className="cursor-pointer rounded-full border border-crimson px-5 py-2 text-sm font-semibold text-crimson transition-colors duration-200 [@media(hover:hover)]:hover:bg-crimson [@media(hover:hover)]:hover:text-white"
        >
          Delete Destination
        </button>
      </div>

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
            defaultValue={destination.name}
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
              defaultValue={destination.region}
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
              defaultValue={destination.bestSeason}
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
            defaultValue={destination.tagline}
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
            defaultValue={destination.description}
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
            required
            defaultValue={destination.rating}
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
