// ============================================================
// DATA.JS — Edit all your content here in one place
// ============================================================

export const personal = {
  name: "Akheel Shibli",
  tagline: "From code to product — building things that scale, matter, and last.",
  role: "Technical Project Manager · Product Manager",
  email: "akheelshiblia@gmail.com",
  linkedin: "https://linkedin.com/in/akheelshibli", // ← update with your actual URL
  resumeUrl: "#",                                    // ← update with your resume PDF link
  stats: [
    { num: "6+", label: "Years Exp." },
    { num: "₹50Cr", label: "Revenue Impact" },
    { num: "15K+", label: "Users Served" },
  ],
  journeySteps: [
    "Chemical Engg.",
    "Software Dev",
    "Technical PM",
    "Product Manager",
  ],
};

export const about = {
  paragraphs: [
    `I'm a product and technology professional with <strong>6+ years of experience</strong> across software development, technical program management, and product strategy.`,
    `Currently working as a <highlight>Technical Project Manager at Gyansys</highlight>, leading end-to-end delivery of a new GCP-based enterprise application for a client migrating their legacy Azure system — while managing SAP customisation requirements alongside cloud-native development.`,
    `My edge: I hold an <strong>MBA in IT & Finance from IIM Lucknow</strong> and a <strong>B.E. from BITS Pilani</strong>, giving me the rare ability to speak the language of both engineering teams and business stakeholders.`,
    `I've shipped digital products used by <strong>15,000+ users</strong>, led regulatory API deployments enabling <strong>₹33,000 Cr</strong> in claims, and driven product adoption initiatives at Coca-Cola India.`,
  ],
  seekingText: "Actively exploring Senior TPM and Product Manager opportunities.",
  cards: [
    { icon: "🎓", title: "IIM Lucknow · MBA IT & Finance", desc: "XAT '24: 99.3%ile VA & LR · 2024–2026" },
    { icon: "⚡", title: "BITS Pilani · B.E. Chemical Engg.", desc: "JEE Main Top 0.9%ile · IELTS Band 8 · 2015–2019" },
    { icon: "🏦", title: "ICICI Bank · Fast-tracked TPM", desc: "Promoted in 3 months · ₹50 Cr/month revenue impact" },
    { icon: "🚀", title: "PM Club · IIM Lucknow", desc: "Co-authored PM Casebook · Mentored 250+ students" },
  ],
};

export const experience = [
  {
    date: "2025 – Present",
    badge: "Current",
    title: "Technical Project Manager",
    company: "Gyansys",
    points: [
      "Leading end-to-end delivery of a new <strong>GCP-based enterprise application</strong> for a client whose existing system runs on Azure.",
      "Managing full project lifecycle — from requirement gathering and <strong>SAP customisation</strong> to cloud-native development on GCP.",
      "Ensuring seamless transition from the legacy Azure platform while maintaining <strong>zero disruption</strong> to business operations.",
    ],
    impact: "Cloud Migration · SAP · GCP",
  },
  {
    date: "Apr 2025 – May 2025",
    badge: null,
    title: "Product Management Intern",
    company: "HCCB (Coca-Cola India)",
    points: [
      "Spearheaded B2B app adoption — mapped <strong>3 user personas</strong>, conducted <strong>40+ user interviews</strong>, surfaced 9+ UX pain-points.",
      "Designed multi-channel training roadmap cutting SKU-related queries by <strong>25%</strong> and boosting spoke usage rate by <strong>10%</strong>.",
      "Benchmarked 4 competitors; synthesized 30+ field interactions into 5 product insights presented to the <strong>CDO</strong>.",
    ],
    impact: "User Research · B2B SaaS · Product Strategy",
  },
  {
    date: "Apr 2022 – Jun 2024",
    badge: "Fast-track Promo",
    title: "Technical Project Manager",
    company: "ICICI Bank",
    points: [
      "Owned roadmap for <strong>20+ services migration</strong>; scaled platform to 15,000+ users, cut release cycle by <strong>30%</strong>.",
      "Served as <strong>RBI-facing POC</strong>; deployed 5 regulatory APIs enabling claims of ₹33,000+ Cr.",
      "Boosted lead generation <strong>2x (1,200/month)</strong> and improved user retention by <strong>31%</strong> through UX improvements.",
      "Accelerated sprint velocity by <strong>22%</strong> across 12-member Agile squad; zero-defect go-live across 32+ UAT sessions.",
    ],
    impact: "~₹50 Cr/month Revenue Impact · 12-member Team",
  },
  {
    date: "Jun 2019 – Mar 2022",
    badge: "PPO Secured",
    title: "Software Developer",
    company: "Blue Yonder",
    points: [
      "Architected modular <strong>React front-end</strong> with multilingual UI/UX across 4 geographies for 20+ product applications.",
      "Ideated <strong>CI/CD proof-of-concept</strong> eliminating 40+ man-hours of manual release effort.",
      "Led accessibility revamp achieving <strong>WCAG AA compliance</strong> — 1 of 11 peers to receive PPO.",
    ],
    impact: "React · CI/CD · Accessibility",
  },
];

