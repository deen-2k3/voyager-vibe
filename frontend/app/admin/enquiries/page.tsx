"use client";

import { useEffect, useState } from "react";
import { adminFetch, type ContactSubmission } from "@/lib/adminApi";

export default function EnquiriesPage() {
  const [submissions, setSubmissions] = useState<ContactSubmission[] | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    adminFetch("/api/contact")
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to load enquiries");
        return res.json();
      })
      .then((data) => setSubmissions(data))
      .catch(() => setError("Could not load enquiries."));
  }, []);

  return (
    <div>
      <h1 className="font-serif text-2xl font-bold text-ink">Enquiries</h1>
      <p className="mt-1 text-sm text-ink-muted">
        Messages submitted through the Contact Us form, newest first.
      </p>

      {error ? <p className="mt-6 text-sm text-crimson">{error}</p> : null}

      {submissions === null && !error ? (
        <p className="mt-6 text-sm text-ink-muted">Loading…</p>
      ) : null}

      {submissions && submissions.length === 0 ? (
        <p className="mt-6 text-sm text-ink-muted">No enquiries yet.</p>
      ) : null}

      {submissions && submissions.length > 0 ? (
        <div className="mt-6 space-y-4">
          {submissions.map((s, i) => (
            <div
              key={`${s.email}-${s.createdAt}-${i}`}
              className="rounded-2xl border border-border-soft bg-white p-5 shadow-sm"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-serif text-base font-semibold text-ink">{s.name}</p>
                <p className="text-xs text-ink-muted">
                  {new Date(s.createdAt).toLocaleString("en-US", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </p>
              </div>
              <p className="mt-1 text-sm text-forest">{s.email}</p>
              {s.subject ? (
                <p className="mt-2 text-sm font-semibold text-ink">Subject: {s.subject}</p>
              ) : null}
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.message}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
