import { Link } from "react-router";
import { CTAButton, Eyebrow, Reveal, Tag } from "@/components/ui-primitives";
import { ventures } from "@/data/content";

export default function Ventures() {
  return (
    <section className="container-x pb-24 pt-32 md:pt-40">
      <Reveal>
        <Eyebrow index="01">Ventures</Eyebrow>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-light leading-tight md:text-6xl">The businesses I'm building.</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Each venture shows its real status: active or in development.
        </p>
      </Reveal>

      <div className="mt-16 space-y-8">
        {ventures.map((v, i) => (
          <Reveal key={v.name} delay={i * 0.06}>
            <article className="group grid gap-8 rounded-lg border border-border bg-ink-2 p-8 transition-colors hover:border-ember/50 md:grid-cols-[auto_1fr_auto] md:items-center md:p-12">
              <p className="font-display text-5xl font-light text-ember/50 md:text-6xl">0{i + 1}</p>
              <div>
                <div className="flex flex-wrap items-center gap-4">
                  <h2 className="font-display text-3xl md:text-4xl">{v.name}</h2>
                  <span className="rounded-full border border-ochre/50 px-3 py-1 font-mono2 text-[10px] uppercase tracking-[0.16em] text-ochre">
                    {v.status}
                  </span>
                </div>
                <p className="mt-1 font-mono2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {v.role} · {v.dates}
                </p>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{v.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {v.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-start gap-3 md:items-end">
                {v.url && (
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono2 text-xs uppercase tracking-[0.2em] text-ember underline-offset-4 hover:underline"
                  >
                    {v.url.replace("https://", "")} ↗
                  </a>
                )}
                {v.urlNote && (
                  <p className="font-mono2 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{v.urlNote}</p>
                )}
                {v.slug && (
                  <Link
                    to={`/portfolio/${v.slug}`}
                    className="font-mono2 text-xs uppercase tracking-[0.2em] text-muted-foreground underline-offset-4 hover:text-ember hover:underline"
                  >
                    Case study →
                  </Link>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-20 text-center">
        <p className="text-lg text-muted-foreground">Want to work with me on one of these?</p>
        <div className="mt-6 flex justify-center">
          <CTAButton to="/contact">Start a conversation</CTAButton>
        </div>
      </Reveal>
    </section>
  );
}
