import Section from "@/components/Section";
import { posts } from "@/content/blog";
import BlogCard from "@/components/BlogCard";

export default function BlogPage() {
  return (
    <Section title="Blog" subtitle="Short technical notes, learnings, and write-ups.">
      <div className="grid3">
        {posts.map((p) => (
          <BlogCard key={p.slug} post={p} />
        ))}
      </div>
    </Section>
  );
}
