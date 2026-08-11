import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Container from "@/components/Container";
import { api } from "@/lib/api";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await api.blog(slug);
    return { title: `${post.title} | Voyager Vibe` };
  } catch {
    return { title: "Blog | Voyager Vibe" };
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = await api.blog(slug);
  } catch {
    notFound();
  }

  return (
    <article className="py-16">
      <Container maxWidth="3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-crimson">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {post.author}
        </p>
        <h1 className="mt-3 font-serif text-3xl font-bold text-ink sm:text-4xl">{post.title}</h1>

        <div className="relative mt-8 h-72 w-full overflow-hidden rounded-2xl sm:h-96">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        </div>

        <p className="mt-8 whitespace-pre-line text-base leading-relaxed text-ink-muted">
          {post.content}
        </p>
      </Container>
    </article>
  );
}
