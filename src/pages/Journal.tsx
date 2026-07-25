import { Eyebrow, Reveal, Tag } from "@/components/ui-primitives";
import { journalTopics } from "@/data/content";

export default function Journal() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col justify-center pb-24 pt-32 md:pt-40">
      <Reveal>
        <Eyebrow index="01">Journal</Eyebrow>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-light leading-tight md:text-6xl">
          Writing, coming soon<span className="text-ember">.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          I will write here about the work I do. The page goes live when I have something worth reading.
        </p>
        <div className="mt-8 flex max-w-2xl flex-wrap gap-2">
          {journalTopics.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
