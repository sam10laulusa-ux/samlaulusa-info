import { CTAButton, Eyebrow, Reveal, Tag } from "@/components/ui-primitives";
import { coreCompetencies, education, experience, person } from "@/data/content";

export default function Resume() {
  return (
    <section className="container-x pb-24 pt-32 md:pt-40">
      <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Eyebrow index="01">Résumé</Eyebrow>
          <h1 className="mt-6 font-display text-4xl font-light leading-tight md:text-6xl">Sam Laulusa</h1>
          <p className="mt-3 font-mono2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {person.location} · {person.email}
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <CTAButton href="/sam-laulusa-resume.pdf">Download Résumé</CTAButton>
          <CTAButton to="/resume/print" variant="ghost">
            Print-friendly version
          </CTAButton>
        </div>
      </Reveal>

      <div className="mt-16 space-y-16">
        <Reveal>
          <Eyebrow index="02">Professional summary</Eyebrow>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-muted-foreground">
            I am a communications, marketing, and community management professional. I manage homeowner associations, coordinate
            vendors and projects, prepare board communications, and support financial and operational decisions. I serve on the
            Utah Rugby League Board of Directors as Marketing and Design Lead. I founded Makaia Sportswear, where I handle product
            development, supplier coordination, pricing, sales, and brand growth.
          </p>
        </Reveal>

        <Reveal>
          <Eyebrow index="03">Core competencies</Eyebrow>
          <div className="mt-6 flex max-w-4xl flex-wrap gap-2">
            {coreCompetencies.map((c) => (
              <Tag key={c}>{c}</Tag>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <Eyebrow index="04">Experience & leadership</Eyebrow>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {experience.map((e) => (
              <div key={e.org + e.role} className="grid gap-3 py-8 md:grid-cols-[220px_1fr]">
                <p className="font-mono2 text-xs uppercase tracking-[0.16em] text-muted-foreground">{e.dates}</p>
                <div>
                  <h3 className="font-display text-xl md:text-2xl">{e.role}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {e.org}
                    {e.location ? ` · ${e.location}` : ""}
                  </p>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{e.summary}</p>
                  {e.responsibilities.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {e.responsibilities.map((r, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember" aria-hidden />
                          {r}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <Eyebrow index="05">Education</Eyebrow>
            <div className="mt-6">
              <h3 className="font-display text-xl">{education.degree}</h3>
              <p className="mt-1 text-muted-foreground">{education.school}</p>
              <p className="mt-1 font-mono2 text-xs uppercase tracking-[0.16em] text-ember">{education.expected}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {education.certificates.map((c) => (
                  <Tag key={c}>Certificate · {c}</Tag>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal>
            <Eyebrow index="06">Certifications & technical skills</Eyebrow>
            <div className="mt-6 flex flex-wrap gap-2">
              {education.technical.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
              <Tag>Adobe Illustrator</Tag>
              <Tag>Adobe Photoshop</Tag>
              <Tag>Adobe Lightroom</Tag>
              <Tag>Canva</Tag>
              <Tag>Microsoft Word, PowerPoint, Outlook</Tag>
              <Tag>Instagram, Facebook, LinkedIn, TikTok, X & analytics</Tag>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
