import { Eyebrow, Reveal, Tag } from "@/components/ui-primitives";
import { experience } from "@/data/content";

const kindLabel: Record<string, string> = {
  professional: "Professional",
  leadership: "Leadership & Entrepreneurship",
  service: "Service",
};

export default function Experience() {
  return (
    <section className="container-x pb-24 pt-32 md:pt-40">
      <Reveal>
        <Eyebrow index="01">Experience</Eyebrow>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-light leading-tight md:text-6xl">My work history, start to present.</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Professional jobs, leadership roles, and service. Everything below comes from my résumé.
        </p>
      </Reveal>

      <div className="relative mt-16">
        <div className="absolute bottom-0 left-[7px] top-0 w-px bg-border md:left-1/2" aria-hidden />
        <div className="space-y-14">
          {experience.map((e, i) => (
            <Reveal key={e.org + e.role} delay={0.03 * i}>
              <div className={`relative grid gap-6 pl-8 md:grid-cols-2 md:gap-16 md:pl-0`}>
                <span className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-ember bg-background md:left-1/2 md:-translate-x-1/2" aria-hidden />
                <div className={i % 2 === 0 ? "md:pr-16 md:text-right" : "md:order-2 md:pl-16"}>
                  <p className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-ember">{kindLabel[e.kind]}</p>
                  <h2 className="mt-2 font-display text-2xl md:text-3xl">{e.role}</h2>
                  <p className="mt-1 text-muted-foreground">{e.org}</p>
                  <p className="mt-2 font-mono2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {e.dates}
                    {e.location ? ` · ${e.location}` : ""}
                  </p>
                </div>
                <div className={i % 2 === 0 ? "md:order-2 md:pl-16" : "md:pr-16"}>
                  <p className="leading-relaxed text-muted-foreground">{e.summary}</p>
                  {e.responsibilities.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {e.responsibilities.map((r, j) => (
                        <li key={j} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember" aria-hidden />
                          {r}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.skills.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
