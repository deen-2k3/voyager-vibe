import fs from "fs";
import path from "path";

// This module is only ever used from Server Components (the admin panel uses
// lib/adminApi.ts instead), so we can read the JSON data directly instead of
// looping back over HTTP. A loopback fetch to our own port is unreliable on
// hosts that proxy the public domain through nginx with Host-header routing —
// the loopback request arrives without the right Host header and 404s.
const dataDir = path.join(process.cwd(), "api", "data");

function readJson<T>(filename: string): T {
  const filePath = path.join(dataDir, filename);
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

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

export const api = {
  destinations: async () => readJson<Destination[]>("destinations.json"),
  destination: async (slug: string) => {
    const found = readJson<Destination[]>("destinations.json").find((d) => d.slug === slug);
    if (!found) throw new Error(`Destination ${slug} not found`);
    return found;
  },
  blogs: async () => readJson<BlogPost[]>("blogs.json"),
  blog: async (slug: string) => {
    const found = readJson<BlogPost[]>("blogs.json").find((b) => b.slug === slug);
    if (!found) throw new Error(`Blog post ${slug} not found`);
    return found;
  },
  services: async () => readJson<Service[]>("services.json"),
};
