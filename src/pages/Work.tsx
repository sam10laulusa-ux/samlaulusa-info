import { useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Eyebrow, ProjectThumb, Reveal, Tag } from "@/components/ui-primitives";
import { projects } from "@/data/content";

const filters = ["All", "Branding", "Graphic Design", "Sports Marketing", "Social Media", "Apparel Design", "Photography", "Product Design", "Professional Communications"];

export default function Work() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category.includes(filter));

  return (
    <section className="container-x pb-24 pt-32 md:pt-40">
      <Reveal>
        <Eyebrow index="01">Portfolio</Eyebrow>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-light leading-tight md:text-6xl">
          Selected projects and case studies.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Branding, sports marketing, social media, apparel, and product work. Use the filters to view one category.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 font-mono2 text-[11px] uppercase tracking-[0.14em] transition-colors ${
                filter === f ? "border-ember bg-ember text-[hsl(var(--ink))]" : "border-border text-muted-foreground hover:border-ember hover:text-ember"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div layout className="mt-12 grid gap-8 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35 }}
            >
              <Link to={`/portfolio/${p.slug}`} className="group block">
                <div className="overflow-hidden rounded-lg">
                  <div className="transition-transform duration-500 group-hover:scale-[1.02]">
                    <ProjectThumb image={p.heroImage ?? p.gallery?.[0]} title={p.title} />
                  </div>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-2xl transition-colors group-hover:text-ember">{p.title}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{p.role}</p>
                  </div>
                  {p.status && (
                    <span className="mt-1 shrink-0 rounded-full border border-ember/40 px-3 py-1 font-mono2 text-[10px] uppercase tracking-[0.16em] text-ember">
                      {p.status}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.category.map((c) => (
                    <Tag key={c}>{c}</Tag>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
