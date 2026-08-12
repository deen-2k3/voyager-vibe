// Frontend and API share one process now. Server-side fetches (SSR) need an
// absolute URL, so loop back to our own port; client-side fetches can be relative.
const API_BASE =
  typeof window === "undefined" ? `http://127.0.0.1:${process.env.PORT || 3000}` : "";

export type Destination = {
  slug: string;
  name: string;
  region: string;
  image: string;
  gallery?: string[];
  tagline: string;
  description: string;
  rating: number;
  bestSeason: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  image: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: string;
};

async function getJson<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Request to ${path} failed with ${res.status}`);
  return res.json();
}

export const api = {
  destinations: () => getJson<Destination[]>("/api/destinations"),
  destination: (slug: string) => getJson<Destination>(`/api/destinations/${slug}`),
  blogs: () => getJson<BlogPost[]>("/api/blogs"),
  blog: (slug: string) => getJson<BlogPost>(`/api/blogs/${slug}`),
  services: () => getJson<Service[]>("/api/services"),
};
