import { Link } from "react-router";
import { CTAButton } from "@/components/ui-primitives";
export default function Home() {
  return (
    <>
      <section className="home-hero container-x">
        <div className="hero-topline">
          <p>Sam Laulusa</p>
          <p>Independent thinking. Practical work.</p>
        </div>
        <div className="hero-grid">
          <div>
            <p className="eyebrow">
              Entrepreneur, Creative & AI Solutions Builder
            </p>
            <h1>
              Building businesses.
              <br />
              Creating experiences.
              <br />
              <span>Solving problems.</span>
            </h1>
            <p className="hero-intro">
              I combine entrepreneurship, design and artificial intelligence to
              create practical solutions for real-world challenges.
            </p>
            <div className="hero-actions">
              <CTAButton to="/portfolio">Explore my work</CTAButton>
              <Link to="/ai-technology">View AI projects</Link>
              <Link to="/about">About me</Link>
            </div>
          </div>
          <figure className="hero-portrait">
            <img
              src="/assets/portrait.jpg"
              alt="Sam Laulusa"
              fetchPriority="high"
            />
            <figcaption>
              Based in Stafford, Virginia
              <br />
              <span>Founder of Makaia Sportswear</span>
            </figcaption>
          </figure>
        </div>
        <div className="hero-bottom">
          <span>Business perspective. Creative instinct.</span>
          <span>Design · Technology · Communication</span>
        </div>
      </section>
      <section className="container-x section-space">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Ideas put to work.</h2>
          </div>
          <Link className="text-link" to="/portfolio">
            Explore the portfolio
          </Link>
        </div>
        <div className="featured-grid">
          <Link
            to="/ai-technology/makaia-crm"
            className="feature-card feature-crm"
          >
            <div className="project-art">
              <p className="eyebrow">Makaia / Business tools</p>
              <h3>
                A clearer view
                <br />
                of the next step.
              </h3>
              <div className="workflow-labels">
                <span>Organize</span>
                <span>Track</span>
                <span>Follow through</span>
              </div>
              <p className="art-caption">CRM · AI-assisted development</p>
            </div>
            <div className="card-caption">
              <h3>Makaia CRM</h3>
              <p>A private tool built around real outreach work.</p>
              <span>AI & Technology</span>
            </div>
          </Link>
          <Link to="/business" className="feature-card">
            <div className="brand-art">
              <img
                src="/assets/makaia-logo-bone.png"
                alt="Makaia Sportswear brand identity"
                loading="lazy"
              />
            </div>
            <div className="card-caption">
              <h3>Makaia Sportswear</h3>
              <p>Building a business from identity to customer experience.</p>
              <span>Entrepreneurship · Creative direction</span>
            </div>
          </Link>
        </div>
        <div className="creative-strip">
          <Link to="/portfolio/utah-rugby-league">
            <img
              src="/assets/url-logo.png"
              alt="Utah Rugby League identity"
              loading="lazy"
            />
            <div>
              <span>Branding & sports marketing</span>
              <h3>An identity for the game.</h3>
            </div>
          </Link>
          <Link to="/photography">
            <img
              src="/photos/DSC03951-960.webp"
              alt="Mother and baby in golden evening light"
              loading="lazy"
            />
            <div>
              <span>Original photography</span>
              <h3>The moments in between.</h3>
            </div>
          </Link>
        </div>
      </section>
      <section className="practical-section">
        <div className="container-x practical-grid section-space">
          <div>
            <p className="eyebrow">Business first. Technology with purpose.</p>
            <h2>
              Making AI practical
              <br />
              for small businesses.
            </h2>
          </div>
          <div>
            <p>
              As a small business owner, I understand the challenge of balancing
              marketing, customer relationships, operations and growth.
            </p>
            <p>
              I use AI to build useful tools, support repetitive work and make
              technology more accessible. The aim is a solution a business owner
              can understand, review and maintain.
            </p>
            <Link className="text-link" to="/ai-technology">
              See my approach
            </Link>
          </div>
        </div>
      </section>
      <section className="container-x section-space">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A multidisciplinary perspective</p>
            <h2>Built from experience.</h2>
          </div>
          <Link className="text-link" to="/about">
            More about me
          </Link>
        </div>
        <div className="capabilities">
          {[
            [
              "Entrepreneurship",
              "Product development, supplier coordination, customer relationships and the daily work of growing Makaia.",
            ],
            [
              "Applied AI",
              "Business tools, AI-assisted development, research and marketing workflows with human review.",
            ],
            [
              "Design & storytelling",
              "Brand identities, sportswear, visual communication and original photography.",
            ],
            [
              "Communication & leadership",
              "A background in community operations, legal administration and sports marketing.",
            ],
          ].map(([h, p]) => (
            <article key={h}>
              <h3>{h}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
