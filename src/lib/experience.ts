/**
 * Work history. The Lunar entry is from LinkedIn (Jul 2026); everything else
 * is condensed from the resume. Bullets are rewritten for the web — shorter,
 * front-loaded — but every claim maps 1:1 to a resume bullet, so nothing on
 * the site outruns what Shinas can defend in an interview.
 */

export type Role = {
  company: string;
  title: string;
  location: string;
  period: string;
  current?: boolean;
  /** One line of context: what the product actually is. */
  summary: string;
  /**
   * Optional so a brand-new role can ship with just a summary line.
   * Client-project bullets stay deliberately shallow — project name and role
   * only, no architecture, business model, pricing or vendor details — until
   * the company's disclosure rules for it have been checked.
   */
  bullets?: string[];
};

export const experience: Role[] = [
  {
    company: "Lunar Global Technologies",
    title: "Full Stack Engineer",
    // Company is Gurugram-based; Shinas works remotely from Kerala. Stating
    // both stops "Remote" from being read against his Kerala home base.
    location: "Gurugram · Remote",
    period: "May 2026 — Present",
    current: true,
    summary:
      "Affordable Justice — a legal-tech platform for the UAE. I lead delivery as PM and build across the stack with the team.",
    bullets: [
      "Lead the architecture and Python backend services, and contribute across the React frontends alongside the frontend team",
      "Double as project manager — roadmap, scope and delivery for the team",
    ],
  },
  {
    company: "Simplicitylabs",
    title: "Sr. Software Engineer",
    location: "Gurugram",
    period: "Apr 2025 — May 2026",
    summary:
      "Multi-chain crypto exchange supporting BTC, ETH, Polygon and BSC.",
    bullets: [
      "Built the off-chain order-book matching engine and its real-time WebSocket feed, with Redis backing the hot path",
      "Designed the custodial wallet system holding user funds across four chains",
      "Split the platform into Django, FastAPI and RabbitMQ services — failures stay isolated, deploys stay independent",
      "Moved high-concurrency background work onto Celery pipelines; tuned PostgreSQL indexes and verified the result under load with k6",
    ],
  },
  {
    company: "Zartek",
    title: "Freelance Backend Developer",
    location: "Kochi",
    period: "Jan — Mar 2025",
    summary:
      "Real-time internet-calling platform connecting customers with agents.",
    bullets: [
      "Rewrote the existing Django backend in FastAPI, cutting latency under concurrent call load",
      "Built a pluggable payment layer — gateways swap by config, not by code change",
      "Designed a coin wallet metering calls per second, with recharge plans, referral bonuses and WhatsApp OTP",
      "Integrated the Agora SDK for audio/video calling with automatic disconnect",
    ],
  },
  {
    company: "Brototype",
    title: "Software Developer & Bootcamp Mentor",
    location: "Kerala",
    period: "Jan — Dec 2024",
    summary: "Trained junior developers to production standard.",
    bullets: [
      "Mentored juniors on Django, REST design and microservices through real project work",
      "Ran code reviews and debugging sessions focused on maintainable, production-quality code",
      "Led sessions on clean architecture and system design, bridging bootcamp habits and industry expectations",
    ],
  },
];
