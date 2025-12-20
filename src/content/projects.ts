export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  stack: string[];
  links?: { github?: string; demo?: string; writeup?: string };
};

export const projects: Project[] = [
  {
    slug: "anomaly-detection",
    title: "Anomaly & Unseen Log Detection",
    category: "ML / Observability",
    summary: "Detects anomalous and novel log patterns with retraining support and explainable output.",
    stack: ["Python", "SBERT", "Isolation Forest", "Streamlit"],
    links: { github: "https://github.com/yourhandle/yourrepo" }
  },
  {
    slug: "k8s-event-service",
    title: "Kubernetes Event Notification Service",
    category: "Backend / Platform",
    summary: "Event-driven service with persistence, retries, worker pool, and structured logging.",
    stack: ["Go", "Gin", "PostgreSQL", "Kubernetes", "gRPC"]
  },
  {
    slug: "portfolio",
    title: "Portfolio Website (This Site)",
    category: "Frontend",
    summary: "Next.js static export portfolio with timelines, blog, and dark mode.",
    stack: ["Next.js", "TypeScript", "CSS"],
    links: { github: "https://github.com/yourhandle/my-portfolio" }
  }
];

export const featuredProjects = projects.slice(0, 3);
