/**
 * Featured project data.
 *
 * Deliberately a typed module rather than MDX or a CMS: there are two projects,
 * the shape is uniform, and TypeScript then guarantees every case-study page
 * has the fields its template renders. MDX earns its place when prose starts
 * needing custom layout per project — not yet.
 *
 * Every claim below is traceable to the repo's README or the resume. Nothing
 * is embellished, because the whole point is being able to defend it in an
 * interview. (lexiwaves.com is no longer reachable, so there is deliberately
 * no `live` URL on it — a dead demo link costs more than no link.)
 */

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  /** Rendered as the card's one-line hook. Keep under ~100 chars. */
  summary: string;
  year: string;
  role: string;
  /** Shown as chips on the card — keep to the 4 most load-bearing. */
  stack: string[];
  /** Full breakdown, grouped, for the case-study page. */
  stackDetail: { group: string; items: string[] }[];
  repo: string;
  live?: string;
  /**
   * Text-drawn architecture sketch rendered in the card's terminal window.
   * Decorative (aria-hidden) — the same information exists as prose. Keep
   * lines ≤ 46 chars so it never overflows its panel.
   */
  diagram: string;
  /** What the system actually does, in prose. */
  overview: string[];
  /** The parts worth interrogating in an interview. */
  highlights: { title: string; body: string }[];
};

export const projects: Project[] = [
  {
    slug: "lexiwaves",
    name: "LexiWaves",
    tagline: "Live language-learning marketplace",
    summary:
      "Students meet tutors in live video sessions — Socket.IO chat, Agora video, Stripe payments, deployed on AWS.",
    year: "2025",
    role: "Solo build — architecture, backend, frontend, CI/CD",
    stack: ["Django", "React", "PostgreSQL", "AWS"],
    stackDetail: [
      {
        group: "Backend",
        items: [
          "Django 4.x + DRF",
          "PostgreSQL",
          "Redis",
          "Celery",
          "Socket.IO",
          "AWS S3",
        ],
      },
      {
        group: "Frontend",
        items: [
          "React 18",
          "Redux Toolkit",
          "Tailwind CSS",
          "Framer Motion",
          "WebSocket client",
        ],
      },
      {
        group: "Integrations & Ops",
        items: [
          "Agora (live video)",
          "Stripe (payments)",
          "JWT + OAuth",
          "Docker · GitHub Actions",
          "SonarCloud · Pytest",
          "AWS EC2",
        ],
      },
    ],
    repo: "https://github.com/shinas07/LexiWaves",
    diagram: `learner ── ws ──→ socket.io ─┐
tutor ─── rtc ──→ agora ─────┼─→ django/drf
admin ── rest ──→ api ───────┘      │
                                    ▼
        postgres · redis · celery · s3
                stripe → webhooks → tasks`,
    overview: [
      "LexiWaves connects language learners with tutors through live one-to-one video sessions, structured courses and a shared community space. It is a three-sided system: learners book and track progress, tutors author courses and watch engagement, and administrators gate course quality and handle revenue distribution.",
      "The interesting problem is not CRUD — it is that the three roles disagree about what the same object means. A course is a draft to its tutor, a review-queue item to an admin, and a purchase to a learner. The Django apps are split along those role boundaries rather than by technical layer, so a permission change lives in exactly one place.",
    ],
    highlights: [
      {
        title: "Live by design, not bolted on",
        body: "Community and classroom chat run over Socket.IO alongside the REST API, and live video sessions go through Agora — so Django keeps one auth model across everything real-time instead of a second service with its own session logic. Redis backs both the channel layer and the cache.",
      },
      {
        title: "Celery for anything a user should not wait on",
        body: "Certificate generation, email and post-purchase bookkeeping run as background tasks. The HTTP request returns as soon as the write is durable, which keeps request latency independent of how slow the slowest side effect is.",
      },
      {
        title: "Auth and payments done properly",
        body: "JWT with OAuth sign-in, Stripe for course purchases, rate limiting on the surfaces cheapest to abuse, and validation at the serializer boundary. Payments and auth are exactly the two places where 'mostly works' is indistinguishable from broken.",
      },
      {
        title: "Quality gates in CI, not in review",
        body: "GitHub Actions runs the Pytest suite and publishes coverage, security and maintainability ratings to SonarCloud on every push, then ships the Dockerized services to AWS EC2. The README badges are generated, not decorative — regressions fail visibly.",
      },
    ],
  },
  {
    slug: "healthcare-equipment-api",
    name: "Healthcare Equipment API",
    tagline: "Async FastAPI service, layered properly",
    summary:
      "Hospital departments, inventory and requests behind one clean async API — with AI-assisted risk assessment.",
    year: "2026",
    role: "Solo build — architecture, data modelling, tests",
    stack: ["FastAPI", "SQLAlchemy 2.x", "PostgreSQL", "Pydantic v2"],
    stackDetail: [
      {
        group: "Framework",
        items: ["FastAPI", "Pydantic v2", "Uvicorn"],
      },
      {
        group: "Data",
        items: [
          "SQLAlchemy 2.x (async)",
          "Alembic",
          "PostgreSQL (asyncpg)",
          "SQLite (aiosqlite)",
        ],
      },
      {
        group: "Testing",
        items: ["Pytest", "HTTPX"],
      },
    ],
    repo: "https://github.com/shinas07/mini-healthcare-equipment-api",
    diagram: `request ──→ api/v1 ──→ services
              │            │
          pydantic      business
          schemas        rules
                           │
                     repositories
                           │
             sqlalchemy async · asyncpg`,
    overview: [
      "An async backend for managing hospital departments, equipment inventory and the requests that move equipment between them, with an AI-based risk assessment step on requests.",
      "It is deliberately small so the architecture is legible. Routes in `api/v1` only translate HTTP into calls; business rules live in `services`; persistence lives in `repositories`; and `schemas` defines the contract in Pydantic. A route never touches the ORM — which is what makes the rules testable without spinning up a web server.",
    ],
    highlights: [
      {
        title: "Async all the way down",
        body: "SQLAlchemy 2.x's async engine with asyncpg means a request waiting on the database releases the event loop instead of pinning a worker. That only pays off if nothing blocking sneaks into the path — which is the real discipline of an async codebase, not the syntax.",
      },
      {
        title: "The same code runs on Postgres or SQLite",
        body: "asyncpg in production, aiosqlite for tests. The test suite gets a real database with real constraints and no container to start, while production keeps Postgres semantics. Alembic keeps the schema reproducible rather than hand-migrated.",
      },
      {
        title: "Business rules tested directly",
        body: "test_equipment_request_rules.py exercises the request rules as functions, not through the HTTP layer. Rule tests stay fast and stop breaking every time a route's URL or response envelope changes.",
      },
      {
        title: "One consistent response envelope",
        body: "api/response.py and api/exceptions.py centralise success and error shapes, so every endpoint fails the same way. Clients write one error handler instead of one per route — nearly free on day one, expensive to retrofit.",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
