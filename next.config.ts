import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

/**
 * IMPORTANT:
 * - User site (username.github.io) → basePath = ""
 * - Project site (username.github.io/repo-name) → basePath = "/repo-name"
 *
 * GitHub Actions sets GITHUB_REPOSITORY as "username/repo-name"
 */
const repo =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

const basePath = isGithubPages && repo ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  basePath,
  assetPrefix: basePath
};

export default nextConfig;
