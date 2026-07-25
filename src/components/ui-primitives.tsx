import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Link } from "react-router";

export function Reveal({
  children,
  delay = 0,
  className,
  y = 28,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children, index }: { children: ReactNode; index?: string }) {
  return (
    <p className="eyebrow flex items-center gap-3">
      {index && <span className="text-ember">{index}</span>}
      <span className="h-px w-8 bg-ember/60" aria-hidden />
      {children}
    </p>
  );
}

export function PlaceholderImage({
  label,
  ratio = "aspect-[4/3]",
  className = "",
}: {
  label: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={`grain relative flex ${ratio} w-full items-center justify-center overflow-hidden rounded-lg border border-dashed border-border bg-ink-2 ${className}`}
      role="img"
      aria-label={`Placeholder image: ${label}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_20%_0%,hsl(var(--ember)/0.08),transparent_60%)]" />
      <div className="relative px-6 text-center">
        <p className="font-mono2 text-[10px] uppercase tracking-[0.3em] text-ember">Coming soon</p>
        <p className="mt-2 font-display text-lg text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}

export function ProjectThumb({ image, title, ratio = "aspect-[16/10]" }: { image?: string; title: string; ratio?: string }) {
  if (!image) return <PlaceholderImage label={title} ratio={ratio} />;
  const isLogo = image.endsWith(".png");
  return (
    <div className={`flex ${ratio} w-full items-center justify-center overflow-hidden rounded-lg border border-border ${isLogo ? "bg-ink-2 p-10" : ""}`}>
      <img
        src={image}
        alt={title}
        className={isLogo ? "max-h-full max-w-full object-contain" : "h-full w-full object-cover"}
        loading="lazy"
      />
    </div>
  );
}

export function ArrowLink({ to, children, dark = false }: { to: string; children: ReactNode; dark?: boolean }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 font-mono2 text-xs uppercase tracking-[0.2em] transition-colors ${
        dark ? "text-ink" : "text-foreground hover:text-ember"
      }`}
    >
      <span className="border-b border-current pb-0.5">{children}</span>
      <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
        →
      </span>
    </Link>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border px-3 py-1 font-mono2 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
      {children}
    </span>
  );
}

export function CTAButton({
  to,
  children,
  variant = "primary",
  href,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-ember text-[hsl(var(--ink))] hover:bg-ember-deep hover:text-bone"
      : "border border-border text-foreground hover:border-ember hover:text-ember";
  if (href)
    return (
      <a href={href} className={`${base} ${styles}`}>
        {children}
      </a>
    );
  return (
    <Link to={to!} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
