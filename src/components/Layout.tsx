import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { person } from "@/data/content";
import { pageMeta } from "@/data/seo";
const nav = [
  ["/", "Home"],
  ["/ai-technology", "AI & Technology"],
  ["/business", "Business"],
  ["/design", "Design"],
  ["/photography", "Photography"],
  ["/about", "About"],
  ["/contact", "Contact"],
];
export default function Layout() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();
  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
    const m = pageMeta(pathname);
    document.title = m.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", m.description);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute(
        "href",
        `https://samlaulusa.info${pathname === "/" ? "" : pathname}`,
      );
    for (const key of ["title", "description", "url"])
      document
        .querySelector(`meta[property="og:${key}"]`)
        ?.setAttribute(
          "content",
          key === "url"
            ? `https://samlaulusa.info${pathname}`
            : m[key as "title" | "description"],
        );
  }, [pathname]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header no-print">
        <div className="container-x header-inner">
          <Link className="wordmark" to="/">
            Sam Laulusa<span>.</span>
          </Link>
          <button
            ref={toggle}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
          <nav
            id="primary-nav"
            aria-label="Primary"
            className={open ? "primary-nav is-open" : "primary-nav"}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setOpen(false);
                toggle.current?.focus();
              }
            }}
          >
            {nav.map(([to, label]) => (
              <NavLink key={to} to={to} end>
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="site-footer no-print container-x">
        <div>
          <p className="eyebrow">Have something in mind?</p>
          <Link to="/contact" className="footer-title">
            Let's make it happen.
          </Link>
          <a href={`mailto:${person.email}`}>{person.email}</a>
        </div>
        <div className="footer-links">
          {person.socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
          <Link to="/experience">Experience</Link>
          <Link to="/resume">Résumé</Link>
        </div>
        <p className="footer-credit">
          © {new Date().getFullYear()} Sam Laulusa · Stafford, Virginia
        </p>
      </footer>
    </>
  );
}
