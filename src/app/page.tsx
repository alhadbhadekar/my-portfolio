"use client";

import { useRef } from "react"; // Added useRef
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";

const HOME_SKILLS = [
  { name: "Go", img: "skills/go.svg" },
  { name: "Python", img: "skills/python.svg" },
  { name: "Node.js", img: "skills/nodejs.svg" },
  { name: "TypeScript", img: "skills/typescript.svg" },
  { name: "LangGraph", img: "skills/langgraph.png" },
  { name: "LangChain", img: "skills/langgraph.png" },
  { name: "HuggingFace", img: "skills/huggingface.svg" },
  { name: "TensorFlow", img: "skills/tensorflow.png" },
  { name: "PyTorch", img: "skills/pytorch.svg" },
  { name: "Scikit-learn", img: "skills/scikitlearn.svg" },
  { name: "MLOps", img: "skills/mlops.png" },
  { name: "Kubernetes", img: "skills/kubernetes.png" },
  { name: "AWS", img: "skills/aws.png" },
  // { name: "GCP", img: "skills/gcp.svg" },
  // { name: "Azure", img: "skills/azure.svg" },
  { name: "Docker", img: "skills/docker.png" },
  { name: "Terraform", img: "skills/terraform.svg" },
  { name: "Helm", img: "skills/helm.png" },
  { name: "VictoriaMetrics", img: "skills/victoriametrics.webp" },
  { name: "gRPC", img: "skills/grpc.webp" },
  { name: "Rest API", img: "skills/restapi.png" },
  { name: "GraphQL", img: "skills/graphql.png" },
  { name: "Kafka", img: "skills/kafka.png" },
  { name: "Redis", img: "skills/redis.svg" },
  { name: "PostgreSQL", img: "skills/postgres.png" },
  { name: "MongoDB", img: "skills/mongodb.png" },
  { name: "Elasticsearch", img: "skills/elasticsearch.svg" },
  { name: "Kibana", img: "skills/kibana.png" },
  { name: "Grafana", img: "skills/grafana.webp" },
  { name: "Jenkins", img: "skills/jenkins.png" },
  { name: "Concourse", img: "skills/concourse.svg" },
];

