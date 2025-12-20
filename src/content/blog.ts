export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  body: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "building-reliable-services",
    title: "Building Reliable Services: Retries, Idempotency, and Timeouts",
    date: "2025-12-10",
    readTime: "5 min",
    summary: "Practical patterns to make services resilient without making them complicated.",
    body: [
      "Reliability is a product feature. Start with clear timeouts and bounded retries.",
      "Make your write operations idempotent with request keys and dedupe.",
      "Observe everything: structured logs, metrics, traces, and dashboards tied to SLOs."
    ]
  },
  {
    slug: "better-devex",
    title: "Improving DevEx with CI/CD and Automation",
    date: "2025-11-22",
    readTime: "4 min",
    summary: "Small pipeline improvements that compound into faster, safer releases.",
    body: [
      "Optimize for fast feedback: lint, unit tests, and typechecks early.",
      "Use build caches and consistent environments (Docker) to reduce flakiness.",
      "Automate repetitive chores so engineers focus on shipping value."
    ]
  }
];
