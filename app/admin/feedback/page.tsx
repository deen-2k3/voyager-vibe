"use client";

import { useEffect, useState } from "react";
import { adminFetch, type FeedbackSubmission } from "@/lib/adminApi";
import StarRating from "@/components/StarRating";

export default function FeedbackPage() {
  const [submissions, setSubmissions] = useState<FeedbackSubmission[] | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    adminFetch("/api/feedback")
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to load feedback");
        return res.json();
      })
      .then((data) => setSubmissions(data))
      .catch(() => setError("Could not load feedback."));
  }, []);

  return (
    <div>
      <h1 className="font-serif text-2xl font-bold text-ink">Feedback</h1>
      <p className="mt-1 text-sm text-ink-muted">
        Feedback submitted through the Feedback form, newest first.
      </p>

      {error ? <p className="mt-6 text-sm text-crimson">{error}</p> : null}

      {submissions === null && !error ? (
        <p className="mt-6 text-sm text-ink-muted">Loading…</p>
      ) : null}

      {submissions && submissions.length === 0 ? (
        <p className="mt-6 text-sm text-ink-muted">No feedback yet.</p>
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
              <div className="mt-2">
                <StarRating rating={s.rating} />
              </div>
              {s.message ? (
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.message}</p>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
