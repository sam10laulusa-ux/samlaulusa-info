// ─────────────────────────────────────────────────────────────
// Single source of truth for site content.
// Sourced from Sam Laulusa's résumé. Copy follows plain,
// direct English: short sentences, active voice, simple words.
// ─────────────────────────────────────────────────────────────

export const person = {
  name: "Sam Laulusa",
  location: "Orem, Utah",
  email: "sam10laulusa@outlook.com",
  roles: ["Communications Professional", "Designer", "Entrepreneur"],
  tagline: "I build software, create brands, and solve real-world problems.",
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/sam-laulusa" },
    { label: "Instagram", url: "https://www.instagram.com/samlaulusa/" },
    { label: "X", url: "https://x.com/SLaulusa" },
  ],
};

export const shortBio =
  "Sam Laulusa is a communications professional, graphic designer, and entrepreneur in Utah. He manages HOA communities with Community Solutions & Sales. He leads marketing and design for Utah Rugby League. He founded Makaia Sportswear, a custom team apparel company.";

export const longBio = [
  "I work in two worlds. By day, I manage HOA and condominium communities for Community Solutions & Sales, an Associa company. I prepare board packets and budgets. I run board meetings. I coordinate vendors and capital projects. I answer questions from homeowners.",
  "Outside of work, I build brands. I sit on the board of Utah Rugby League, where I lead all marketing and design. I also founded Makaia Sportswear. It is a custom apparel company for schools, clubs, and teams. I design the products. I find the suppliers. I set the prices. I talk to the customers.",
  "Before this, I worked as a paralegal. I also worked as an intern for Seminaries and Institutes of Religion. Those jobs taught me to write clearly, stay organized, and communicate well with many different people.",
  "I am finishing a Bachelor of Applied Science in Communication at Ensign College. I also hold certificates in Communication and Social Media Marketing.",
  "My goal in every project is simple. I take something — a community, a league, a brand, a product idea — and I make it clearer, stronger, and better than it was before.",
];

export interface Experience {
  org: string;
  role: string;
  dates: string;
  location?: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
  kind: "professional" | "leadership" | "service";
}

export const experience: Experience[] = [
  {
    org: "Community Solutions & Sales (An Associa Company)",
    role: "Community Association Manager",
    dates: "Dec 2025 – Present",
    location: "Draper, UT",
    summary:
      "I manage about 10 HOA and condominium communities. I am the main contact for board members, homeowners, vendors, and our internal team.",
    responsibilities: [
      "Prepare board packets, agendas, meeting minutes, budgets, financial summaries, and owner communications",
      "Manage bids, contracts, maintenance, insurance, compliance, and capital projects from start to finish",
      "Run board and annual meetings. Solve problems for owners. Keep records. Track violations, late payments, and follow-up items",
    ],
    skills: ["Community Association Management", "Board Relations", "Vendor Coordination", "Budget Support", "Stakeholder Communication"],
    kind: "professional",
  },
  {
    org: "AWC",
    role: "Paralegal",
    dates: "Dec 2024 – Dec 2025",
    summary:
      "I prepared and organized legal documents, letters, case files, and confidential records. I kept the work accurate and on time.",
    responsibilities: [
      "Did research, tracked cases, and shared information with attorneys, clients, and agencies",
    ],
    skills: ["Professional Writing", "Research", "Records Management", "Deadline Compliance"],
    kind: "professional",
  },
  {
    org: "Seminaries and Institutes of Religion, The Church of Jesus Christ of Latter-day Saints",
    role: "Program Intern",
    dates: "Dec 2023 – Dec 2024",
    summary:
      "I helped with program administration, scheduling, records, outreach, and events. I also prepared communication materials.",
    responsibilities: [
      "Worked with students, staff, and community members in a service-focused environment",
    ],
    skills: ["Program Administration", "Event Coordination", "Communication Materials", "Outreach"],
    kind: "professional",
  },
  {
    org: "Utah Rugby League",
    role: "Board Member & Marketing and Design Lead",
    dates: "2026 – Present",
    summary:
      "I lead the league's branding, graphic design, social media, campaigns, sponsor materials, and event marketing.",
    responsibilities: [
      "I also help with player recruitment, sponsor outreach, and league growth",
    ],
    skills: ["Brand Strategy", "Graphic Design", "Social Media Marketing", "Event Marketing", "Sponsorship Materials"],
    kind: "leadership",
  },
  {
    org: "Makaia Sportswear",
    role: "Founder",
    dates: "Aug 2025 – Present",
    summary:
      "I built a custom sportswear company from the ground up. I develop the brand, the products, the pricing, and the sales process.",
    responsibilities: [
      "I find manufacturers, negotiate prices and order minimums, manage production, and talk to customers every day",
    ],
    skills: ["Entrepreneurship", "Product Development", "Supplier Coordination", "Pricing", "Sales"],
    kind: "leadership",
  },
  {
    org: "The Church of Jesus Christ of Latter-day Saints",
    role: "Volunteer Missionary",
    dates: "2018 – 2020",
    summary:
      "I gave presentations, organized service projects, and built relationships with people from many different backgrounds.",
    responsibilities: [],
    skills: ["Public Speaking", "Service", "Relationship Building"],
    kind: "service",
  },
];

