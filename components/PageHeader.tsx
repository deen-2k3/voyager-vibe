import Container from "./Container";

export default function PageHeader({ eyebrow, title, description }: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border-soft bg-forest-dark py-16 text-white">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-light">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">{title}</h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-white/75">{description}</p>
        ) : null}
      </Container>
    </section>
  );
}
