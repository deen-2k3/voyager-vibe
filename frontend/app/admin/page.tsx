"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { adminFetch } from "@/lib/adminApi";

export default function AdminDashboardPage() {
  const [destinationCount, setDestinationCount] = useState<number | null>(null);
  const [enquiryCount, setEnquiryCount] = useState<number | null>(null);

  useEffect(() => {
    adminFetch("/api/destinations")
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => setDestinationCount(Array.isArray(data) ? data.length : 0));

    adminFetch("/api/contact")
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => setEnquiryCount(Array.isArray(data) ? data.length : 0));
  }, []);

  return (
    <div>
      <h1 className="font-serif text-2xl font-bold text-ink">Dashboard</h1>
      <p className="mt-1 text-sm text-ink-muted">A quick overview of the site.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-border-soft bg-white p-6 shadow-sm">
          <p className="text-sm text-ink-muted">Destinations live</p>
          <p className="mt-1 font-serif text-3xl font-bold text-crimson">
            {destinationCount ?? "—"}
          </p>
          <Link
            href="/admin/destinations/new"
            className="mt-4 inline-block text-sm font-semibold text-forest [@media(hover:hover)]:hover:text-crimson"
          >
            Add a destination →
          </Link>
        </div>

        <div className="rounded-2xl border border-border-soft bg-white p-6 shadow-sm">
          <p className="text-sm text-ink-muted">Contact enquiries</p>
          <p className="mt-1 font-serif text-3xl font-bold text-crimson">
            {enquiryCount ?? "—"}
          </p>
          <Link
            href="/admin/enquiries"
            className="mt-4 inline-block text-sm font-semibold text-forest [@media(hover:hover)]:hover:text-crimson"
          >
            View enquiries →
          </Link>
        </div>
      </div>
    </div>
  );
}
