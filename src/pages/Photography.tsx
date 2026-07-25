import { Eyebrow, Reveal, Tag } from "@/components/ui-primitives";
import { photography } from "@/data/content";

export default function Photography() {
  return (
    <section className="container-x pb-24 pt-32 md:pt-40">
      <Reveal>
        <Eyebrow index="01">Photography</Eyebrow>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-light leading-tight md:text-6xl">
          Life through the lens<span className="text-ember">.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Photography is my creative outlet. I shoot events and personal work. I edit in Adobe Lightroom.
          Below is a selection of my recent photos. More coming soon.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Tag>Event photography</Tag>
          <Tag>Personal work</Tag>
          <Tag>Adobe Lightroom</Tag>
        </div>
      </Reveal>

      <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
        {photography.map((p, i) => (
          <Reveal key={p.src} delay={(i % 3) * 0.05}>
            <figure className="group overflow-hidden rounded-lg border border-border">
              <img
                src={p.src}
                alt={`Photography by Sam Laulusa — ${i + 1}`}
                className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