export const education = {
  degree: "Bachelor of Applied Science in Communication",
  school: "Ensign College, Salt Lake City, UT",
  expected: "Expected Aug 2026",
  certificates: ["Communication", "Social Media Marketing"],
  technical: ["Microsoft Excel (certified)"],
};

export const skillGroups = [
  {
    title: "Leadership & Management",
    skills: ["Community Association Management", "Project Management", "Vendor Coordination", "Board Relations", "Stakeholder Communication", "Meeting Facilitation"],
  },
  {
    title: "Communications & Marketing",
    skills: ["Public Relations", "Brand Strategy", "Social Media Marketing", "Professional Writing", "Campaign Development"],
  },
  {
    title: "Creative",
    skills: ["Graphic Design", "Branding", "Logo Design", "Apparel Design", "Photography", "Layout Design"],
  },
  {
    title: "Software",
    skills: ["Adobe Illustrator", "Adobe Photoshop", "Adobe Lightroom", "Canva", "Microsoft 365 (Excel certified)", "Social Media Analytics"],
  },
];

export const coreCompetencies = [
  "Community Association Management",
  "Board & Homeowner Relations",
  "Vendor & Contract Coordination",
  "Budget Support",
  "Project Management",
  "Public Relations",
  "Brand Strategy",
  "Graphic Design",
  "Social Media Marketing",
];

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string[];
  role: string;
  status?: string;
  summary: string;
  overview: string;
  challenge?: string;
  process: string[];
  solution?: string;
  deliverables: string[];
  results?: string;
  featured: boolean;
  note?: string;
  heroImage?: string;
  gallery?: string[];
  links?: ProjectLink[];
  logoShowcase?: { src: string; name: string }[];
  wordmark?: string;
  comingSoonGallery?: boolean;
}

// Ordered strongest → weakest (composition, color, technical quality).
export const photography = [
  { src: "/assets/child-pond.jpg", orientation: "landscape" },
  { src: "/assets/DSC01877.jpg", orientation: "landscape" },
  { src: "/assets/aquarium.jpg", orientation: "landscape" },
  { src: "/assets/golden-hour-profile.jpg", orientation: "landscape" },
  { src: "/assets/DSC01514.jpg", orientation: "portrait" },
  { src: "/assets/DSC01728.jpg", orientation: "landscape" },
  { src: "/assets/palm-walk.jpg", orientation: "landscape" },
  { src: "/assets/baby-carrier.jpg", orientation: "landscape" },
  { src: "/assets/DSC01125.jpg", orientation: "landscape" },
  { src: "/assets/DSC01329.jpg", orientation: "landscape" },
  { src: "/assets/DSC00849.jpg", orientation: "landscape" },
  { src: "/assets/DSC01660.jpg", orientation: "landscape" },
  { src: "/assets/DSC01813.jpg", orientation: "landscape" },
] as const;

