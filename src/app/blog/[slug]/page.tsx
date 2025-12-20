import { notFound } from "next/navigation";
import Section from "@/components/Section";
import { posts } from "@/content/blog";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
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
