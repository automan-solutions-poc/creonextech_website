import {
  Brain, Cpu, Code2, Globe, Smartphone, Cloud, GitBranch, PenTool,
  Bot, ShieldCheck, BarChart3, Building2, HeartPulse, Landmark,
  GraduationCap, ShoppingBag, Factory, Truck, Building, Rocket,
  Home, Hotel, Search, Map, PencilRuler, Hammer, TestTube2, Headphones
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Technologies", href: "#technologies" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  { icon: Brain, title: "AI Solutions", desc: "Custom generative AI, LLM agents and intelligent copilots wired into your core workflows." },
  { icon: Cpu, title: "Machine Learning", desc: "Predictive models, recommendation engines and MLOps pipelines built to scale." },
  { icon: Code2, title: "Custom Software", desc: "Bespoke platforms engineered around your exact business logic and growth path." },
  { icon: Globe, title: "Web Development", desc: "Blazing-fast, accessible web apps with pixel-perfect, conversion-driven interfaces." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native and cross-platform apps that feel effortless on every device." },
  { icon: Cloud, title: "Cloud Computing", desc: "Resilient cloud architecture on AWS, Azure and GCP with cost governance baked in." },
  { icon: GitBranch, title: "DevOps", desc: "CI/CD, infrastructure-as-code and observability for ship-anytime confidence." },
  { icon: PenTool, title: "UI/UX Design", desc: "Research-led product design systems that turn complexity into clarity." },
  { icon: Bot, title: "RPA Automation", desc: "Automate repetitive operations and free your teams for higher-value work." },
  { icon: ShieldCheck, title: "Cyber Security", desc: "Zero-trust security, audits and threat monitoring to protect what matters." },
  { icon: BarChart3, title: "Data Analytics", desc: "Real-time dashboards and data platforms that turn signals into decisions." },
  { icon: Building2, title: "Enterprise Apps", desc: "ERP, CRM and internal tooling modernised for scale, speed and security." },
];

export const STATS = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Global Clients" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Dedicated Support" },
];

export const VALUES = [
  { title: "Innovation", desc: "We treat emerging tech as a toolkit, not a trend — shipping what actually moves metrics." },
  { title: "Scalability", desc: "Architectures designed to carry you from first user to first million without a rewrite." },
  { title: "Security", desc: "Security and compliance considered from line one, not bolted on before launch." },
  { title: "Performance", desc: "Sub-second experiences and lean systems that respect users and budgets alike." },
  { title: "Transparency", desc: "Clear roadmaps, honest timelines and shared dashboards — no black boxes." },
  { title: "Experienced Team", desc: "Senior engineers, designers and strategists who have shipped at global scale." },
];

export const INDUSTRIES = [
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Landmark, name: "Finance" },
  { icon: GraduationCap, name: "Education" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Truck, name: "Logistics" },
  { icon: Building, name: "Government" },
  { icon: Rocket, name: "Startups" },
  { icon: Home, name: "Real Estate" },
  { icon: Hotel, name: "Hospitality" },
];

export const TECHNOLOGIES = [
  "React", "Angular", "Node.js", "Python", "Java", "Spring Boot", ".NET",
  "Flutter", "React Native", "AWS", "Azure", "Google Cloud", "Docker",
  "Kubernetes", "PostgreSQL", "MongoDB", "Redis", "TensorFlow", "PyTorch",
  "OpenAI", "Gemini", "Claude",
];

export const PORTFOLIO = [
  {
    title: "NeuralDesk",
    category: "AI Platform",
    stack: ["React", "Python", "OpenAI"],
    desc: "An enterprise AI support copilot resolving 68% of tickets autonomously.",
    image: "https://images.unsplash.com/photo-1768121496378-0644c37e7fc7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwZGFyayUyMG9mZmljZSUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3ODQ0NjAxOTd8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "VaultPay",
    category: "FinTech",
    stack: ["Node.js", "PostgreSQL", "AWS"],
    desc: "A PCI-compliant payments core processing $2B+ in annual volume.",
    image: "https://images.pexels.com/photos/26547201/pexels-photo-26547201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "MediSync",
    category: "HealthTech",
    stack: ["Flutter", "TensorFlow", "GCP"],
    desc: "A clinical scheduling & diagnostics suite deployed across 40 hospitals.",
    image: "https://images.pexels.com/photos/8369249/pexels-photo-8369249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "FleetIQ",
    category: "Logistics",
    stack: ["React", "Kubernetes", "Redis"],
    desc: "Real-time fleet optimisation cutting delivery costs by 31%.",
    image: "https://images.unsplash.com/photo-1539630417222-d685b659ffcc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYnVzaW5lc3MlMjB0ZWFtJTIwbWVldGluZyUyMGRhcmt8ZW58MHx8fHwxNzg0NDYwMTk3fDA&ixlib=rb-4.1.0&q=85",
  },
];

