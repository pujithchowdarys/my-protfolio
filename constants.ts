import { Experience, Project, SocialMedia } from './types';

export const PROFILE_NAME = "Pujith Sakhamuri";
export const ABOUT_ME_TEXT = `Hello! I'm Pujith Sakhamuri, a Data Engineer with over 6 years of experience in designing and implementing scalable machine learning models, data pipelines, and AI-driven solutions. I have a strong background in Python, R, Scala, and Java, specializing in Machine Learning, Deep Learning, Natural Language Processing (NLP), Computer Vision, Generative AI, and Big Data Engineering. My expertise spans end-to-end ML/AI workflows, MLOps, containerized deployments, and robust data management. I am passionate about leveraging technology to build innovative solutions and continuously expand my skills in the IT world.`;

// Profile image path. Please save your profile image as 'profile.jpg' and
// place it in the 'media/' folder at the root of your project.
export const PROFILE_IMAGE_SRC = './media/profile.jpg';

// Base64 encoded SVG for a default profile image fallback
export const DEFAULT_PROFILE_IMAGE_SVG_BASE64 = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xMiAwYy02LjYyNyAwLTEyIDUuMzczLTEyIDEyczUuMzczIDEyIDEyIDEyYzYuNjI3IDAgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMHptMCAyLjljNC42OTQgMCA4LjUgMy44MDYgOC41IDguNXMtMy44MDYgOC41LTguNSA4LjUtOC41LTMuODA2LTguNS04LjVTNy4zMDYgMi45IDEyIDIuOXptMCAzLjZjLTEuOTMzIDAtMy41IDEuNTY3LTMuNSAzLjVzMS41NjcgMy41IDMuNSAzLjUgMy41LTEuNTY3IDMuNS0zLjVjMC0xLjkzMy0xLjU2Ny0zLjUtMy41LTMuNXptMCAxMi4zYzMtMS42MzEgNC4wNzctNC44NzEgNC4wNzctNi4yMjQg0C0uNjUzLS40NzQtMi41NjktMS40NzctMi41NjktLjk3MSAwLTIuNzg2LTMuNzU0LTIuNzg2LTMuNzU0UzcuNjU0IDE0LjE3MiA2LjUxNSAxNS44MDdDOTYuNTc4IDIwLjE4NCAxMCAyMC4wMiAxMiAxOC44eiIvPjwvc3ZnPg==';