export const projects = [
  {
    num: "01",
    title: "AI-Driven Energy Optimization Platform",
    desc: "Built an MVP using Python and Orange ML featuring gamified dashboards for actionable energy insights. Achieved 96.3% ML accuracy and reduced anomaly response time by 23%.",
    tags: ["Python", "Orange ML", "Gamification", "IIM Lucknow"],
  },
  {
    num: "02",
    title: "B2B App Adoption Initiative",
    desc: "End-to-end product discovery for Coca-Cola India's B2B field app. Conducted 40+ user interviews, mapped 3 personas, benchmarked 4 competitors, and designed training interventions.",
    tags: ["User Research", "Persona Mapping", "PM Strategy", "B2B"],
  },
  {
    num: "03",
    title: "Regulatory API Suite — ICICI Bank",
    desc: "Deployed 5 regulatory APIs as RBI-facing POC, enabling ₹33,000+ Cr in unclaimed account claims. Involved cross-functional coordination and embedding 11+ preventive fixes.",
    tags: ["API Design", "Compliance", "BFSI", "RBI"],
  },
  {
    num: "04",
    title: "National PM Festival — IIM Lucknow",
    desc: "Organised a 6-event national PM festival — drove 32% YoY registration growth with 4,500+ participants and secured ₹7L+ in sponsorship.",
    tags: ["Leadership", "Event Strategy", "Sponsorship", "IIM Lucknow"],
  },
];

export const skills = [
  {
    category: "Product Management",
    items: ["Product Roadmapping", "PRD Writing", "User Story Mapping", "Go-to-Market", "A/B Testing", "MoSCoW", "OKRs"],
  },
  {
    category: "Agile & Delivery",
    items: ["Scrum", "Kanban", "Sprint Planning", "Backlog Grooming", "UAT", "Jira", "CI/CD"],
  },
  {
    category: "Analytics & Tools",
    items: ["SQL", "Python", "Power BI", "Excel (Advanced)", "Orange ML"],
  },
  {
    category: "Domain Knowledge",
    items: ["BFSI", "B2B SaaS", "Digital Transformation", "Supply Chain Tech", "Cloud (GCP / Azure)", "SAP"],
  },
  {
    category: "Tech Stack",
    items: ["React", "GCP", "Azure", "REST APIs", "WCAG AA"],
  },
  {
    category: "Soft Skills",
    items: ["Stakeholder Mgmt", "Cross-functional Leadership", "Executive Communication", "Design Thinking"],
  },
];

export const certifications = [
  { icon: "🏅", name: "PSM I — Scrum Master", issuer: "Scrum.org · 2025" },
  { icon: "☁️", name: "Azure Fundamentals AZ-900", issuer: "Microsoft · 2020" },
  { icon: "📊", name: "Excel Data Analytics", issuer: "2020" },
];

export const education = [
  { degree: "MBA — IT & Finance", institute: "IIM Lucknow", year: "2024 – 2026" },
  { degree: "B.E. (Hons.) Chemical Engineering", institute: "BITS Pilani", year: "2015 – 2019" },
];

export const examScores = [
  { label: "XAT '24", score: "99.3%ile", detail: "VA & LR" },
  { label: "XAT '22", score: "Top 0.4%ile", detail: "" },
  { label: "JEE Main '15", score: "Top 0.9%ile", detail: "" },
  { label: "IELTS", score: "Band 8", detail: "" },
];
