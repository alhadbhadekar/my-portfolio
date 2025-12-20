import { notFound } from "next/navigation";
import Section from "@/components/Section";
import { posts } from "@/content/blog";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <Section title={post.title} subtitle={`${post.date} • ${post.readTime}`}>
      <div className="card cardPad">
        <p className="muted">{post.summary}</p>
        <hr className="hr" />
        {post.body.map((para, idx) => (
          <p key={idx} className="muted" style={{ marginTop: 10 }}>
            {para}
          </p>
        ))}
      </div>
    </Section>
  );
}