export const projects: Project[] = [
  {
    slug: "makaia-sportswear",
    title: "Makaia Sportswear",
    category: ["Branding", "Apparel Design", "Product Design"],
    role: "Founder",
    summary:
      "My own sportswear company. We make custom jerseys and athletic apparel for schools, clubs, and teams. I built the brand and I run the business.",
    overview:
      "Makaia Sportswear is my company. We make custom jerseys and athletic apparel for schools, clubs, and organizations. I designed the brand. I run the full business: design, sourcing, pricing, and customer service.",
    challenge:
      "Most custom apparel looks the same. Small teams and clubs often get generic designs, high order minimums, and high prices. Makaia Sportswear gives them a better option.",
    process: [
      "We talk about your team, your colors, and what you need",
      "I design jersey concepts and apparel mockups for your review",
      "You approve the design, the sizes, and the quantities",
      "I send the order to my manufacturer and manage production",
      "Your custom apparel is delivered to your door",
    ],
    solution:
      "A sportswear brand with a strong identity and a personal, design-led customer experience. The client sees the design before we make the product.",
    deliverables: ["Brand identity", "Logo design", "Jersey concepts", "Apparel mockups", "Marketing materials", "Sportswear branding"],
    featured: true,
    heroImage: "/assets/makaia-logo-bone.png",
    wordmark: "Makaia Sportswear",
    comingSoonGallery: true,
    links: [{ label: "makaiasportswear.com", url: "https://makaiasportswear.com" }],
  },
  {
    slug: "utah-rugby-league",
    title: "Utah Rugby League",
    category: ["Branding", "Sports Marketing", "Social Media", "Photography"],
    role: "Board Member & Marketing and Design Lead",
    summary:
      "I lead all brand and marketing work for a growing rugby league. This includes the logo, the club logos, social media, events, sponsor materials, and recruitment.",
    overview:
      "Utah Rugby League is growing the sport in Utah. I sit on the board and lead marketing and design. I direct the league's look and every public message, from game-day graphics to sponsor decks.",
    challenge:
      "Rugby league is new to Utah. The league needed a professional brand and steady content to attract players, sponsors, and fans. It had to be done with a small budget.",
    process: [
      "I designed the league logo and the logos for its clubs",
      "I design social media graphics, campaigns, and event materials",
      "I make sponsor materials that present the league well",
      "I help with recruitment campaigns and schedule announcements",
      "I shoot and edit photos at league events",
    ],
    solution:
      "One brand system and a steady stream of content. It covers social media, events, sponsors, and recruitment. The league now looks as professional as it plays.",
    deliverables: ["Brand identity", "League & club logo design", "Social media graphics", "Event marketing", "Sponsor materials", "Recruitment campaigns", "Photography", "Promotional materials"],
    featured: true,
    heroImage: "/assets/url-logo.png",
    links: [{ label: "@utahrugbyleague on Instagram", url: "https://www.instagram.com/utahrugbyleague/" }],
    logoShowcase: [
      { src: "/assets/url-logo.png", name: "Utah Rugby League" },
      { src: "/assets/raiders-logo.png", name: "Lehi Raiders" },
      { src: "/assets/seagulls-logo.png", name: "Riverton Seagulls" },
      { src: "/assets/broncos-logo.png", name: "Broncos" },
    ],
  },
  {
    slug: "sina-hq",
    title: "Sina HQ",
    category: ["Product Design"],
    role: "Founder / Product Lead",
    status: "In development",
    summary:
      "A software tool for community managers. It organizes email, tasks, documents, and vendors in one place, with AI help. An early version is live at sinahq.io.",
    overview:
      "Sina HQ is a software product I am building. The idea came from my daily work in community management. It gives managers one organized place for work that now lives in inboxes, spreadsheets, and memory. An early version is live at sinahq.io.",
    challenge:
      "Community managers handle hundreds of owner emails, vendor threads, tasks, and records across many communities. The current tools were not made for this work.",
    process: [
      "I mapped the real daily workflows of community management from my own experience",
      "I defined the product strategy and the core features",
      "I designed the brand and the early user interface",
    ],
    solution:
      "A focused platform for email organization, task management, knowledge management, vendor management, and AI assistance. It is designed by someone who does this work every day.",
    deliverables: ["Product strategy", "Brand identity", "UI design", "Product development"],
    featured: true,
    heroImage: "/assets/sinahq-login.jpg",
    links: [{ label: "sinahq.io", url: "https://sinahq.io/" }],
    note: "Sina HQ is in early development. The screenshot shows the live early version at sinahq.io.",
  },
  {
    slug: "social-media-campaigns",
    title: "Social Media Campaigns",
    category: ["Social Media", "Graphic Design", "Sports Marketing"],
    role: "Marketing and Design Lead",
    summary:
      "I run the social media for Utah Rugby League and the Lehi Raiders. You can see the live feeds on Instagram.",
    overview:
      "I run the social media accounts for Utah Rugby League and the Lehi Raiders. I plan the campaigns. I design the graphics. I post the content. I help both accounts grow.",
    challenge:
      "A growing league needs steady, on-brand content. It must fit around game schedules, events, and recruitment pushes.",
    process: [
      "Plan campaign themes around the season calendar",
      "Design templates and one-off graphics",
      "Post the content and check the analytics",
    ],
    solution:
      "Content systems that keep both feeds active and on-brand. You can see the work live on Instagram.",
    deliverables: ["Campaign graphics", "Content templates", "Feed management", "Analytics review"],
    featured: true,
    heroImage: "/assets/ig-dashboard.jpg",
    links: [
      { label: "@utahrugbyleague on Instagram", url: "https://www.instagram.com/utahrugbyleague/" },
      { label: "@lehiraiders on Instagram", url: "https://www.instagram.com/lehiraiders/" },
    ],
    gallery: ["/assets/ig-utahrugbyleague.jpg", "/assets/ig-lehiraiders.jpg"],
  },
  {
    slug: "photography",
    title: "Photography",
    category: ["Photography"],
    role: "Photographer (hobby & event work)",
    summary:
      "Personal and event photography. It is a creative outlet and a growing portfolio. I shoot and edit in Lightroom.",
    overview:
      "Photography is a hobby and part of my creative toolkit. I shoot events and personal work. I edit in Adobe Lightroom. This page shows some of my recent photos.",
    process: ["Shoot on location at events and sessions", "Select and edit the best shots in Adobe Lightroom", "Deliver galleries for personal and organizational use"],
    deliverables: ["Event photography", "Personal photography", "Lightroom editing"],
    featured: false,
    heroImage: "/assets/child-pond.jpg",
    gallery: photography.map((p) => p.src),
  },
];

