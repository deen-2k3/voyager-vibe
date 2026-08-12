"use client";

import { FormEvent, ReactNode, useEffect, useState } from "react";
import { getAdminToken, setAdminToken, adminFetch } from "@/lib/adminApi";

export default function AdminGate({ children }: { children: ReactNode }) {
  const [checked, setChecked] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [tokenInput, setTokenInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const existing = getAdminToken();
    if (existing) {
      verify(existing);
    } else {
      setChecked(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function verify(token: string) {
    setLoading(true);
    setError("");
    try {
      const res = await adminFetch("/api/contact", {
        headers: { "x-admin-token": token },
      });
      if (res.ok) {
        setAdminToken(token);
        setAuthed(true);
      } else {
        setError("Invalid admin token");
        setAuthed(false);
      }
    } catch {
      setError("Could not reach the server");
    } finally {
      setLoading(false);
      setChecked(true);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    verify(tokenInput);
  }

  if (!checked) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center text-sm text-ink-muted">
        Checking access…
      </div>
    );
  }

  if (!authed) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm rounded-2xl border border-border-soft bg-white p-8 shadow-sm"
        >
          <h1 className="font-serif text-xl font-bold text-ink">Admin Access</h1>
          <p className="mt-1 text-sm text-ink-muted">Enter the admin token to continue.</p>
          <input
            type="password"
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
            className="mt-4 w-full rounded-lg border border-border-soft px-3 py-2 text-sm focus:border-crimson focus:outline-none"
            placeholder="Admin token"
            autoFocus
          />
          {error ? <p className="mt-2 text-sm text-crimson">{error}</p> : null}
          <button
            type="submit"
            disabled={loading || !tokenInput}
            className="mt-4 w-full cursor-pointer rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 [@media(hover:hover)]:hover:bg-crimson-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Checking…" : "Enter"}
          </button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
}
