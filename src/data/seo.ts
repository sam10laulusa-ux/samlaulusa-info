import { projects } from "./content";
import { aiProjects } from "./ai";
export const description =
  "Entrepreneur and creative professional based in Stafford, Virginia, building practical AI solutions, digital experiences and businesses through technology, design and communication.";
export const routes = [
  "/",
  "/ai-technology",
  "/business",
  "/design",
  "/photography",
  "/about",
  "/contact",
  "/portfolio",
  "/experience",
  "/resume",
  "/resume/print",
  "/journal",
  ...projects.map((p) => `/portfolio/${p.slug}`),
  ...aiProjects.map((p) => `/ai-technology/${p.slug}`),
];
export function pageMeta(path: string) {
  const titles: Record<string, string> = {
    "/": "Entrepreneur, Creative & AI Solutions Builder",
    "/ai-technology": "AI & Technology",
    "/business": "Business · Makaia Sportswear",
    "/design": "Design & Branding",
    "/photography": "Original Photography",
    "/about": "About",
    "/contact": "Contact",
    "/portfolio": "Selected Work",
    "/experience": "Experience",
    "/resume": "Résumé",
    "/resume/print": "Résumé",
    "/journal": "Journal",
  };
  const project = [...projects, ...aiProjects].find((p) =>
    path.endsWith("/" + p.slug),
  );
  return {
    title:
      path === "/"
        ? "Sam Laulusa | Entrepreneur, Creative & AI Solutions Builder"
        : `${project?.title || titles[path] || "Page not found"} | Sam Laulusa`,
    description: project?.summary || description,
  };
}
