import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { person } from "@/data/content";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/experience", label: "Experience" },
  { to: "/ventures", label: "Ventures" },
  { to: "/resume", label: "Résumé" },
  { to: "/contact", label: "Contact" },
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-lg tracking-tight">
          Sam Laulusa<span className="text-ember">.</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `font-mono2 text-[11px] uppercase tracking-[0.18em] transition-colors hover:text-ember ${
                  isActive ? "text-ember" : "text-muted-foreground"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <motion.span animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }} className="block h-px w-6 bg-foreground" />
          <motion.span animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }} className="block h-px w-6 bg-foreground" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-md lg:hidden"
            aria-label="Mobile"
          >
            <div className="container-x flex flex-col gap-1 py-6">
              {nav.map((n, i) => (
                <motion.div
                  key={n.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <NavLink
                    to={n.to}
                    className={({ isActive }) =>
                      `block py-2 font-display text-3xl ${isActive ? "text-ember" : "text-foreground"}`
                    }
                  >
                    {n.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="no-print border-t border-border">
      <div className="container-x flex flex-col gap-10 py-14 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-3xl">
            Let's work together<span className="text-ember">.</span>
          </p>
          <a href={`mailto:${person.email}`} className="mt-3 inline-block text-muted-foreground transition-colors hover:text-ember">
            {person.email}
          </a>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex gap-5">
            {person.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-ember"
              >
                {s.label}
              </a>
            ))}
          </div>
          <p className="font-mono2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            © {new Date().getFullYear()} Sam Laulusa · Orem, Utah
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