export const ventures = [
  {
    name: "Makaia Sportswear",
    role: "Founder",
    dates: "Aug 2025 – Present",
    status: "Active",
    description:
      "A custom sportswear company. We make custom jerseys and athletic apparel for schools, clubs, and organizations. I develop the brand, the products, the pricing, and the sales process. I also manage designs and production with our manufacturers.",
    tags: ["Apparel", "Branding", "E-commerce", "Product Development"],
    slug: "makaia-sportswear",
    url: "https://makaiasportswear.com" as string | null,
    urlNote: null as string | null,
  },
  {
    name: "Sina HQ",
    role: "Founder / Product Lead",
    dates: "In development",
    status: "In development",
    description:
      "A software tool for community association and property management professionals. It focuses on email organization, task management, knowledge management, vendor management, and AI assistance. The idea comes from my own experience in the industry.",
    tags: ["SaaS", "Product Strategy", "PropTech", "AI"],
    slug: "sina-hq",
    url: "https://sinahq.io/" as string | null,
    urlNote: null as string | null,
  },
];

export const contactReasons = [
  "Employment opportunity",
  "Freelance work",
  "Graphic design project",
  "Sportswear / Makaia inquiry",
  "Partnership",
  "Networking",
];

export const journalTopics = [
  "Communications",
  "Community management",
  "Graphic design",
  "Branding",
  "Entrepreneurship",
  "Software",
  "Sports marketing",
];
