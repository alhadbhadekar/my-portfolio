export const work = [
  {
    id: "comcast",
    company: "Comcast",
    title: "Software Development Engineer III",
    location: "Philadelphia, PA",
    range: "Feb 2023 — Present",
    stack: [
    "Go",
    "Python",
    "AI/ML",
    "LLMs",
    "RAG",
    "LangChain",
    "LangGraph",
    "gRPC",
    "Kubernetes (EKS)",

    // GenAI / ML depth
    "Generative AI",
    "Hugging Face",
    "Embeddings",
    "Vector Databases",
    "Sentence-BERT (SBERT)",
    "Isolation Forest",
    "Anomaly Detection",
    "NLP",
    "MLOps",
    "Model Retraining",
    "Streamlit",

    // Backend / Platform
    "REST APIs",
    "GraphQL",
    "Protobuf",
    "PostgreSQL",
    "MongoDB",

    // Cloud / Infra
    "AWS",
    "Docker",
    "Helm",
    "CI/CD",
    "Jenkins",
    "Concourse",

    // Observability
    "Prometheus",
    "Grafana",
    "ELK Stack",
    "Kafka",
    "Kinesis"
    ],
    summary:
      "Building cloud-native backend platforms and AI-driven operational intelligence (smart alerting, anomaly detection, and RAG-based incident assistance).",
    bullets: [
      "Designed, developed, and maintained cloud-native microservices using Go and Python with REST/gRPC/GraphQL contracts for scalable production workloads.",
      "Implemented Protobuf-based gRPC services to reduce latency and improve throughput for internal service-to-service communication.",
      "Built event-driven workflows using async processing patterns (worker pools, retries, queues) for reliable, scalable operations.",
      "Implemented end-to-end observability with ELK + Prometheus/VictoriaMetrics and built Grafana dashboards for KPIs (latency, errors, resource usage, pod health).",
      "Integrated alerting with runbooks/escalation paths to reduce MTTR and improve operational reliability on critical systems.",
      "Built anomaly-detection pipelines using Isolation Forest and SBERT embeddings to classify logs and detect unusual operational patterns.",
      "Developed RAG-style LLM workflows to summarize incident context (KB/outages/RCA notes) and accelerate investigation and response.",
      "Deployed and operated services on AWS and Kubernetes, with CI/CD automation via Jenkins and Concourse."
    ]
  },

  {
    id: "pelmorex",
    company: "Pelmorex Corp (The Weather Network)",
    title: "Software Developer",
    location: "Toronto, Canada",
    range: "Nov 2021 — Feb 2023",
    stack: [
      "Go",
      "Python",
      "OpenAI (GPT-3)",
      "REST APIs",
      "GraphQL",
      "gRPC",
      "Protobuf",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "Istio",
      "AWS",
      "Terraform",
      "Jenkins",
      "ELK",
      "Grafana",
      "CloudWatch",
      "K6"
    ],
    summary:
      "Built high-performance backend services and platform capabilities for weather systems, with strong focus on reliability and observability.",
    bullets: [
      "Designed and developed REST and GraphQL microservices in Go and Python, supporting high throughput workloads (1,000+ requests/sec).",
      "Built gRPC services with Protobuf to reduce communication overhead for upstream consumers.",
      "Architected event-driven systems on AWS and helped migrate legacy components into scalable, fault-tolerant cloud services.",
      "Implemented Redis caching and PostgreSQL optimizations to improve response times and scalability.",
      "Built CI/CD pipelines in Jenkins and automated infrastructure using Terraform/CloudFormation and container orchestration.",
      "Implemented observability using ELK, Grafana, and CloudWatch; added load testing with K6 to prevent performance regressions.",
      "Delivered an LLM-based alert summarization feature (GPT-3) to generate clear user-friendly summaries from complex weather data."
    ]
  },

  {
    id: "habitat-learn",
    company: "The Habitat Learn",
    title: "Backend Developer",
    location: "Toronto, Canada",
    range: "Aug 2020 — Nov 2021",
    stack: [
      "Python",
      "Django",
      "Node.js",
      "React",
      "GraphQL",
      "TypeScript",
      "PostgreSQL",
      "AWS",
      "Terraform",
      "Kubernetes",
      "Jenkins",
      "Azure AD SSO",
      "IoT (MQTT)",
      "ElectronJS"
    ],
    summary:
      "Built backend APIs and full-stack features for web platforms and IoT-connected systems.",
    bullets: [
      "Built backend REST and GraphQL APIs using Python (Django) and Node.js to support core product experiences.",
      "Developed full-stack features using React, Redux, and modern JavaScript/TypeScript patterns.",
      "Designed scalable architectures and optimized databases for performance and reliability.",
      "Implemented secure authentication with Azure AD Single Sign-On (SSO).",
      "Built an MQTT-based camera management system for real-time device communication and control.",
      "Developed an ElectronJS desktop app for factory camera testing and operations workflows."
    ]
  },

  {
    id: "rbc-security",
    company: "Royal Bank of Canada",
    title: "Senior Network Security Analyst / Python Developer",
    location: "Toronto, Canada",
    range: "Feb 2019 — Jul 2020",
    stack: [
      "Python",
      "Flask",
      "FastAPI",
      "Django",
      "REST APIs",
      "React",
      "GraphQL",
      "AWS",
      "MSSQL",
      "Tableau",
      "ServiceNow",
      "ELK",
      "Jenkins",
      "Terraform",
      "Check Point",
      "Palo Alto"
    ],
    summary:
      "Built automation and backend services for enterprise security analytics and reporting.",
    bullets: [
      "Developed and maintained backend services and REST APIs using Python frameworks (Flask/FastAPI/Django).",
      "Automated ServiceNow data extraction and pipelines feeding Tableau dashboards for security and operational visibility.",
      "Designed MSSQL tables and automated imports to support reporting and analytics workflows.",
      "Integrated with security devices (Check Point, Palo Alto) and processed JSON/XML data from external systems.",
      "Implemented logging, monitoring, and troubleshooting workflows using Filebeat/Logstash/Kibana.",
      "Provided incident response support and root cause analysis for production/security issues."
    ]
  },

  {
    id: "secure-sense",
    company: "Secure Sense Solutions",
    title: "Tier 2 Network Analyst",
    location: "Toronto, Canada",
    range: "Feb 2018 — Feb 2019",
    stack: [
      "Networking",
      "Firewalls",
      "Log Analysis",
      "Security Operations",
      "Incident Response"
    ],
    summary:
      "Provided MSSP client support, troubleshooting, and security monitoring across network infrastructure.",
    bullets: [
      "Provided network support for MSSP clients and troubleshot network and firewall issues.",
      "Analyzed firewall/network activity logs to identify anomalous behavior and operational risks.",
      "Followed and improved support practices and procedures for maintaining security devices."
    ]
  },

  {
    id: "forsythe",
    company: "Forsythe Technology",
    title: "Analyst II",
    location: "Toronto, Canada",
    range: "May 2017 — Jan 2018",
    stack: ["ServiceNow", "Change Management", "ITSM", "Process Improvement"],
    summary:
      "Supported change management delivery and implementations using ServiceNow tooling and ITSM practices.",
    bullets: [
      "Delivered change management and implementation services using ServiceNow Change Management.",
      "Coordinated changes with stakeholders to ensure controlled rollouts and minimal disruption."
    ]
  },

  {
    id: "trustwave",
    company: "Trustwave",
    title: "TAC Analyst",
    location: "Toronto, Canada",
    range: "Aug 2016 — May 2017",
    stack: [
      "SIEM",
      "Networking",
      "Log Analysis",
      "Bash",
      "Troubleshooting",
      "Linux/Windows"
    ],
    summary:
      "Provided technical support for SIEM customers, troubleshooting networking issues and building small automations.",
    bullets: [
      "Provided technical support to SIEM customers and troubleshot networking-related issues.",
      "Performed log analysis and supported integrations across vendors, databases, and operating systems.",
      "Wrote Bash scripts to automate repetitive operational processes."
    ]
  },

  {
    id: "checkpoint",
    company: "Check Point Software Technologies",
    title: "Tier-2 Network Security Support Engineer",
    location: "Mumbai, India",
    range: "Jan 2016 — Aug 2016",
    stack: [
      "Network Security",
      "Firewalls",
      "Troubleshooting",
      "Root Cause Analysis",
      "RMA Handling",
      "Customer Support"
    ],
    summary:
      "Supported enterprise firewall and management products through deep troubleshooting and customer-facing RCA.",
    bullets: [
      "Provided chat/phone/email support for client networking and product performance issues.",
      "Performed root cause analysis and coordinated with stakeholders to resolve critical incidents.",
      "Managed RMAs for firewall and management products when hardware replacements were required."
    ]
  }
];
