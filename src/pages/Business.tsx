import { Link } from "react-router";
export default function Business() {
  return (
    <div className="container-x page-shell">
      <header className="page-intro">
        <p className="eyebrow">Business · Current focus</p>
        <h1>
          Building Makaia.
          <br />
          <span>From the ground up.</span>
        </h1>
        <p>
          Makaia Sportswear brings together the things I care about: business,
          design, sport and practical technology. It is my current venture and
          primary professional focus.
        </p>
      </header>
      <div className="business-feature">
        <div className="brand-art">
          <img
            src="/assets/makaia-logo-bone.png"
            alt="Makaia Sportswear logo"
          />
        </div>
        <div>
          <p className="eyebrow">Founder · Makaia Sportswear</p>
          <h2>
            Custom apparel.
            <br />A personal approach.
          </h2>
          <p>
            Custom team uniforms, sportswear, organizational apparel and branded
            clothing. I connect the creative work with the operations behind it:
            product concepts, suppliers, pricing, customer communication and
            production coordination.
          </p>
          <a
            className="solid-link"
            href="https://makaiasportswear.com"
            target="_blank"
            rel="noreferrer"
          >
            Visit Makaia Sportswear
          </a>
        </div>
      </div>
      <section className="section-space">
        <div className="capabilities">
          {[
            [
              "Brand & creative direction",
              "Developing the identity, apparel concepts and visual language of the business.",
            ],
            [
              "Product & production",
              "Working through designs, sourcing, pricing and manufacturing coordination.",
            ],
            [
              "Digital commerce",
              "Building and maintaining a website and dedicated team-store experiences with AI assistance.",
            ],
            [
              "Business operations",
              "Organizing prospects, supporting customer conversations and keeping follow-up work visible.",
            ],
          ].map(([h, p]) => (
            <article key={h}>
              <h3>{h}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </section>
      <div className="related-links">
        <Link to="/portfolio/makaia-sportswear">
          Explore the brand case study
        </Link>
        <Link to="/ai-technology/makaia-commerce">
          See the digital commerce work
        </Link>
        <Link to="/ai-technology/makaia-crm">Explore the CRM</Link>
      </div>
    </div>
  );
}
