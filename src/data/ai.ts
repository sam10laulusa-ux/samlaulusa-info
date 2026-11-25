export const aiProjects = [
  {
    slug: "makaia-crm",
    title: "Makaia CRM",
    status: "Live · private business tool",
    summary:
      "A custom workspace for organizing prospects and following through on customer conversations.",
    role: "Business owner, workflow designer and AI-assisted builder",
    problem:
      "Prospect details, outreach history and follow-up actions need to stay connected as a small business develops new relationships.",
    solution:
      "A private CRM brings organizations, contacts, pipeline stages, notes and follow-up tasks into one workspace.",
    ai: "I used Codex for AI-assisted coding, translating business requirements into an interface and supporting application logic. I define the workflow and review the implementation. AI assistance during development is separate from AI features inside the product.",
    tools: [
      "Codex",
      "React",
      "TypeScript",
      "Cloudflare Workers",
      "Cloudflare D1",
      "GitHub",
    ],
    deliverables: [
      "Organization search, filtering and categorization",
      "Multiple contacts, notes and activity history",
      "Pipeline stages and follow-up tasks",
      "CSV import/export and JSON backup",
      "Protected access to private business records",
    ],
    result:
      "The CRM is deployed privately. The repository documents tested organization, note and task workflows, with persistent storage and access controls.",
    lesson:
      "A useful business tool needs clear definitions and limits. Follow-up tasks are reminders, not automatic emails; stored communication metadata is not a complete inbox.",
    limit:
      "The CRM has no email-sending capability. Background Gmail synchronization is implemented, but the documented release does not verify activation. Customer data and internal screens are intentionally not published.",
  },
  {
    slug: "makaia-commerce",
    title: "AI-assisted digital commerce",
    status: "Live website",
    summary:
      "Using AI-assisted development to support Makaia Sportswear’s digital presence and team-ordering experience.",
    role: "Founder, creative director and AI-assisted website builder",
    problem:
      "A custom apparel business needs to explain its products clearly and support different team-ordering requirements without losing a consistent brand.",
    solution:
      "A React and TypeScript website deployed on Cloudflare, with dedicated team-store experiences and an asset-checking build process.",
    ai: "I use AI coding assistants to help implement and maintain the site. I supply the business requirements, product context and creative direction, then review changes against the intended customer experience.",
    tools: [
      "AI coding assistants",
      "React",
      "TypeScript",
      "Vite",
      "GitHub",
      "Cloudflare Pages",
    ],
    deliverables: [
      "Makaia Sportswear website",
      "Dedicated team-store routes",
      "Square checkout integration for the configured family-ordering store",
      "Build checks that protect required image assets",
    ],
    result:
      "A live website supports the business. The repository distinguishes an archived store, a concept preview and a store with checkout integration; these are not presented as interchangeable live products.",
    lesson:
      "Deployment needs to preserve the full product-image library. Source changes alone are not a complete release when required assets are managed separately.",
    limit:
      "No revenue, conversion-rate or time-saving claims are made. Link-only team stores and their customer information are not exposed here.",
    url: "https://makaiasportswear.com",
  },
];
