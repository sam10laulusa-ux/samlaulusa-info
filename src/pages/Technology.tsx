import { Link, useParams } from "react-router";
import { aiProjects } from "@/data/ai";
import NotFound from "./NotFound";
export function AICaseStudy() {
  const { slug } = useParams();
  const p = aiProjects.find((p) => p.slug === slug);
  if (!p) return <NotFound />;
  return (
    <article className="container-x page-shell">
      <Link className="text-link" to="/ai-technology">
        AI & Technology
      </Link>
      <header className="page-intro">
        <p className="eyebrow">{p.status}</p>
        <h1>{p.title}</h1>
        <p>{p.summary}</p>
        <p className="role-line">My role: {p.role}</p>
      </header>
      <div className="case-layout">
        <aside>
          <h2>Tools & technologies</h2>
          <ul>
            {p.tools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          {p.url && (
            <a
              className="text-link"
              href={p.url}
              target="_blank"
              rel="noreferrer"
            >
              Visit Makaia Sportswear
            </a>
          )}
        </aside>
        <div>
          {[
            ["Business problem", p.problem],
            ["Implemented solution", p.solution],
            ["How I used AI", p.ai],
          ].map(([h, t]) => (
            <section key={h}>
              <h2>{h}</h2>
              <p>{t}</p>
            </section>
          ))}
          <section>
            <h2>What it does</h2>
            <ul className="deliverables">
              {p.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </section>
          {[
            ["Verified outcome", p.result],
            ["Implementation considerations", p.lesson],
            ["Scope & limitations", p.limit],
          ].map(([h, t]) => (
            <section key={h}>
              <h2>{h}</h2>
              <p>{t}</p>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
export default function Technology() {
  return (
    <div className="container-x page-shell">
      <header className="page-intro">
        <p className="eyebrow">AI & Technology</p>
        <h1>
          Useful tools.
          <br />
          <span>Real business problems.</span>
        </h1>
        <p>
          I approach AI as a business owner: start with the work, understand the
          friction, and build something practical. I guide AI-assisted
          development with business requirements, creative direction and human
          review.
        </p>
      </header>
      <div className="ai-projects">
        {aiProjects.map((p) => (
          <Link key={p.slug} to={`/ai-technology/${p.slug}`}>
            <span className="eyebrow">{p.status}</span>
            <h2>{p.title}</h2>
            <p>{p.summary}</p>
            <span className="text-link">Read the case study</span>
          </Link>
        ))}
      </div>
      <section className="section-space">
        <p className="eyebrow">How I work</p>
        <h2 className="section-title">
          Making AI practical for small businesses.
        </h2>
        <div className="capabilities">
          <article>
            <h3>Start with the workflow</h3>
            <p>
              Identify the repetitive task or missing information before
              choosing a tool. Focus on customer relationships, marketing and
              daily operations.
            </p>
          </article>
          <article>
            <h3>Keep people in control</h3>
            <p>
              AI can assist with research and drafting. People verify facts,
              review customer communication and approve actions before they are
              sent.
            </p>
          </article>
          <article>
            <h3>Respect private information</h3>
            <p>
              Keep customer records out of public demonstrations. Separate
              private business tools from the public website.
            </p>
          </article>
          <article>
            <h3>Build for understanding</h3>
            <p>
              I am interested in helping entrepreneurs understand and maintain
              practical AI solutions themselves.
            </p>
          </article>
        </div>
      </section>
      <section className="approach-note">
        <h2>Research, outreach & creative exploration</h2>
        <p>
          My interests also include AI-assisted prospect research, personalized
          outreach drafts, sportswear concepts and product visualization. These
          are areas of practice and exploration, rather than additional
          completed case studies. Original photography, design concepts and
          manufactured products each have a different role and should be
          presented clearly.
        </p>
      </section>
    </div>
  );
}
