import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "aria-engine",
    title: "ARIA Engine",
    period: {
      start: "07.2026",
    },
    link: "https://github.com/GodXSpell/aria-engine",
    skills: [
      "Java",
      "Spring Boot",
      "Python",
      "FastAPI",
      "Redis",
      "PostgreSQL",
      "ChromaDB",
      "Docker",
    ],
    description: `Foundational AI infrastructure for Autonomous Reasoning & Intelligence Architecture.
- Cleanly separated two-service architecture (Java Gateway + Python ML Core)
- Advanced LLM provider routing with failover
- Four-layer memory system integration
- API key authentication, rate limiting, and circuit breaking
- Fully containerized internal ML network`,
    logo: "https://github.com/GodXSpell.png",
    isExpanded: true,
  },
  {
    id: "brutal-git",
    title: "Brutal Git (StackMatch)",
    period: {
      start: "07.2026",
    },
    link: "https://github.com/GodXSpell/stackmatch",
    skills: [
      "Next.js",
      "FastAPI",
      "Spring Boot",
      "PyTorch",
      "Kafka",
      "Elasticsearch",
      "PostgreSQL",
    ],
    description: `A powerful GitHub repository recommendation engine powered by hybrid search.
- Hybrid search combining BM25 (Elasticsearch) and ANN (pgvector)
- Reciprocal Rank Fusion for optimal result combination
- Two-tower neural retrieval model mapping tech stacks to embeddings
- Scalable microservices backbone powered by Apache Kafka
- Real-time online learning through continuous user feedback loops`,
    logo: "https://github.com/GodXSpell.png",
  },
  {
    id: "fundflow",
    title: "FundFlow",
    period: {
      start: "09.2024",
    },
    link: "https://fundflow-two.vercel.app/",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Java",
      "Spring Boot",
      "Docker",
    ],
    description: `A modern, high-end personal finance management application built with next-generation web technologies.
- Complete financial tracking and secure management system
- Dashboard intelligence for an intentional, minimalist overview
- Fluid UI with Framer Motion and universal typographic hot-swapping
- Highly scalable architecture featuring a React frontend and Spring Boot backend
- Advanced account tracking, detailed transaction management, and robust reporting
- Containerized RESTful API using Docker for easy deployment`,
    logo: "https://github.com/GodXSpell.png",
  },
  {
    id: "auto-eda",
    title: "AutoEDA (quick_eda)",
    period: {
      start: "05.2024",
    },
    link: "https://github.com/GodXSpell/AutoEDA",
    skills: [
      "Python",
      "Pandas",
      "Data Science",
      "Machine Learning",
      "Automation",
      "Matplotlib",
      "Seaborn",
    ],
    description: `A lightweight, no-nonsense Python package for Exploratory Data Analysis, designed to provide actionable insights instantly.
- Instant TL;DR insights for any pandas DataFrame directly in the terminal or notebook
- Automatic column type detection and issue flagging (high missingness, skew, outliers, cardinality)
- Rule-based suggestion engine for optimal data cleaning steps
- Targeted analysis ranking variable correlations against a specific prediction target
- Capable of returning machine-readable JSON reports for CI/CD data quality gates
- Minimal visual noise with targeted distributions, boxplots, and correlation heatmaps`,
    logo: "https://github.com/GodXSpell.png",
  },
  {
    id: "beta-fundflow-finbot",
    title: "FinBot",
    period: {
      start: "08.2025",
    },
    link: "https://github.com/GodXSpell/Beta_FundFlow_Finbot",
    skills: ["Java", "Chatbot", "API", "Integration", "AI Assistant"],
    description: `An advanced AI assistant designed for financial queries and conversational finance integration.
- Early integration and proof-of-concept for conversational finance
- API processing for natural user interactions
- Advanced chatbot features for extracting and returning financial insights
- Testing ground for new AI-powered finance features
- Foundation for next-generation financial assistant technology`,
    logo: "https://github.com/GodXSpell.png",
  },
  {
    id: "house-prediction",
    title: "House Price Prediction Model",
    period: {
      start: "07.2025",
    },
    link: "https://github.com/GodXSpell/House_Prediction_Model-",
    skills: [
      "Python",
      "Machine Learning",
      "Regression",
      "Random Forest",
      "Gradient Boosting",
      "Data Science",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
    description: `Advanced machine learning model for predicting house prices using various regression techniques.
- Comprehensive house price prediction system
- Feature engineering and structured data preprocessing
- Multiple ML algorithms including Linear and Polynomial Regression
- Statistical analysis and robust model evaluation
- High accuracy predictions based on location, size, and amenities
- Data visualization and insights generation`,
    logo: "https://github.com/GodXSpell.png",
  },
  {
    id: "movie-sentiment-analysis",
    title: "Movie Sentiment Analysis",
    period: {
      start: "09.2025",
    },
    link: "https://github.com/GodXSpell/MovieSentimentAnalysis",
    skills: [
      "Python",
      "NLP",
      "Sentiment Analysis",
      "Machine Learning",
      "Text Processing",
      "Data Science",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
    description: `Intelligent sentiment analysis system for movie reviews using natural language processing.
- Advanced sentiment classification for raw movie reviews
- Natural Language Processing techniques for text analysis
- Binary classification pipeline for positive and negative sentiment detection
- Machine learning models trained on large movie review datasets
- Robust performance metrics and accuracy evaluation
- Real-time sentiment prediction capabilities`,
    logo: "https://github.com/GodXSpell.png",
  },
];
