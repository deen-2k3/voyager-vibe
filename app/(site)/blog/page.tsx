import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import BlogCard from "@/components/BlogCard";
import Reveal from "@/components/Reveal";
import { api } from "@/lib/api";

export const metadata: Metadata = { title: "Blog | Voyager Vibe" };

// Reads blogs.json directly at request time so admin panel edits show up
// without a rebuild — force-dynamic since there's no fetch() call left
// for Next to infer that from.
export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await api.blogs();

  return (
    <>
      <PageHeader
        eyebrow="From the Field"
        title="Travel Journal"
        description="Guides, packing lists, and tips from the planners who've been there."
      />
      <section className="py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 90}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
