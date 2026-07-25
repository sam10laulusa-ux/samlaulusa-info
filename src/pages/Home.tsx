import { Link } from "react-router";
import { motion, useReducedMotion } from "framer-motion";
import { CTAButton, Eyebrow, ProjectThumb, Reveal, Tag, ArrowLink } from "@/components/ui-primitives";
import { person, projects, ventures } from "@/data/content";

const pillars = [
  {
    n: "01",
    title: "Communications & Leadership",
    body: "I manage HOA communities, run board meetings, and coordinate vendors and projects. Clear communication keeps everything moving.",
  },
  {
    n: "02",
    title: "Graphic Design & Branding",
    body: "Logos, brand systems, layouts, and apparel. I design in Illustrator, Photoshop, and Canva for leagues, brands, and my own companies.",
  },
  {
    n: "03",
    title: "Sports Marketing",
    body: "I lead marketing and design for Utah Rugby League. Branding, social media, sponsor materials, events, and recruitment.",
  },
  {
    n: "04",
    title: "Entrepreneurship & Product",
    body: "I founded Makaia Sportswear and I am building Sina HQ. I take ideas from concept to brand, product, and sales.",
  },
];

function Hero() {
  const reduce = useReducedMotion();
  const anim = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
        };
  return (
    <section className="container-x grid gap-12 pb-20 pt-32 md:pt-40 lg:grid-cols-[1.35fr_1fr] lg:items-end">
      <div>
        <motion.p {...anim(0)} className="eyebrow">
          {person.location} · Portfolio
        </motion.p>
        <motion.h1 {...anim(0.08)} className="mt-6 font-display text-5xl font-light leading-[1.05] tracking-tight text-balance md:text-7xl">
          I build software, create brands, and solve{" "}
          <em className="not-italic text-ember">real-world problems</em>.
        </motion.h1>
        <motion.p {...anim(0.16)} className="mt-6 font-mono2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
          {person.roles.join("  ·  ")}
        </motion.p>
        <motion.p {...anim(0.22)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          I'm Sam Laulusa. I manage HOA communities in Utah. I design brands and run marketing for Utah Rugby League.
          I also founded Makaia Sportswear, a custom apparel company.
        </motion.p>
        <motion.div {...anim(0.3)} className="mt-10 flex flex-wrap gap-4">
          <CTAButton to="/portfolio">View My Work</CTAButton>
          <CTAButton to="/resume" variant="ghost">
            View Résumé
          </CTAButton>
          <CTAButton to="/contact" variant="ghost">
            Contact Me
          </CTAButton>
        </motion.div>
      </div>
      <motion.div {...anim(0.25)}>
        <div className="grain relative overflow-hidden rounded-lg border border-border">
          <img
            src="/assets/portrait.jpg"
            alt="Portrait of Sam Laulusa"
            className="aspect-[3/4] w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,hsl(var(--ink)/0.25),transparent_40%)]" />
        </div>
      </motion.div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="rule">
      <div className="container-x py-20">
        <Reveal>
          <Eyebrow index="01">What I do</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-light md:text-4xl">
            Areas of expertise.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06} className="group bg-ink-2 p-8 transition-colors duration-300 hover:bg-ink-3 md:p-10">
              <p className="font-mono2 text-xs text-ember">{p.n}</p>
              <h3 className="mt-4 font-display text-2xl">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Featured() {
  const featured = projects.filter((p) => p.featured);
  return (
    <section className="rule">
      <div className="container-x py-20">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <Eyebrow index="02">Featured work</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-light md:text-4xl">Selected projects</h2>
          </div>
          <ArrowLink to="/portfolio">Full portfolio</ArrowLink>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08}>
              <Link to={`/portfolio/${p.slug}`} className="group block">
                <div className="overflow-hidden rounded-lg">
                  <div className="transition-transform duration-500 group-hover:scale-[1.02]">
                    <ProjectThumb image={p.heroImage} title={p.title} />
                  </div>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl transition-colors group-hover:text-ember">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.role}</p>
                  </div>
                  {p.status && (
                    <span className="mt-1 shrink-0 rounded-full border border-ember/40 px-3 py-1 font-mono2 text-[10px] uppercase tracking-[0.16em] text-ember">
                      {p.status}
                    </span>
                  )}
                </div>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.category.map((c) => (
                    <Tag key={c}>{c}</Tag>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function VentureStrip() {
  return (
    <section className="rule bg-ink-2">
      <div className="container-x py-20">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <Eyebrow index="03">Ventures</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-light md:text-4xl">What I'm building</h2>
          </div>
          <ArrowLink to="/ventures">All ventures</ArrowLink>
        </Reveal>
        <div className="mt-12 divide-y divide-border border-y border-border">
          {ventures.map((v, i) => (
            <Reveal key={v.name} delay={i * 0.06}>
              <div className="group flex flex-col gap-3 py-8 md:flex-row md:items-center md:justify-between">
                <div className="flex items-baseline gap-5">
                  <span className="font-mono2 text-xs text-ember">0{i + 1}</span>
                  <h3 className="font-display text-2xl md:text-3xl">{v.name}</h3>
                </div>
                <div className="flex items-center gap-6">
                  <p className="max-w-md text-sm text-muted-foreground">{v.tags.join(" · ")}</p>
                  <span className="font-mono2 text-[10px] uppercase tracking-[0.16em] text-ochre">{v.status}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="rule">
      <div className="container-x py-24 text-center">
        <Reveal>
          <p className="eyebrow justify-center">Get in touch</p>
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-light leading-tight md:text-5xl">
            Have a project or a role in mind? <span className="text-ember">Let's talk.</span>
          </h2>
          <div className="mt-10 flex justify-center gap-4">
            <CTAButton to="/contact">Contact Me</CTAButton>
            <CTAButton to="/resume" variant="ghost">
              View Résumé
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <Featured />
      <VentureStrip />
      <ClosingCTA />
    </>
  );
}
