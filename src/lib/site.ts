/**
 * Single source of truth for identity + links.
 *
 * Role and employer are from LinkedIn (Jul 2026); history from the resume.
 * One constant means a changed email can never be correct in one place and
 * stale in another.
 */
/**
 * Stable production origin. On Vercel, VERCEL_PROJECT_PRODUCTION_URL is the
 * production host (no protocol), injected at build time — no hardcoded domain
 * to forget when one changes.
 */
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const site = {
  name: "Shinas Aman",
  fullName: "Shinas Aman PK",
  role: "Full Stack Engineer",
  company: "Lunar Global Technologies",
  location: "Kerala, India",
  tagline:
    "Full-stack engineer building real-time, high-concurrency systems — exchange order books, live calling platforms, learning marketplaces — in Python and TypeScript.",
  email: "shinasamanpk@gmail.com",
  github: "https://github.com/shinas07",
  linkedin: "https://www.linkedin.com/in/shinas-pk-ba592b270/",
  /** Served from /public — keep in sync with the PDF actually sent to recruiters. */
  resume: "/resume.pdf",
} as const;
