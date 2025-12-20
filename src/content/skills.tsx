import {
  FaPython,
  FaDocker,
  FaAws,
  FaNodeJs,
  FaJava,
  FaRobot,
  FaDatabase,
  FaInfinity,
  FaServer
} from "react-icons/fa";

import {
  SiGo,
  SiTypescript,
  SiKubernetes,
  SiPostgresql,
  SiMongodb,
  SiGrafana,
  SiPrometheus,
  SiTensorflow,
  SiPytorch,
  SiHuggingface,
  SiLangchain,
  SiScikitlearn,
  SiTerraform,
  SiApachekafka,
  SiRedis,
  SiGraphql,
  SiElasticstack,
  SiDocker,
  SiJenkins, 
  SiConcourse
} from "react-icons/si";

import { HiOutlineCpuChip } from "react-icons/hi2";
import { MdAutoAwesome } from "react-icons/md";
import { SiOpenai } from "react-icons/si";

export const skillSections = [
  {
    title: "AI & Machine Learning",
    subtitle: "GenAI, Deep Learning, and Intelligent Systems",
    items: [
      {
        label: "LangGraph / LangChain",
        note: "Agentic orchestration, tools & RAG pipelines",
        icon: <SiLangchain />
      },
      {
        label: "HuggingFace",
        note: "Transformers, SBERT, LLM fine-tuning",
        icon: <SiHuggingface />
      },
      {
        label: "TensorFlow",
        note: "Neural networks & production DL pipelines",
        icon: <SiTensorflow />
      },
      {
        label: "PyTorch",
        note: "Research & custom deep learning models",
        icon: <SiPytorch />
      },
      {
        label: "Scikit-learn",
        note: "Isolation Forest, RF, classical ML",
        icon: <SiScikitlearn />
      },
      {
        label: "MLOps",
        note: "Model versioning, retraining & deployment",
        icon: <HiOutlineCpuChip />
      },
      {
        label: "MCP",
        note: "Model versioning, retraining & deployment",
        icon: <SiOpenai />
      },
      {
        label: "CrewAI",
        note: "Model versioning, retraining & deployment",
        icon: <FaRobot />
      },
      {
        label: "AutoGen",
        note: "Model versioning, retraining & deployment",
        icon: <MdAutoAwesome />
      }
    ]
  },

  {
    title: "Backend & Distributed Systems",
    subtitle: "High-performance APIs and concurrency",
    items: [
      {
        label: "Go",
        note: "gRPC services, concurrency & microservices",
        icon: <SiGo />
      },
      {
        label: "Python",
        note: "FastAPI, Flask, ML services",
        icon: <FaPython />
      },
      {
        label: "Node.js",
        note: "TypeScript APIs & backend tooling",
        icon: <FaNodeJs />
      },
      {
        label: "TypeScript",
        note: "Typed backend & frontend systems",
        icon: <SiTypescript />
      },
      {
        label: "gRPC",
        note: "Low-latency service-to-service APIs",
        icon: <FaServer />
      },
      {
        label: "GraphQL",
        note: "Schema-first APIs & federated services",
        icon: <SiGraphql />
      },
      {
        label: "Kafka",
        note: "Event streaming & async pipelines",
        icon: <SiApachekafka />
      },
      {
        label: "Redis",
        note: "Distributed caching & queues",
        icon: <SiRedis />
      }
    ]
  },

  {
    title: "Cloud & Platform Engineering",
    subtitle: "Cloud-native, IaC & container orchestration",
    items: [
      {
        label: "Kubernetes",
        note: "EKS, GKE, production orchestration",
        icon: <SiKubernetes />
      },
      {
        label: "Docker",
        note: "Containerized microservices",
        icon: <SiDocker />
      },
      {
        label: "Terraform",
        note: "Infrastructure as Code",
        icon: <SiTerraform />
      },
      {
        label: "AWS",
        note: "Scalable cloud-native systems",
        icon: <FaAws />
      },
      {
        label: "Jenkins",
        note: "CI pipelines & automated builds",
        icon: <SiJenkins />
      },
      {
        label: "Concourse",
        note: "Declarative CI/CD pipelines",
        icon: <SiConcourse />
      },
      {
        label: "DevOps / CI-CD",
        note: "Automated pipelines & platform reliability",
        icon: <FaInfinity />
      }
    ]
  },

  {
    title: "Data & Observability",
    subtitle: "Persistence, monitoring & insights",
    items: [
      {
        label: "PostgreSQL",
        note: "Relational & transactional workloads",
        icon: <SiPostgresql />
      },
      {
        label: "MongoDB",
        note: "NoSQL, document & geospatial data",
        icon: <SiMongodb />
      },
      {
        label: "Elasticsearch",
        note: "Search, logs & RCA",
        icon: <SiElasticstack />
      },
      {
        label: "Grafana",
        note: "Dashboards & system visibility",
        icon: <SiGrafana />
      },
      {
        label: "Prometheus",
        note: "Metrics collection & alerting",
        icon: <SiPrometheus />
      },
      {
        label: "Storage Systems",
        note: "S3, object stores & databases",
        icon: <FaDatabase />
      }
    ]
  }
];
