import { Link, Navigate, useParams } from "react-router";
import { ArrowLink, Eyebrow, PlaceholderImage, Reveal, Tag } from "@/components/ui-primitives";
import { projects } from "@/data/content";

function ProjectMedia({ src, alt, ratio = "aspect-[16/10]" }: { src?: string; alt: string; ratio?: string }) {
  if (!src) return <PlaceholderImage label={alt} ratio={ratio} />;
  const isLogo = src.endsWith(".png");
  return (
    <div className={`flex ${ratio} w-full items-center justify-center overflow-hidden rounded-lg border border-border ${isLogo ? "bg-ink-2 p-10" : ""}`}>
      <img src={src} alt={alt} className={isLogo ? "max-h-full max-w-full object-contain" : "h-full w-full object-cover"} loading="lazy" />
    </div>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <Navigate to="/portfolio" replace />;

  const related = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <article className="pb-24">
      <header className="container-x pt-32 md:pt-40">
        <Reveal>
          <ArrowLink to="/portfolio">← Portfolio</ArrowLink>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.category.map((c) => (
              <Tag key={c}>{c}</Tag>
            ))}
            {project.status && (
              <span className="rounded-full border border-ember/40 px-3 py-1 font-mono2 text-[10px] uppercase tracking-[0.16em] text-ember">
                {project.status}
              </span>
            )}
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-light leading-tight md:text-6xl">{project.title}</h1>
          <p className="mt-4 font-mono2 text-xs uppercase tracking-[0.2em] text-muted-foreground">Role — {project.role}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{project.summary}</p>
          {project.links && (
            <div className="mt-6 flex flex-wrap gap-6">
              {project.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-mono2 text-xs uppercase tracking-[0.2em] text-ember"
                >
                  <span className="border-b border-current pb-0.5">{l.label}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                    ↗
                  </span>
                </a>
              ))}
            </div>
          )}
        </Reveal>
        <Reveal delay={0.15} className="mt-12">
          <ProjectMedia src={project.heroImage} alt={`${project.title} — hero`} ratio="aspect-[21/9]" />
        </Reveal>
        {project.wordmark && (
          <Reveal delay={0.2} className="mt-6">
            <div className="flex flex-col items-center gap-4 rounded-lg border border-border bg-ink-2 px-8 py-14">
              <p className="font-display text-4xl font-light uppercase tracking-[0.5em] md:text-5xl" style={{ textIndent: "0.5em" }}>
                Makaia
              </p>
              <div className="flex items-center gap-5">
                <span className="h-px w-10 bg-muted-foreground" aria-hidden />
                <p className="font-mono2 text-xs uppercase tracking-[0.45em] text-muted-foreground" style={{ textIndent: "0.45em" }}>
                  Sportswear
                </p>
                <span className="h-px w-10 bg-muted-foreground" aria-hidden />
              </div>
            </div>
          </Reveal>
        )}
      </header>

      <div className="container-x mt-20 grid gap-16 lg:grid-cols-[1fr_2fr]">
        <div className="space-y-10">
          <Reveal>
            <Eyebrow>Overview</Eyebrow>
            <p className="mt-4 leading-relaxed text-muted-foreground">{project.overview}</p>
          </Reveal>
          <Reveal>
            <Eyebrow>Deliverables</Eyebrow>
            <ul className="mt-4 space-y-2">
              {project.deliverables.map((d) => (
                <li key={d} className="flex items-center gap-3 text-muted-foreground">
                  <span className="h-1 w-1 rounded-full bg-ember" aria-hidden />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
          {project.results && (
            <Reveal>
              <Eyebrow>Results</Eyebrow>
              <p className="mt-4 leading-relaxed text-muted-foreground">{project.results}</p>
            </Reveal>
          )}
        </div>

        <div className="space-y-12">
          {project.challenge && (
            <Reveal>
              <h2 className="font-display text-3xl font-light">The challenge</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{project.challenge}</p>
            </Reveal>
          )}
          <Reveal>
            <h2 className="font-display text-3xl font-light">The process</h2>
            <ol className="mt-6 space-y-4">
              {project.process.map((step, i) => (
                <li key={i} className="flex gap-5">
                  <span className="font-mono2 text-sm text-ember">{String(i + 1).padStart(2, "0")}</span>
                  <p className="leading-relaxed text-muted-foreground">{step}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          {project.solution && (
            <Reveal>
              <h2 className="font-display text-3xl font-light">The solution</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{project.solution}</p>
            </Reveal>
          )}
        </div>
      </div>

      {project.logoShowcase && (
        <section className="container-x mt-20">
          <Reveal>
            <Eyebrow>Logo & identity design</Eyebrow>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              I designed each of these logos. They are made to work on jerseys, social graphics, and sponsor materials.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {project.logoShowcase.map((logo, i) => (
              <Reveal key={logo.name} delay={i * 0.06}>
                <figure className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-lg border border-border bg-ink-2 p-12 transition-colors hover:border-ember/40 md:p-16">
                  <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_50%_0%,hsl(var(--ember)/0.06),transparent_65%)]" />
                  <img
                    src={logo.src}
                    alt={`${logo.name} logo designed by Sam Laulusa`}
                    className="relative max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 border-t border-border bg-ink-2/80 px-5 py-3 font-mono2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-sm">
                    {logo.name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {(project.gallery || project.comingSoonGallery) && (
      <section className="container-x mt-20">
        <Reveal>
          <Eyebrow>Gallery</Eyebrow>
        </Reveal>
        {project.gallery ? (
          <div className="mt-8 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
            {project.gallery.map((src, i) => (
              <Reveal key={src} delay={i * 0.04}>
                <img
                  src={src}
                  alt={`${project.title} — photo ${i + 1}`}
                  className="w-full rounded-lg border border-border"
                  loading="lazy"
                />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["Asset 01", "Asset 02", "Asset 03"].map((g, i) => (
              <Reveal key={g} delay={i * 0.06}>
                <PlaceholderImage label={`${project.title} — ${g}`} ratio="aspect-square" />
              </Reveal>
            ))}
          </div>
        )}
      </section>
      )}

      {project.note && (
        <p className="container-x mt-6 font-mono2 text-xs uppercase tracking-[0.16em] text-ochre">Note — {project.note}</p>
      )}

      <section className="container-x mt-24">
        <Reveal>
          <Eyebrow>Related projects</Eyebrow>
        </Reveal>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {related.map((r) => (
            <Link key={r.slug} to={`/portfolio/${r.slug}`} className="group flex items-center justify-between gap-6 py-6">
              <div>
                <h3 className="font-display text-xl transition-colors group-hover:text-ember md:text-2xl">{r.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.category.join(" · ")}</p>
              </div>
              <span className="text-ember transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