export const CAREER_EXPERIENCE: Experience[] = [
  {
    title: "GENAI ENGINEER / DATA ENGINEER",
    company: "Proofpoint Inc., Dallas, TX",
    duration: "May 2024 - Present",
    responsibilities: [
      "Engineered end-to-end Generative AI pipelines by integrating LangChain with LLMs (GPT-3, LLaMA 2, BERT, T5) and backend data systems (MongoDB, MySQL) to support real-time conversational AI use cases such as summarization and intelligent Q&A.",
      "Applied prompt engineering strategies to improve response precision and consistency, reducing model hallucinations by 30% through iterative refinement and fine-tuning.",
      "Built and deployed embedding-based search pipelines using Pinecone and FAISS, achieving over 99% recall for semantic search tasks within LLM workflows.",
      "Developed scalable ETL pipelines to clean, transform, and serve data to language models, enhancing retrieval performance and maintaining data integrity across multiple sources.",
      "Automated model deployment and monitoring using Docker, Kubernetes, and MLflow, ensuring reproducibility, traceability, and system resilience in production environments.",
      "Leveraged Amazon Bedrock to host and manage LLMs in a serverless environment, achieving near-zero infrastructure maintenance with 99.9% uptime.",
      "Migrated legacy SQL workloads to Amazon Redshift, optimizing query performance and reducing operational costs by 40%.",
      "Streamlined development workflows using Git, managing branching, code reviews, and collaborative CI/CD pipelines.",
      "Enabled real-time processing and inference by integrating Apache Kafka and Apache Spark with cloud ML services like AWS SageMaker and EMR.",
      "Orchestrated containerized model workflows to scale with user traffic using Kubernetes, ensuring performance during peak load scenarios."
    ]
  },
  {
    title: "AI/ML ENGINEER",
    company: "Cleveland Clinic, Cleveland, OH",
    duration: "Jan 2023 - Apr 2024",
    responsibilities: [
      "Designed and delivered AI-driven solutions combining computer vision, NLP, and machine learning to solve complex problems in clinical data processing and diagnostics.",
      "Built and deployed image classification and object detection models using TensorFlow, PyTorch, and OpenCV, enhancing diagnostic imaging accuracy for edge device use.",
      "Developed NLP pipelines in Python using SpaCy, NLTK, and Hugging Face Transformers to extract meaningful insights from unstructured medical notes and patient records.",
      "Automated ML workflows using MLflow and Kubeflow, managing full ML lifecycle from training to deployment within Azure Databricks and GCP Vertex AI environments.",
      "Implemented scalable ETL processes with PySpark, handling multi-terabyte datasets for downstream machine learning pipelines and analytics.",
      "Integrated Elasticsearch into data pipelines to power near real-time search, analytics, and anomaly detection across large healthcare datasets.",
      "Improved NLP model accuracy by 15% through transfer learning.",
      "Applied supervised, unsupervised, and reinforcement learning techniques to create predictive models and anomaly detection systems for operational and clinical data.",
      "Conducted A/B testing for evaluating different ML model versions and hyperparameter settings, streamlining model optimization and deployment.",
      "Containerized models using Docker and deployed them in production with Kubernetes, ensuring reliable, scalable operation under real-world load.",
      "Created monitoring dashboards with Elasticsearch and Kibana, improving observability and reducing incident response times for ML models in production.",
      "Used SQL and Python to clean, transform, and analyze complex datasets for training and inference workflows.",
      "Collaborated cross-functionally with data scientists, engineers, and business teams to align AI solutions with clinical and operational needs.",
      "Leveraged GCP (BigQuery, Vertex AI) and AWS (SageMaker, Redshift) to manage large-scale model training and deployment workflows using cloud-native tools."
    ]
  },
  {
    title: "University Data Analytics & Reporting",
    company: "Cleveland State University, Cleveland, OH",
    duration: "Mar 2022 - May 2023",
    responsibilities: [
      "Assisted in managing and maintaining university databases related to student enrollment, attendance, and academic performance.",
      "Performed basic data extraction and cleanup using Excel and SQL for academic and administrative reporting.",
      "Supported the preparation of reports and dashboards for internal departments using Power BI and Tableau.",
      "Helped automate recurring student services tasks using Python scripts (e.g., scheduling, notifications).",
      "Provided support to students and faculty for accessing online services, portals, and academic resources.",
      "Collaborated with the institutional research team to collect survey data and maintain data accuracy.",
      "Participated in routine quality checks of student information systems to ensure data integrity.",
      "Handled front-desk operations include walk-in queries, email communications, and document scanning.",
      "Worked on ad-hoc tasks such as generating transcripts, verifying enrollment, and maintaining student records.",
      "Assisted in organizing university events, orientation sessions, and academic calendar updates."
    ]
  },
  {
    title: "DATA SCIENTIST / ML ENGINEER",
    company: "ECo Global Consulting, Hyderabad, India",
    duration: "Oct 2020 - Dec 2021",
    responsibilities: [
      "Built end-to-end ML pipelines for structured and unstructured data using Python, R, SQL, and Apache Spark, streamlining data preprocessing, feature engineering, and modeling.",
      "Designed and deployed deep learning models in PyTorch and TensorFlow for image classification and sequence prediction, improving accuracy metrics by over 20%.",
      "Conducted statistical modeling and forecasting using regression analysis, time series modeling, and hypothesis testing to support decision-making across marketing and operations.",
      "Applied unsupervised learning (e.g., clustering, PCA, anomaly detection) to discover actionable patterns in customer behavior and service usage data.",
      "Built and deployed NLP pipelines using spaCy and NLTK for text classification and entity extraction from customer feedback, reducing manual analysis effort by 40%.",
      "Implemented containerized ML solutions using Docker and deployed models to AWS SageMaker with CI/CD pipelines for scalable, real-time inference.",
      "Built reusable Terraform modules to automate infrastructure provisioning and ensure consistency across environments.",
      "Used Apache Airflow to orchestrate complex ML workflows and schedule model retraining pipelines.",
      "Evaluated model performance using k-fold cross-validation, optimizing for metrics such as F1-score, ROC-AUC, and precision-recall curves.",
      "Participated in continuous learning and improvement via internal CoEs and external data science forums to stay aligned with industry best practices."
    ]
  },
  {
    title: "DATA ENGINEER / PYTHON DEVELOPER",
    company: "Carmax Auto Superstore Inc, Hyderabad, India",
    duration: "May 2019 - Sep 2020",
    responsibilities: [
      "Developed and maintained full-stack web applications using Python, Django, Flask, and ReactJS/AngularJS, following MVC architecture for scalable, modular design tailored to client needs.",
      "Designed and built RESTful APIs integrating third-party services to enable seamless communication between frontend and backend systems.",
      "Created dynamic, responsive UIs using HTML5, CSS3, JavaScript, Bootstrap, and jQuery, ensuring cross-browser compatibility and a smooth user experience.",
      "Utilized Django ORM and SQLAlchemy for efficient database interactions; modeled relational and NoSQL data using PostgreSQL, MySQL, and MongoDB to meet client data requirements.",
      "Implemented robust user authentication, session management, and role-based access control adhering to Django security best practices across multiple modules.",
      "Containerized applications with Docker and automated deployments using Jenkins, supporting CI/CD pipelines that improved release cycles and reduced downtime.",
      "Deployed full-stack applications on cloud platforms like AWS EC2, S3, and Heroku, managing environment variables and runtime configurations for reliable production environments.",
      "Worked extensively in Linux/Unix environments, writing shell scripts to automate routine server tasks, deployments, and log analysis.",
      "Engineered and automated scalable data ingestion pipelines using Apache Spark, Airflow, and Sqoop, extracting and transforming data from structured and semi-structured sources for analytics and reporting.",
      "Cleaned, parsed, and transformed large datasets using Pandas, NumPy, and custom Python scripts to support client business intelligence initiatives.",
      "Scheduled and monitored batch processing jobs with Apache Airflow, ensuring data pipeline reliability and timely delivery.",
      "Managed cloud-based storage and data lakes, ensuring secure and efficient data access across teams.",
      "Optimized SQL queries and indexes to boost database performance in high-traffic client environments.",
      "Participated in Agile ceremonies including sprint planning, daily standups, and retrospectives to maintain team collaboration and continuous delivery aligned with client goals."
    ]
  }
];

