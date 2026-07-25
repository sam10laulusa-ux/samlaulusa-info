import { Link } from "react-router";
import { Eyebrow, Reveal, Tag } from "@/components/ui-primitives";
import { education, longBio, shortBio, skillGroups } from "@/data/content";

export default function About() {
  return (
    <>
      <section className="container-x pt-32 md:pt-40">
        <Reveal>
          <Eyebrow index="01">About</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-light leading-tight md:text-6xl">
            Structured professional. <span className="text-ember">Creative builder.</span>
          </h1>
        </Reveal>
      </section>

      <section className="container-x grid gap-12 py-16 lg:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-lg border border-border">
            <img src="/assets/portrait.jpg" alt="Portrait of Sam Laulusa" className="aspect-[3/4] w-full object-cover" />
          </div>
        </Reveal>
        <div className="space-y-6">
          {longBio.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-lg leading-relaxed text-muted-foreground first:text-foreground">{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="rule bg-ink-2">
        <div className="container-x py-20">
          <Reveal>
            <Eyebrow index="02">Short bio</Eyebrow>
            <p className="mt-2 text-sm text-muted-foreground">Written in the third person. Use it for social profiles and introductions — just copy and paste.</p>
          <p className="mt-6 text-sm text-muted-foreground">
            Outside of work, I am usually behind a camera. Photography is my hobby and a growing part of my creative work.{" "}
            <Link to="/photography" className="text-ember underline underline-offset-4">
              See my photography →
            </Link>
          </p>
          </Reveal>
          <Reveal delay={0.05}>
            <blockquote className="mt-8 max-w-3xl border-l-2 border-ember pl-6 font-display text-2xl font-light leading-relaxed">
              {shortBio}
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="rule">
        <div className="container-x py-20">
          <Reveal>
            <Eyebrow index="03">Skills</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-light md:text-4xl">Skills by category</h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {skillGroups.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.05}>
                <h3 className="font-mono2 text-xs uppercase tracking-[0.22em] text-ember">{g.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="rule">
        <div className="container-x py-20">
          <Reveal>
            <Eyebrow index="04">Education & certifications</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-8 rounded-lg border border-border bg-ink-2 p-8 md:p-10">
              <h3 className="font-display text-2xl md:text-3xl">{education.degree}</h3>
              <p className="mt-2 text-muted-foreground">{education.school}</p>
              <p className="mt-1 font-mono2 text-xs uppercase tracking-[0.18em] text-ember">{education.expected}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {education.certificates.map((c) => (
                  <Tag key={c}>Certificate · {c}</Tag>
                ))}
                {education.technical.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
                <Tag>More certifications coming</Tag>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
