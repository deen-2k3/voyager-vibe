// Always called from the browser, so relative paths are fine — same origin as the API now.
const API_BASE = "";
const STORAGE_KEY = "voyager_admin_token";

export function getAdminToken(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(STORAGE_KEY);
}

export function setAdminToken(token: string) {
  sessionStorage.setItem(STORAGE_KEY, token);
}

export function clearAdminToken() {
  sessionStorage.removeItem(STORAGE_KEY);
}

export async function adminFetch(path: string, options: RequestInit = {}) {
  const token = getAdminToken();
  const headers: Record<string, string> = {
    "x-admin-token": token || "",
    ...(options.headers as Record<string, string> | undefined),
  };
  // Let the browser set the multipart boundary itself for FormData bodies.
  if (options.body && !(options.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  return fetch(`${API_BASE}${path}`, { ...options, headers });
}

export type ContactSubmission = {
  name: string;
  email: string;
  phone: string;
  subject: string | null;
  message: string;
  createdAt: string;
};

export type FeedbackSubmission = {
  id: string;
  name: string;
  email: string;
  rating: number;
  message: string | null;
  createdAt: string;
};

export type DestinationInput = {
  name: string;
  region: string;
  image: string;
  gallery?: string[];
  tagline: string;
  description: string;
  rating: number;
  bestSeason: string;
};
