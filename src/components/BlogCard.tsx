import Link from "next/link";
import { type BlogPost } from "@/content/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="card cardPad">
      <div className="kicker">{post.date} • {post.readTime}</div>
      <div className="itemTitle">{post.title}</div>
      <p className="itemSub">{post.summary}</p>
      <Link className="btn" href={`/blog/${post.slug}`}>Read →</Link>
    </div>
  );
}