export default function HomePage() {
  // Create a ref for the scrollable container
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <div className="hero">
        <div className="heroGrid">
          <div 
            className="card cardPad" 
            style={{ display: "flex", flexDirection: "column", minHeight: '100%' }}
          >
            <p className="kicker">{profile.role}</p>
            <h1 className="h1" style={{ marginTop: 6 }}>{profile.name}</h1>
            <p className="lede" style={{ marginTop: 14 }}>{profile.tagline}</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
              {profile.pills.map((pill) => (
                <span 
                  key={pill} 
                  className="kicker" 
                  style={{ 
                    padding: "4px 12px", 
                    borderRadius: 20, 
                    backgroundColor: "var(--panel-2)", 
                    border: "1px solid var(--border)",
                    fontSize: "12px",
                    color: "var(--text)" 
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
              <Link className="btn btnPrimary" href="/projects">View Projects</Link>
              <Link className="btn" href="/work">Work Timeline</Link>
            </div>

            <div style={{ marginTop: "auto", paddingTop: 40, display: "flex", gap: 20, alignItems: "center" }}>
              <a href={profile.links.github} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--muted)" }}>
                <img src="skills/github.png" alt="" style={{ width: 18, height: 18, opacity: 0.8 }} />
                Github
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--muted)" }}>
                <img src="skills/linkedin.svg" alt="" style={{ width: 18, height: 18, opacity: 0.8 }} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="card cardPad" style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "100%", maxWidth: 320, aspectRatio: "3 / 4", borderRadius: 24, padding: 3, background: "linear-gradient(135deg, var(--brand), var(--brand-2))", boxShadow: "0 30px 80px rgba(0,0,0,0.45)", overflow: "hidden" }}>
              <img src="me.jpg" alt={profile.name} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 20 }} />
            </div>
          </div>
        </div>
      </div>

      {/* ================= SKILLS (IMAGES) WITH ARROWS ================= */}
      <Section
        title="Technical Expertise"
        subtitle="Specializing in high-performance backends and production AI systems."
      >
        {/* Removed 'group' from style here */}
        <div style={{ position: "relative" }} className="skillsContainer">
          
          {/* Left Arrow */}
          <button 
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            style={{
              position: "absolute", 
              left: -20, 
              top: "50%", 
              transform: "translateY(-50%)",
              zIndex: 10, 
              background: "var(--panel-2)", 
              border: "1px solid var(--border)",
              borderRadius: "50%", 
              width: 32, 
              height: 32, 
              cursor: "pointer", 
              color: "var(--brand)",
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "transform 0.2s ease" // Added a subtle transition
            }}
          >
            ←
          </button>

          <div className="skillsScrollerWrapper">
            <div 
              className="skillsScroller" 
              ref={scrollRef} 
              style={{ 
                scrollBehavior: "smooth", 
                overflowX: "auto",
                msOverflowStyle: 'none',  /* IE and Edge */
                scrollbarWidth: 'none'    /* Firefox */
              }}
            >
              {/* Optional: Add this CSS to your global file to hide scrollbars globally if desired */}
              {/* .skillsScroller::-webkit-scrollbar { display: none; } */}
              
              {HOME_SKILLS.map((s) => (
                <div key={s.name} className="skillItem">
                  <img src={s.img} alt={s.name} />
                  <span>{s.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            style={{
              position: "absolute", 
              right: -20, 
              top: "50%", 
              transform: "translateY(-50%)",
              zIndex: 10, 
              background: "var(--panel-2)", 
              border: "1px solid var(--border)",
              borderRadius: "50%", 
              width: 32, 
              height: 32, 
              cursor: "pointer", 
              color: "var(--brand)",
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "transform 0.2s ease"
            }}
          >
            →
          </button>
        </div>
      </Section>

      {/* ================= PROJECTS + QUICK LINKS ================= */}
      <Section
        title="Featured Work"
        subtitle="High-impact projects ranging from distributed platforms to LLM infrastructure."
      >
        {/* Removed inline gridTemplateColumns to allow CSS to handle stacking */}
        <div className="featured-layout" style={{ display: "grid", gap: 20 }}>
          {/* Projects (Column 1) */}
          <div className="grid3 featured-projects">
            {featuredProjects.map((p, index) => (
              <ProjectCard key={`home-${p.slug}-${index}`} project={p} />
            ))}
          </div>

          <div className="featured-cta" style={{ marginTop: 0 }}>
            <Link className="btn" href="/projects">
              See all projects →
            </Link>
          </div>

          {/* Quick Links / Explore More (Column 2) */}
          <div className="card cardPad featured-explore">
            <p className="sectionTitle">Explore More</p>
            <div style={{ display: "grid", gap: 12 }}>
              <Link className="timelineItem" href="/bio">
                <div className="titleRow">
                  <span className="itemTitle">About Me</span>
                  <span className="kicker">Bio</span>
                </div>
                <p className="itemSub">8+ years of engineering across Finance, Media, and AI. </p>
              </Link>
              <Link className="timelineItem" href="/skills">
                <div className="titleRow">
                  <span className="itemTitle">Full Stack</span>
                  <span className="kicker">Skills</span>
                </div>
                <p className="itemSub">Go, Python, AWS, and MLOps breakdown.</p>
              </Link>
              <Link className="timelineItem" href="/contact">
                <div className="titleRow">
                  <span className="itemTitle">Let's Connect</span>
                  <span className="kicker">Contact</span>
                </div>
                <p className="itemSub">Discuss systems, AI, or collaboration.</p>
              </Link>
            </div>
          </div>
        </div>

        
      </Section>
    </>
  );
}