export const PROJECTS: Project[] = [
  // AI/ML & Experience-Driven Projects (based on resume)
  {
    name: "Real-time Conversational AI with LLM Integration",
    description: "Engineered end-to-end Generative AI pipelines by integrating LangChain with various LLMs (GPT-3, LLaMA 2, BERT, T5) and backend data systems (MongoDB, MySQL) to support real-time conversational AI use cases like summarization and intelligent Q&A.",
    technologies: ["LangChain", "LLMs (GPT-3, LLaMA 2)", "MongoDB", "MySQL", "Python", "GPT-3", "LLaMA 2", "BERT", "T5"],
    githubLink: "https://github.com/PujithSakhamuri/genai-chatbot-project",
    imageUrl: "https://images.unsplash.com/photo-1620712948293-f852b7a40a6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Semantic Search Pipeline for LLM Workflows",
    description: "Built and deployed embedding-based semantic search pipelines using vector databases like Pinecone and FAISS, achieving over 99% recall for semantic search tasks within LLM workflows, enhancing information retrieval.",
    technologies: ["Pinecone", "FAISS", "Embeddings", "Python", "LLMs"],
    githubLink: "https://github.com/PujithSakhamuri/semantic-search-engine",
    imageUrl: "https://images.unsplash.com/photo-1606761245781-d1c0b3f54546?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Medical Image & Clinical NLP Diagnostics System",
    description: "Designed and delivered AI-driven solutions combining computer vision and NLP. Developed models for medical imaging, patient note classification, and real-time diagnostics utilizing TensorFlow, PyTorch, SpaCy, NLTK, and Hugging Face Transformers.",
    technologies: ["TensorFlow", "PyTorch", "OpenCV", "SpaCy", "NLTK", "Hugging Face Transformers", "GCP Vertex AI"],
    githubLink: "https://github.com/PujithSakhamuri/medical-ai-diagnostics",
    imageUrl: "https://images.unsplash.com/photo-1582719500479-ec0a8f9d0c24?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  // Websites & Web Applications (based on resume)
  {
    name: "Full-Stack E-commerce Web Application",
    description: "Developed and maintained full-stack e-commerce web applications using Python frameworks (Django, Flask) and JavaScript frameworks (ReactJS, AngularJS). Focused on MVC architecture, RESTful APIs, and creating dynamic, responsive UIs.",
    technologies: ["Python", "Django", "Flask", "ReactJS", "AngularJS", "HTML5", "CSS3", "JavaScript"],
    githubLink: "https://github.com/PujithSakhamuri/fullstack-ecommerce",
    liveLink: "https://ecommerce.pujiths.com",
    imageUrl: "https://images.unsplash.com/photo-1563203920-569b91df1312?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Scalable Data Ingestion & ETL Pipeline",
    description: "Engineered and automated scalable data ingestion pipelines using Apache Spark, Airflow, and Sqoop. Successfully extracted and transformed large datasets from structured and semi-structured sources for analytics and business intelligence initiatives.",
    technologies: ["Apache Spark", "Apache Airflow", "Sqoop", "Pandas", "NumPy", "SQL", "AWS EMR"],
    githubLink: "https://github.com/PujithSakhamuri/data-pipeline-project",
    liveLink: "https://datapipeline-demo.pujiths.com",
    imageUrl: "https://images.unsplash.com/photo-1621252654166-701389e023ca?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Automated ML Workflow Orchestration (MLOps)",
    description: "Implemented automated ML workflows using MLflow and Kubeflow, managing the full ML lifecycle from training to deployment within Azure Databricks and GCP Vertex AI environments, ensuring reproducibility and scalability.",
    technologies: ["MLflow", "Kubeflow", "Docker", "Kubernetes", "Azure Databricks", "GCP Vertex AI", "CI/CD"],
    githubLink: "https://github.com/PujithSakhamuri/mlops-workflow",
    liveLink: "https://mlops-demo.pujiths.com",
    imageUrl: "https://images.unsplash.com/photo-1627937397686-302ef3965b26?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export const CATEGORIZED_SOCIAL_MEDIA_LINKS: { [key: string]: SocialMedia[] } = {
  "Professional Networks": [
    {
      platform: "LinkedIn",
      name: "LinkedIn Profile",
      url: "https://www.linkedin.com/in/pujith-s-284a4219b/",
      description: "Connect with me professionally on LinkedIn for career updates and networking."
    }
    // Add more professional links if applicable
  ],
  "Content & Community": [
    {
      platform: "YouTube",
      name: "Pujith's Tech Channel",
      url: "https://www.youtube.com/@PujithTech",
      description: "Tutorials and insights on AI, ML, and data engineering.",
      icon: "M10 15l5.19-3L10 9v6m11.5-7.5c-.1 1.7-.1 3.3 0 5-.2 1.4-.4 2.8-.7 4.1-.3 1.3-.7 2.4-1.2 3.5-.5 1.1-1.1 2-1.9 2.8-.8.8-1.7 1.4-2.8 1.9-1.1.5-2.2.9-3.5 1.2-1.3.3-2.7.5-4.1.7-1.7.1-3.3.1-5 0-1.4-.2-2.8-.4-4.1-.7-1.3-.3-2.4-.7-3.5-1.2-1.1-.5-2-1.1-2.8-1.9-.8-.8-1.4-1.7-1.9-2.8-.5-1.1-.9-2.2-1.2-3.5-.3-1.3-.5-2.7-.7-4.1-.1-1.7-.1-3.3 0-5 .2-1.4.4-2.8.7-4.1.3-1.3.7-2.4 1.2-3.5.5-1.1 1.1-2 1.9-2.8.8-.8 1.7-1.4 2.8-1.9 1.1-.5 2.2-.9 3.5-1.2 1.3-.3 2.7-.5 4.1-.7 1.7-.1 3.3-.1 5 0 1.4.2 2.8.4 4.1.7 1.3.3 2.4.7 3.5 1.2 1.1.5 2 1.1 2.8 1.9.8.8 1.4 1.7 1.9 2.8.5 1.1.9 2.2 1.2 3.5.3 1.3.5 2.7.7 4.1z"
    },
    {
      platform: "X",
      name: "Pujith on X",
      url: "https://x.com/Pujith_Sakhamuri",
      description: "Short updates and thoughts on tech and industry trends."
    }
  ],
  "Creative Outlets": [
    {
      platform: "Instagram",
      name: "Pujith's Instagram",
      url: "https://www.instagram.com/pujith_sakhamuri/",
      description: "Personal snapshots and occasional tech-related visual content.",
      icon: "M7.8 2h8.4C17.684 2 18 2.316 18 3.4v8.4c0 1.084-.316 1.4-1.4 1.4H7.8C6.716 13.2 6 12.884 6 11.8V3.4C6 2.316 6.316 2 7.8 2zm0 1.4a.4.4 0 00-.4.4v7.6c0 .22.18.4.4.4h7.6a.4.4 0 00.4-.4V3.8a.4.4 0 00-.4-.4H7.8zM12 5.6a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4zm0 1.4a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6zM15.4 3.8a.7.7 0 11-1.4 0 .7.7 0 011.4 0z"
    }
  ]
};

export const CONTACT_EMAIL = "sakhamuripujith@gmail.com";
export const PHONE_NUMBER = "+1(216)307-5432";
export const LINKEDIN_PROFILE = "https://www.linkedin.com/in/pujith-s-284a4219b/";