import { useEffect } from "react";
import { Link } from "react-router";
import { coreCompetencies, education, experience, person } from "@/data/content";

export default function PrintResume() {
  useEffect(() => {
    document.title = "Sam Laulusa — Résumé (Print)";
    return () => {
      document.title = "Sam Laulusa — Communications Professional, Designer & Entrepreneur";
    };
  }, []);

  return (
    <div className="print-page bg-white text-black">
      <div className="no-print container-x flex items-center justify-between border-b border-border py-4">
        <Link to="/resume" className="font-mono2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-ember">
          ← Back to résumé
        </Link>
        <button
          onClick={() => window.print()}
          className="rounded-full bg-ember px-5 py-2 text-sm font-medium text-[hsl(var(--ink))]"
        >
          Print / Save as PDF
        </button>
      </div>

      <div className="mx-auto max-w-3xl bg-white px-8 py-12 text-black">
        <header className="border-b-2 border-black pb-4">
          <h1 className="font-display text-4xl">SAM LAULUSA</h1>
          <p className="mt-2 text-sm">
            {person.location} · {person.email}
          </p>
        </header>

        <section className="mt-6">
          <h2 className="font-mono2 text-xs uppercase tracking-[0.2em]">Professional Summary</h2>
          <p className="mt-2 text-sm leading-relaxed">
            Communications, marketing, and community management professional with experience overseeing homeowner associations,
            coordinating vendors and projects, preparing board communications, managing owner relations, and supporting financial
            and operational decisions. Serves on the Utah Rugby League Board of Directors as Marketing and Design Lead, directing
            branding, social media, promotional campaigns, event marketing, sponsorship materials, and creative content. Founder of
            Makaia Sportswear, with hands-on experience in product development, supplier coordination, pricing, sales, and brand
            growth. Skilled in stakeholder communication, project management, Adobe Creative Suite, Canva, Microsoft Office, digital
            marketing, and social media strategy.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="font-mono2 text-xs uppercase tracking-[0.2em]">Core Competencies</h2>
          <p className="mt-2 text-sm">{coreCompetencies.join(" · ")}</p>
        </section>

        <section className="mt-6">
          <h2 className="font-mono2 text-xs uppercase tracking-[0.2em]">Experience & Leadership</h2>
          {experience.map((e) => (
            <div key={e.org + e.role} className="mt-4">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-sm font-semibold">
                  {e.role} | {e.org}
                  {e.location ? `, ${e.location}` : ""}
                </h3>
                <p className="shrink-0 text-xs">{e.dates}</p>
              </div>
              <ul className="mt-1 list-disc pl-5 text-sm leading-relaxed">
                <li>{e.summary}</li>
                {e.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-6">
          <h2 className="font-mono2 text-xs uppercase tracking-[0.2em]">Education & Certifications</h2>
          <div className="mt-2 flex items-baseline justify-between">
            <p className="text-sm font-semibold">
              {education.degree} | {education.school}
            </p>
            <p className="text-xs">{education.expected}</p>
          </div>
          <p className="mt-1 text-sm">Certificates: {education.certificates.join("; ")}</p>
        </section>

        <section className="mt-6">
          <h2 className="font-mono2 text-xs uppercase tracking-[0.2em]">Technical Skills</h2>
          <p className="mt-2 text-sm">
            Adobe Creative Cloud: Illustrator, Photoshop, Lightroom | Design: Canva | Microsoft 365: Excel (certified), Word,
            PowerPoint, Outlook | Social Media: Instagram, Facebook, LinkedIn, TikTok, X, and platform analytics
          </p>
        </section>
      </div>
    </div>
  );
}