export const PROCESS = [
  { icon: Search, title: "Discovery", desc: "We immerse in your business, users and goals to define what truly matters." },
  { icon: Map, title: "Planning", desc: "Architecture, roadmap and success metrics agreed before a line is written." },
  { icon: PencilRuler, title: "Design", desc: "Prototypes and design systems validated with real users, fast." },
  { icon: Hammer, title: "Development", desc: "Agile sprints with weekly demos and always-shippable increments." },
  { icon: TestTube2, title: "Testing", desc: "Automated + manual QA, security and performance hardening." },
  { icon: Rocket, title: "Deployment", desc: "Zero-downtime releases with full observability from day one." },
  { icon: Headphones, title: "Support", desc: "24/7 monitoring, SLAs and continuous iteration post-launch." },
];

export const TESTIMONIALS = [
  { name: "Sarah Whitman", company: "VP Engineering, Northwind", quote: "CreonexTech rebuilt our platform in months, not years. Their AI team is genuinely world-class." },
  { name: "David Okafor", company: "CTO, VaultPay", quote: "The most senior, low-drama engineering partner we have worked with. They ship, and they ship well." },
  { name: "Aiko Tanaka", company: "Head of Product, MediSync", quote: "They translated a chaotic vision into a clean, scalable product. Adoption exceeded every target." },
  { name: "Marcus Reed", company: "CEO, FleetIQ", quote: "ROI was visible in the first quarter. Transparent, fast, and obsessed with quality." },
];

export const MANIFESTO = [
  { no: "01", title: "Our Mission", body: "To engineer intelligent digital systems that compound value for the businesses and people who depend on them." },
  { no: "02", title: "Our Vision", body: "A world where every organisation — from startup to enterprise — operates with the software leverage of a tech giant." },
  { no: "03", title: "Our Approach", body: "Senior teams, small feedback loops and relentless craft. We build like it is our own company on the line." },
];

export const TIMELINE = [
  { year: "2016", text: "Founded with a three-person team and a single enterprise client." },
  { year: "2019", text: "Opened our AI & Data practice; crossed 25 delivered products." },
  { year: "2022", text: "Expanded to three continents and 100+ engineers." },
  { year: "2025", text: "Recognised among the top emerging digital transformation partners." },
];

export const JOBS = [
  { role: "Senior AI Engineer", location: "Remote · Global", type: "Full-time", dept: "Engineering" },
  { role: "Lead Product Designer", location: "London · Hybrid", type: "Full-time", dept: "Design" },
  { role: "Cloud Solutions Architect", location: "Remote · EU", type: "Full-time", dept: "Cloud" },
  { role: "DevOps Engineer", location: "Bengaluru · Hybrid", type: "Full-time", dept: "Platform" },
  { role: "Cyber Security Analyst", location: "Remote · Global", type: "Full-time", dept: "Security" },
];

export const BENEFITS = [
  "Remote-first culture", "Learning budget", "Top-tier hardware",
  "Health & wellness", "Equity for all", "Flexible hours",
];

export const INSIGHTS = [
  { tag: "AI", title: "Designing LLM agents that enterprises can actually trust", date: "Dec 2025" },
  { tag: "Cloud", title: "FinOps in 2026: cutting cloud spend without slowing teams", date: "Nov 2025" },
  { tag: "Security", title: "Zero-trust isn't a product — it's an operating model", date: "Nov 2025" },
];

export const AWARDS = [
  "Clutch Top Developer 2025", "Awwwards Honoree", "ISO 27001 Certified",
  "Great Place to Work", "AWS Advanced Partner",
];

export const FAQS = [
  { q: "How do you price projects?", a: "We offer fixed-scope and dedicated-team models. After a short discovery, you receive a transparent estimate with milestones and no hidden fees." },
  { q: "How quickly can we start?", a: "Most engagements kick off within 1–2 weeks. Urgent projects can be staffed faster with our bench of senior engineers." },
  { q: "Do you sign NDAs and own IP transfer?", a: "Always. You retain full ownership of all code and IP, and we're happy to sign your NDA before the first call." },
  { q: "Can you work with our existing team?", a: "Absolutely. We embed with in-house teams as an extension, or run fully independent squads — whichever fits your workflow." },
  { q: "What happens after launch?", a: "We provide 24/7 monitoring, SLAs and continuous iteration. Many clients keep a dedicated squad for ongoing product evolution." },
];

export const CLIENT_LOGOS = ["NORTHWIND", "VAULTPAY", "MEDISYNC", "FLEETIQ", "ORBITAL", "HELIXBANK"];
