"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { adminFetch } from "@/lib/adminApi";
import type { Destination } from "@/lib/api";

export default function AdminDestinationsListPage() {
  const [destinations, setDestinations] = useState<Destination[] | null>(null);
  const [error, setError] = useState("");
  const [deletingSlug, setDeletingSlug] = useState<string | null>(null);

  useEffect(() => {
    load();
  }, []);

  function load() {
    adminFetch("/api/destinations")
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to load destinations");
        return res.json();
      })
      .then((data) => setDestinations(data))
      .catch(() => setError("Could not load destinations."));
  }

  async function handleDelete(slug: string, name: string) {
    if (!window.confirm(`Delete "${name}"? This can't be undone.`)) return;

    setDeletingSlug(slug);
    try {
      const res = await adminFetch(`/api/destinations/${slug}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      setDestinations((prev) => (prev ? prev.filter((d) => d.slug !== slug) : prev));
    } catch {
      setError(`Could not delete "${name}".`);
    } finally {
      setDeletingSlug(null);
    }
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl font-bold text-ink">Destinations</h1>
          <p className="mt-1 text-sm text-ink-muted">
            {destinations ? `${destinations.length} live on the site` : "Loading…"}
          </p>
        </div>
        <Link
          href="/admin/destinations/new"
          className="cursor-pointer rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 [@media(hover:hover)]:hover:bg-crimson-dark"
        >
          + Add Destination
        </Link>
      </div>

      {error ? <p className="mt-6 text-sm text-crimson">{error}</p> : null}

      {destinations ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <div
              key={d.slug}
              className="overflow-hidden rounded-2xl border border-border-soft bg-white shadow-sm"
            >
              <div className="relative h-36 w-full">
                <Image src={d.image} alt={d.name} fill className="object-cover" sizes="400px" />
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-forest">
                  {d.region}
                </p>
                <h3 className="mt-1 font-serif text-base font-semibold text-ink">{d.name}</h3>
                <div className="mt-3 flex items-center gap-3">
                  <Link
                    href={`/admin/destinations/${d.slug}/edit`}
                    className="cursor-pointer text-sm font-semibold text-forest [@media(hover:hover)]:hover:text-crimson"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(d.slug, d.name)}
                    disabled={deletingSlug === d.slug}
                    className="cursor-pointer text-sm font-semibold text-crimson disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {deletingSlug === d.slug ? "Deleting…" : "Delete"}
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
