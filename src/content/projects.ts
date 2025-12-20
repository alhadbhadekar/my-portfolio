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
    slug: "my-portfolio",
    title: "Personal Portfolio Website",
    category: "Frontend / Personal",
    summary:
        "Responsive personal portfolio website showcasing work experience, projects, skills, and blog with dark/light mode support.",
    stack: ["Next.js", "React", "TypeScript", "CSS", "GitHub Pages"],
    links: {
        github: "https://github.com/alhadbhadekar/my-portfolio",
        demo: "https://alhadbhadekar.github.io/my-portfolio/"
    }
  },
  {
    slug: "ai-food-calorie-estimator",
    title: "AI Food Calorie Estimator",
    category: "GenAI / Computer Vision",
    summary:
        "Streamlit application that uses OpenAI GPT-4o Vision to analyze food images and estimate calories, macronutrients, ingredients, and serving size for wellness tracking and learning.",
    stack: [
        "Python",
        "Streamlit",
        "OpenAI GPT-4o Vision",
        "Pillow (PIL)",
        "Computer Vision"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/AI_calorie_tracker",
        demo: "https://b-like-a-ai-food-calorie-estimator.streamlit.app/"
    }
  },
  {
    slug: "ai-stock-trading-advisor",
    title: "AI Stock Trading Advisor",
    category: "GenAI / Financial Analysis",
    summary:
        "AI-powered stock analysis and trading advisor built with Streamlit and CrewAI, combining live Yahoo Finance market data with multi-agent reasoning to generate BUY, SELL, or HOLD recommendations.",
    stack: [
        "Python",
        "Streamlit",
        "CrewAI",
        "Groq Llama 3.3",
        "Yahoo Finance (yfinance)",
        "LiteLLM",
        "python-dotenv"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/AI-Stock-Trading-Advisor",
        demo: "https://b-like-a-ai-stock-trading.streamlit.app/"
    }
  },
  {
    slug: "groq-weather-assistant-pydantic-ai",
    title: "Groq Weather Assistant (Pydantic AI)",
    category: "GenAI / Agent Applications",
    summary:
        "Interactive Streamlit weather assistant that answers natural-language queries using Groq-hosted LLaMA 3.1 with Pydantic-AI, fetching real-time data from OpenWeatherMap with robust retry handling.",
    stack: [
        "Python",
        "Streamlit",
        "Groq LLM (LLaMA 3.1)",
        "Pydantic-AI",
        "OpenWeatherMap API",
        "Requests",
        "python-dotenv"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/Groq-Weather-Assistant-Using-Pydantic-AI",
        demo: "https://b-like-a-groq-weather-assistant.streamlit.app/"
    }
  },
  {
    slug: "ai-flight-search-agent",
    title: "AI Flight Search Agent",
    category: "AI / Agentic Systems",
    summary:
        "An AI-powered flight search application that supports natural language queries for one-way and round-trip flights, fetches live pricing via Amadeus, detects airline names, and provides direct booking links using a smart LangGraph-based agent.",
    stack: [
        "Python",
        "Gradio",
        "LangGraph",
        "LangChain",
        "OpenAI",
        "Amadeus API",
        "Tavily Search"
    ],
    links: {
        github: "https://huggingface.co/spaces/alhadbhadekar/AI_Flight_Search_Agent/tree/main",
        demo: "https://huggingface.co/spaces/alhadbhadekar/AI_Flight_Search_Agent"
    }
  },
  {
    slug: "ai-resume-tailoring-studio",
    title: "AI Resume Tailoring Studio (OpenAI + Gemini)",
    category: "AI / LLM Applications",
    summary:
        "End-to-end AI-powered resume rewriting and job-matching platform that cleans, enhances, and tailors resumes to job descriptions, generates cover letters, computes match scores, visualizes keyword gaps, and exports results in PDF/DOCX formats.",
    stack: [
        "Python",
        "Gradio",
        "OpenAI GPT-4o-mini",
        "Google Gemini 2.0 Flash",
        "Pydantic",
        "PyMuPDF",
        "python-docx",
        "ReportLab"
    ],
    links: {
        github: "https://huggingface.co/spaces/alhadbhadekar/AI_Resume_Tailoring_Studio_OpenAI_Gemini/tree/main",
        demo: "https://huggingface.co/spaces/alhadbhadekar/AI_Resume_Tailoring_Studio_OpenAI_Gemini"
    }
  },
  {
    slug: "rag-document-assistant",
    title: "RAG Document Assistant",
    category: "GenAI / RAG Applications",
    summary:
        "Streamlit-based document Q&A assistant that ingests PDFs, builds a local Chroma vector store with Hugging Face embeddings, and answers questions using Groq’s LLaMA-3.3-70B via Retrieval-Augmented Generation.",
    stack: [
        "Python",
        "Streamlit",
        "LangChain",
        "Groq LLaMA 3.3 70B",
        "HuggingFace Embeddings",
        "ChromaDB",
        "RAG"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/b-like-a-RAG-Document-Assistant",
        demo: "https://b-like-a-rag-document-assistant.streamlit.app/"
    }
  },
  {
    slug: "groq-langchain-chatbot",
    title: "💬 Groq + LangChain Chatbot",
    category: "GenAI / Conversational AI",
    summary:
        "Lightweight Streamlit chatbot built with LangChain and Groq’s LLaMA 3.3 (70B) model, providing fast, session-based conversational AI through a clean web interface.",
    stack: [
        "Python",
        "Streamlit",
        "LangChain",
        "Groq LLaMA 3.3 70B",
        "langchain-groq",
        "python-dotenv"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/chatbot_langchain_groq",
        demo: "https://b-like-a-chatbot.streamlit.app/"
    }
  },
  {
    slug: "ai-poem-generator",
    title: "AI Poem Generator",
    category: "GenAI / Creative Applications",
    summary:
        "Elegant Streamlit app that generates personalized poems using OpenAI GPT models and narrates them with AI text-to-speech, offering multiple styles, voices, and downloadable outputs.",
    stack: [
        "Python",
        "Streamlit",
        "OpenAI GPT-4o-mini",
        "Text-to-Speech (tts-1)",
        "python-dotenv"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/AI_poem_generator",
        demo: "https://b-like-a-ai-poem-generator.streamlit.app/"
    }
  },
  {
    slug: "django-blogs",
    title: "Django Blogs Application (TDD)",
    category: "Backend / Web Development",
    summary:
        "A full-featured blogging platform built with Django using Test-Driven Development (TDD). Supports user authentication, CRUD operations for blog posts, comments, user profiles, and an admin interface.",
    stack: [
        "Python",
        "Django",
        "SQLite",
        "Bootstrap",
        "TDD"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/django_tdd"
    }
  },
  {
    slug: "ai-wireframe-generator-anthropic",
    title: "🎨 AI Wireframe Generator (Anthropic)",
    category: "GenAI / UI Prototyping",
    summary:
        "Streamlit-based tool that generates complete, responsive HTML wireframes using Anthropic Claude 3 models for rapid UI prototyping and multi-section website mockups.",
    stack: [
        "Python",
        "Streamlit",
        "Anthropic Claude 3",
        "HTML5",
        "CSS",
        "python-dotenv"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/b-like-a-AI-Wireframe-Generator",
        demo: "https://b-like-a-ai-wireframe-generator.streamlit.app/"
    }
  },
  {
    slug: "eleven-madison-rag-assistant",
    title: "🍽️ Eleven Madison Park — RAG AI Assistant",
    category: "GenAI / RAG Applications",
    summary:
        "Interactive RAG-powered chatbot that answers questions about Eleven Madison Park by retrieving context from a curated dataset before generating responses.",
    stack: [
        "Python",
        "Gradio",
        "LangChain",
        "ChromaDB",
        "OpenAI GPT-4o-mini",
        "RAG"
    ],
    links: {
        github: "https://github.com/yourhandle/eleven-madison-rag-assistant",
        demo: "https://huggingface.co/spaces/alhadbhadekar/eleven-madison-rag-assistant"
    }
  },
  {
    slug: "rbm-movie-recommender",
    title: "Restricted Boltzmann Machine (RBM) Movie Recommender",
    category: "ML / Recommender Systems",
    summary:
        "Implemented an RBM from scratch in PyTorch and trained with Contrastive Divergence (CD-k) on MovieLens 100K to learn latent user preferences and recommend unseen movies.",
    stack: ["Python", "PyTorch", "RBM", "MovieLens"],
    links: {
        github: "https://github.com/alhadbhadekar/Restricted-Boltzmann-Machine-RBM-Movie-Recommendation-System"
    }
  },
  {
    slug: "credit-card-fraud-som-ann",
    title: "Credit Card Fraud Detection (SOM + ANN)",
    category: "ML / Fraud Detection",
    summary:
        "Hybrid fraud detection system using Self-Organizing Maps to identify anomalous customers and an ANN to assign fraud probability scores without labeled data.",
    stack: ["Python", "MiniSom", "TensorFlow", "Scikit-learn"],
    links: {
        github: "https://github.com/alhadbhadekar/Credit-Card-Fraud-Detection-using-SOM-ANN"
    }
  },
  {
    slug: "som-credit-card-fraud",
    title: "Self-Organizing Maps (SOM) – Credit Card Fraud Detection",
    category: "ML / Anomaly Detection",
    summary:
        "Uses Self-Organizing Maps (SOMs) to perform unsupervised anomaly detection on credit card application data, visually identifying suspicious customer patterns via U-Matrix distance maps.",
    stack: ["Python", "MiniSom", "Scikit-learn", "NumPy", "Matplotlib"],
    links: {
        github: "https://github.com/alhadbhadekar/Self-Organizing-Maps-SOM-Credit-Card-Fraud-Detection"
    }
  },
  {
    slug: "google-stock-lstm",
    title: "Google Stock Price Prediction using LSTM",
    category: "ML / Time Series",
    summary:
        "Built a recurrent neural network using stacked LSTM layers to predict Google stock prices based on historical Open price data with a 60-day sliding window.",
    stack: ["Python", "TensorFlow", "Keras", "LSTM", "Pandas"],
    links: {
        github: "https://github.com/alhadbhadekar/Google-Stock-Price-Prediction-using-LSTM-RNN"
    }
  },
  {
    slug: "cnn-cats-vs-dogs",
    title: "CNN Image Classification (Cats vs Dogs)",
    category: "ML / Computer Vision",
    summary:
        "Built a convolutional neural network using TensorFlow/Keras to perform binary image classification (cats vs dogs) with data augmentation for improved generalization.",
    stack: ["Python", "TensorFlow", "Keras", "CNN", "ImageDataGenerator"],
    links: {
        github: "https://github.com/alhadbhadekar/convoluion_neural_network_demo"
    }
  },
  {
    slug: "customer-churn-ann",
    title: "Customer Churn Prediction using ANN",
    category: "ML / Predictive Analytics",
    summary:
        "Built an Artificial Neural Network using TensorFlow/Keras to predict bank customer churn based on demographic and financial features using an end-to-end ML pipeline.",
    stack: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Pandas"],
    links: {
        github: "https://github.com/alhadbhadekar/Artificial-Neural-Network"
    }
  },
  {
    slug: "groq-llm-cli-chatbot",
    title: "Groq LLM CLI Chatbot",
    category: "GenAI / LLMs",
    summary:
        "Command-line chatbot built using LangChain and Groq-hosted LLaMA 3.1, supporting conversational context, chat history, and environment-based API key management.",
    stack: ["Python", "LangChain", "Groq LLM", "LLaMA 3.1", "python-dotenv"],
    links: {
        github: "https://github.com/alhadbhadekar/Groq-LLM-CLI-Chatbot"
    }
  },
  {
    slug: "stock-research-trade-decision-bot",
    title: "Stock Research & Trade Decision Bot",
    category: "GenAI / Agent Systems",
    summary:
        "Agent-based CLI application using the OpenAI Agents SDK to perform real-time stock research and generate structured, risk-aware trade decisions via a multi-agent workflow.",
    stack: [
        "Python",
        "OpenAI Agents SDK",
        "Pydantic",
        "AsyncIO",
        "WebSearchTool"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/Stock-Research-Trade-Decision-Bot"
    }
  },
  {
    slug: "astrarag-agentic-rag-chatbot",
    title: "Agentic RAG Chatbot",
    category: "GenAI / RAG Systems",
    summary:
        "Agentic retrieval-augmented generation chatbot built with CrewAI, FastAPI, and Streamlit, using Groq-hosted LLMs with ChromaDB and LlamaIndex for contextual question answering.",
    stack: [
        "Python",
        "CrewAI",
        "FastAPI",
        "Streamlit",
        "Groq LLM",
        "ChromaDB",
        "LlamaIndex",
        "Docker",
        "AWS EC2"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/astrarag_agentic_rag_chatbot"
    }
  },
  {
    slug: "studypal",
    title: "StudyPal – AI Study Assistant",
    category: "GenAI / RAG Applications",
    summary:
        "AI-powered study assistant built with Streamlit and LangChain using Groq-hosted LLMs and ChromaDB-backed RAG for contextual learning, deployed on AWS EC2.",
    stack: [
        "Python",
        "Streamlit",
        "LangChain",
        "Groq LLM",
        "ChromaDB",
        "RAG",
        "Docker",
        "AWS EC2"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/studypal"
    }
  },
  {
    slug: "convopro-private-chatgpt",
    title: "ConvoPro – Private ChatGPT Clone",
    category: "GenAI / LLM Applications",
    summary:
        "Private, self-hosted ChatGPT-style application using local LLMs via Ollama with a Streamlit UI and MongoDB-backed chat history, deployable on AWS EC2.",
    stack: [
        "Python",
        "Streamlit",
        "Ollama",
        "MongoDB Atlas",
        "Docker",
        "AWS EC2",
        "Local LLMs"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/convopro-private-chatgpt"
    }
  },
  {
    slug: "ai-tutor-mcp-toolkit",
    title: "AI Tutor MCP Toolkit",
    category: "GenAI / Agent Tooling",
    summary:
        "Multi-tool educational assistant built with Gradio and OpenAI GPT-4o-mini, exposing learning tools via the Model Context Protocol (MCP) with streaming, async execution, and agent-based interaction.",
    stack: [
        "Python",
        "Gradio",
        "OpenAI GPT-4o-mini",
        "MCP",
        "AsyncIO",
        "SSE"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/AI-Tutor-MCP-Toolkit"
    }
  },
  {
    slug: "gemma-financial-sentiment-lora",
    title: "Gemma Financial News Sentiment Classifier (LoRA Fine-Tuning)",
    category: "ML / LLM Fine-Tuning",
    summary:
        "Fine-tuned Google Gemma 3B using LoRA (PEFT) for financial news sentiment classification, leveraging 4-bit quantization and adapter-based training for efficient deployment.",
    stack: [
        "Python",
        "Google Gemma",
        "LoRA (PEFT)",
        "Hugging Face",
        "TRL",
        "BitsAndBytes"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/Gemma-3B-Financial-News-Sentiment-Classifier-LoRA-SFT-Fine-Tuning"
    }
  },
  {
    slug: "kubernetes-observability-stack",
    title: "Kubernetes Observability Stack",
    category: "Cloud / Observability",
    summary:
        "End-to-end, vendor-neutral Kubernetes observability stack using Kind, VictoriaMetrics, Grafana, and AlertManager with custom Prometheus metrics and Slack-based alerting.",
    stack: [
        "Kubernetes (Kind)",
        "VictoriaMetrics",
        "Grafana",
        "AlertManager",
        "Prometheus",
        "Go",
        "Helm"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/kubernetes_VictoriaMetrics_Grafana_AlertManager_Custom-Alerts"
    }
  },
  {
    slug: "deepseek-financial-news-analyzer",
    title: "DeepSeek Financial News Analyzer",
    category: "GenAI / Sentiment Analysis",
    summary:
        "Interactive Gradio app that analyzes financial news sentiment and extracts model reasoning from <think> tags using a 4-bit quantized DeepSeek-R1-Distill model with HuggingFace datasets.",
    stack: [
        "Python",
        "DeepSeek-R1-Distill",
        "Transformers",
        "BitsAndBytes (4-bit)",
        "Gradio",
        "HuggingFace Datasets",
        "HuggingFace Spaces"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/financial_news_analyzer_deepseek"
    }
  },
  {
    slug: "mcp-weather-service-integration",
    title: "MCP Weather Service Integration",
    category: "GenAI / Agent Tooling",
    summary:
        "Weather query tool built using the Model Context Protocol (MCP), providing live weather data via OpenWeatherMap and integrating seamlessly with Pydantic-AI agents and CrewAI multi-agent workflows.",
    stack: [
        "Python",
        "MCP (Model Context Protocol)",
        "Pydantic-AI",
        "CrewAI",
        "OpenWeatherMap API",
        "Groq LLM"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/mcp_server_claude_pydanticAI_CrewAI"
    }
  },
  {
    slug: "fastapi-ollama-llm-microservice",
    title: "FastAPI + Ollama LLM Microservice",
    category: "Backend / LLM Infrastructure",
    summary:
        "Lightweight REST API built with FastAPI to run local LLMs via Ollama, enabling structured chat-based requests and offline inference for multiple models.",
    stack: [
        "Python",
        "FastAPI",
        "Ollama",
        "LLMs",
        "Uvicorn",
        "REST API"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/ollama_fastapi"
    }
  },
  {
    slug: "logistic-regression-from-scratch",
    title: "Logistic Regression from Scratch in Python",
    category: "ML / Fundamentals",
    summary:
        "Implemented logistic regression from first principles using Python, including sigmoid activation, binary cross-entropy loss, and gradient descent, and evaluated it on the PIMA Diabetes dataset.",
    stack: [
        "Python",
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "Machine Learning"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/Building-and-implementing-Logistic-Regression"
    }
  },
  {
    slug: "linear-regression-from-scratch",
    title: "Linear Regression from Scratch in Python",
    category: "ML / Fundamentals",
    summary:
        "Implemented linear regression from first principles using Python, including gradient descent optimization, learning rate tuning, and visualization to predict salary based on work experience.",
    stack: [
        "Python",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Scikit-learn",
        "Machine Learning"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/Building-and-implementing-linear-regression-model"
    }
  },
  {
    slug: "calories-burnt-prediction-xgboost",
    title: "Calories Burnt Prediction using XGBoost",
    category: "ML / Regression",
    summary:
        "Machine learning regression model using XGBoost to predict calories burnt based on physical attributes and exercise duration, with exploratory analysis and MAE-based evaluation.",
    stack: [
        "Python",
        "XGBoost",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/Calories-Burnt-Prediction-Python-AI-ML"
    }
  },
  {
    slug: "customer-segmentation-kmeans",
    title: "Customer Segmentation using K-Means Clustering",
    category: "ML / Unsupervised Learning",
    summary:
        "Applied K-Means clustering to segment customers based on annual income and spending score, using the Elbow Method to identify optimal clusters and visualizing customer groups for targeted insights.",
    stack: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/Customer-Segmentation-using-K-Means-Clustering-Python-AL-ML"
    }
  },
  {
    slug: "big-mart-sales-prediction",
    title: "Big Mart Sales Prediction using XGBoost",
    category: "ML / Regression",
    summary:
        "Retail sales prediction model using XGBoost Regressor to estimate item outlet sales based on product attributes, pricing, and outlet characteristics, evaluated with R² metrics.",
    stack: [
        "Python",
        "XGBoost",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/Big-Mart-Sales-Prediction-Python-AL-ML"
    }
  },
  {
    slug: "medical-insurance-cost-prediction",
    title: "Medical Insurance Cost Prediction using Linear Regression",
    category: "ML / Regression",
    summary:
        "Supervised machine learning model using Linear Regression to predict medical insurance charges based on demographic and lifestyle features, evaluated using R² metrics.",
    stack: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/Medical-Insurance-Cost-Prediction-Python-AI-ML"
    }
  },
  {
    slug: "credit-card-fraud-detection-logistic-regression",
    title: "Credit Card Fraud Detection using Logistic Regression",
    category: "ML / Fraud Detection",
    summary:
        "Built a binary classification model to detect fraudulent credit card transactions using Logistic Regression, addressing severe class imbalance with under-sampling and evaluating performance on train/test splits.",
    stack: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Machine Learning"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/Credit-Card-Fraud-Detection-Python-AI-ML"
    }
  },
  {
    slug: "heart-disease-prediction-logistic-regression",
    title: "Heart Disease Prediction using Logistic Regression",
    category: "ML / Healthcare Analytics",
    summary:
        "Binary classification model built with Logistic Regression to predict the presence of heart disease using clinical and physiological attributes, with train/test evaluation and a user-driven predictive system.",
    stack: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/Heart-Disease-Prediction-Python-AI-ML"
    }
  },
  {
    slug: "gold-price-prediction-random-forest",
    title: "Gold Price Prediction using Random Forest",
    category: "ML / Time Series & Finance",
    summary:
        "Machine learning model using Random Forest Regressor to predict gold prices (GLD) from historical market data, evaluated with R-squared metrics and visual comparison of actual vs predicted values.",
    stack: [
        "Python",
        "Scikit-learn",
        "Random Forest",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/Gold-Price-Prediction-Python-AI-ML"
    }
  },
  {
    slug: "car-price-prediction-regression",
    title: "Car Price Prediction using Linear & Lasso Regression",
    category: "ML / Regression",
    summary:
        "Predictive model for used car prices built using Linear and Lasso Regression, incorporating categorical encoding, feature analysis, and R²-based evaluation on the CarDekho dataset.",
    stack: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/Car-Price-Prediction-Python-AI-ML"
    }
  },
  {
    slug: "wine-quality-prediction",
    title: "Wine Quality Prediction using Random Forest",
    category: "ML / Classification",
    summary:
        "Binary classification model that predicts wine quality (good vs bad) using physicochemical properties, with correlation analysis, feature preprocessing, and Random Forest classification.",
    stack: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/Python-AI-ML-Wine-Quality-Prediction"
    }
  },
  {
    slug: "loan-status-prediction",
    title: "Loan Status Prediction using SVM",
    category: "ML / Classification",
    summary:
        "Machine learning model that predicts loan eligibility based on applicant demographics, income, credit history, and property details using data preprocessing and Support Vector Machine classification.",
    stack: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Seaborn"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/Loan-Status-Prediction-using-Python-AI-ML"
    }
  },
  {
    slug: "fake-news-prediction",
    title: "Fake News Prediction using NLP",
    category: "ML / NLP",
    summary:
        "Text classification system that detects fake news articles using NLP preprocessing, TF-IDF feature extraction, and Logistic Regression.",
    stack: [
        "Python",
        "Scikit-learn",
        "NLTK",
        "Pandas",
        "TF-IDF"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/Fake-News-Prediction-Using-AI-ML-Python"
    }
  },
  {
    slug: "house-price-prediction",
    title: "House Price Prediction (California Housing)",
    category: "ML / Regression",
    summary:
        "End-to-end house price prediction system using the California Housing dataset and XGBoost Regressor, including training, evaluation, and visualization of actual vs predicted prices.",
    stack: [
        "Python",
        "XGBoost",
        "Scikit-learn",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Seaborn"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/Python_AI_ML_House_price_prediction"
    }
  },
  {
    slug: "diabetes-prediction",
    title: "Diabetes Prediction using SVM",
    category: "ML / Healthcare",
    summary:
        "Machine learning model that predicts whether an individual is diabetic or non-diabetic using the PIMA Indian Diabetes Dataset. Implements feature standardization and a linear Support Vector Machine classifier for accurate binary classification.",
    stack: [
        "Python",
        "Scikit-learn",
        "NumPy",
        "Pandas"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/Python_AI_ML_Diabetes_Prediction_Model"
    }
  },
  {
    slug: "rock-vs-mine-prediction",
    title: "Rock vs Mine Prediction using Sonar Data",
    category: "ML / Classification",
    summary:
        "Binary classification model that identifies underwater objects as rocks or mines using sonar signal data and Logistic Regression.",
    stack: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy"
    ],
    links: {
        github: "https://github.com/alhadbhadekar/AI_ML_Rock-vs-Mine-Prediction"
    }
  },
];

export const featuredProjects = projects.slice(0, 3);
