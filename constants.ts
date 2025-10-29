import { Experience, Project, SocialMedia } from './types';

export const PROFILE_NAME = "Pujith Sakhamuri";
export const ABOUT_ME_TEXT = `Hello! I'm Pujith Sakhamuri, an aspiring IT professional with a B.Tech degree completed between 2016 and 2020. My journey in the IT world began in 2019 as an intern, and I've since gained diverse experience across data analysis, AI/ML engineering, and data engineering. I'm passionate about building robust data pipelines, designing and deploying machine learning models, and creating innovative web applications. This portfolio showcases my career milestones, projects, and extensive online presence. Currently, I'm actively seeking new full-time or contract roles in data engineering or AI/ML.`;

export const CAREER_EXPERIENCE: Experience[] = [
  {
    title: "Intern",
    company: "Sirisha Solutions",
    duration: "Mar 2019 - Mar 2020",
    responsibilities: [
      "Built full-stack applications using Python frameworks and integrated REST APIs.",
      "Designed and maintained robust data pipelines for analytics using Airflow and Spark.",
      "Managed cloud-based deployments on AWS and Heroku.",
      "Delivered performant dashboards and backend APIs with secure, scalable architecture."
    ]
  },
  {
    title: "Data Analyst",
    company: "ECo Global Consulting",
    duration: "Mar 2020 - Dec 2021",
    responsibilities: [
      "Built end-to-end ML pipelines for structured and unstructured data using Python, R, SQL, and Apache Spark.",
      "Designed and deployed deep learning models in PyTorch and TensorFlow for image classification and sequence prediction, improving accuracy metrics by over 20%.",
      "Conducted statistical modeling and forecasting using regression analysis, time series modeling, and hypothesis testing.",
      "Applied unsupervised learning (e.g., clustering, PCA, anomaly detection) to discover actionable patterns in customer behavior and service usage data.",
      "Built and deployed NLP pipelines using spaCy and NLTK for text classification and entity extraction.",
      "Implemented containerized ML solutions using Docker and deployed models to AWS SageMaker with CI/CD pipelines.",
      "Built reusable Terraform modules to automate infrastructure provisioning.",
      "Used Apache Airflow to orchestrate complex ML workflows and schedule model retraining pipelines.",
      "Evaluated model performance using k-fold cross-validation, optimizing for metrics such as F1-score, ROC-AUC.",
      "Participated in continuous learning and improvement via internal CoEs and external data science forums."
    ]
  },
  {
    title: "University Data Analyst & Reporting",
    company: "Cleveland State University, Cleveland, OH",
    duration: "Mar 2022 – May 2023",
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
    title: "AI/ML Analyst (Contract)",
    company: "Cleveland Clinic, Cleveland, OH",
    duration: "Jan 2023 – Apr 2024",
    responsibilities: [
      "Designed and delivered AI-driven solutions combining computer vision, NLP, and machine learning in clinical data processing and diagnostics.",
      "Built and deployed image classification and object detection models using TensorFlow, PyTorch, and OpenCV.",
      "Developed NLP pipelines in Python using SpaCy, NLTK, and Hugging Face Transformers to extract meaningful insights from unstructured medical notes and patient records.",
      "Automated ML workflows using MLflow and Kubeflow, managing full ML lifecycle from training to deployment within Azure Databricks and GCP Vertex AI environments.",
      "Implemented scalable ETL processes with PySpark, handling multi-terabyte datasets for downstream machine learning pipelines and analytics.",
      "Integrated Elasticsearch into data pipelines to power near real-time search, analytics, and anomaly detection across large healthcare datasets.",
      "Improved NLP model accuracy by 15% through transfer learning.",
      "Applied supervised, unsupervised, and reinforcement learning techniques to create predictive models and anomaly detection systems for operational and clinical data.",
      "Conducted A/B testing for evaluating different ML model versions and hyperparameter settings, streamlining model optimization and deployment.",
      "Containerized models using Docker and deployed them in production with Kubernetes, ensuring reliable, scalable operation.",
      "Created monitoring dashboards with Elasticsearch and Kibana, improving observability and reducing incident response times for ML models in production.",
      "Used SQL and Python to clean, transform, and analyze complex datasets for training and inference workflows.",
      "Collaborated cross-functionally with data scientists, engineers, and business teams to align AI solutions with clinical and operational needs.",
      "Leveraged GCP (BigQuery, Vertex AI) and AWS (SageMaker, Redshift) to manage large-scale model training and deployment workflows using cloud-native tools."
    ]
  },
  {
    title: "Data Analyst (Contract)",
    company: "Proofpoint Inc., Austin, TX",
    duration: "May 2024 – Present",
    responsibilities: [
      "Engineered end-to-end Generative AI pipelines by integrating LangChain with LLMs (GPT-3, LLaMA 2, BERT, T5) and backend data systems (MongoDB, MySQL).",
      "Applied prompt engineering strategies to improve response precision and consistency, reducing model hallucinations by 30% through iterative refinement and fine-tuning.",
      "Built and deployed embedding-based search pipelines using Pinecone and FAISS, achieving over 99% recall for semantic search tasks within LLM workflows.",
      "Developed scalable ETL pipelines to clean, transform, and serve data to language models, enhancing retrieval performance and maintaining data integrity.",
      "Automated model deployment and monitoring using Docker, Kubernetes, and MLflow, ensuring reproducibility, traceability, and system resilience in production environments.",
      "Leveraged Amazon Bedrock to host and manage LLMs in a serverless environment, achieving near-zero infrastructure maintenance with 99.9% uptime.",
      "Migrated legacy SQL workloads to Amazon Redshift, optimizing query performance and reducing operational costs by 40%.",
      "Troubleshot job failures, optimized execution time, and collaborated with ops teams to ensure on-time delivery of critical batch workloads.",
      "Streamlined development workflows using Git, managing branching, code reviews, and collaborative CI/CD pipelines.",
      "Enabled real-time processing and inference by integrating Apache Kafka and Apache Spark with cloud ML services like AWS SageMaker and EMR.",
      "Orchestrated containerized model workflows to scale with user traffic using Kubernetes, ensuring performance during peak load scenarios."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    name: "Pujiverse Creation Spark",
    description: "An application that takes an idea and generates creative content like songs, stories, or narrations with downloadable lyrics and voiceovers in multiple languages.",
    technologies: ["AI", "Generative AI", "Web Development"],
    imageUrl: "https://picsum.photos/400/250?random=11"
  },
  {
    name: "My Professional Portfolio",
    description: "A comprehensive online portfolio showcasing IT career experience, projects, GitHub repositories, and social media presence.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: "https://picsum.photos/400/250?random=12"
  },
  {
    name: "Pujiverse Recipe Video Generator",
    description: "Generate cooking videos from recipe steps and images, including nutritional information.",
    technologies: ["AI", "Video Generation", "Web Development"],
    imageUrl: "https://picsum.photos/400/250?random=13"
  },
  {
    name: "Pujiverse YouTube Video Creator",
    description: "Generate perfect YouTube video scripts, voiceovers, and background music for any category to streamline your content creation process.",
    technologies: ["AI", "Content Creation", "Video Scripting"],
    imageUrl: "https://picsum.photos/400/250?random=14"
  },
  {
    name: "Pujiverse Presentation Generator",
    description: "Generate animated PowerPoint presentations with voiceovers and video on any topic using AI. Enter a topic, and the app will create slide content, generate a corresponding voiceover, and allow you to download both the PPTX file, audio, and a combined video.",
    technologies: ["AI", "Presentation Tools", "Voiceover"],
    imageUrl: "https://picsum.photos/400/250?random=15"
  },
  {
    name: "Pujiverse Business Manager Pro",
    description: "A comprehensive web application to manage daily business, chits, household expenses, and loans with insightful summary reports. This app provides a clean, intuitive interface for all your financial tracking needs.",
    technologies: ["Web Development", "Financial Management", "Full-stack"],
    imageUrl: "https://picsum.photos/400/250?random=16"
  },
  {
    name: "Pujiverse Text-to-Video Generator",
    description: "A sophisticated web application that transforms textual prompts into high-quality videos using the Gemini API. Users can specify aspect ratio and resolution for their creations.",
    technologies: ["AI", "Video Generation", "Gemini API"],
    imageUrl: "https://picsum.photos/400/250?random=17"
  },
  {
    name: "PujiVerse Storyteller & Live AI",
    description: "Generate movie stories, analyze video transcripts, engage in real-time conversations, and get answers using Gemini AI with text-to-speech narration.",
    technologies: ["AI", "Generative AI", "Text-to-Speech", "Real-time Chat"],
    imageUrl: "https://picsum.photos/400/250?random=18"
  },
  {
    name: "PujiVerse PPT Voiceover",
    description: "Generates voiceovers for each 'slide' of text input, allowing playback and download.",
    technologies: ["AI", "Voiceover Generation", "Text-to-Speech"],
    imageUrl: "https://picsum.photos/400/250?random=19"
  },
  {
    name: "PujiVerce Connects",
    description: "A personal website centralizing Pujith Sakhamuri's online presence, including social media, projects, and contact information.",
    technologies: ["Web Development", "Portfolio"],
    imageUrl: "https://picsum.photos/400/250?random=20"
  },
  {
    name: "Pujiverse Guessing Game",
    description: "A multi-mode web platform offering various guessing games across categories like Cars, Movies, and more. Features 10+ game types with image, text, and sound interactions, hints using Gemini AI, and a responsive design.",
    technologies: ["Game Development", "AI", "Web Development"],
    imageUrl: "https://picsum.photos/400/250?random=21"
  },
  {
    name: "VidPrompt Studio",
    description: "A browser-based web app that allows creators to upload videos, enter prompts to generate scripts and cut timeframes, automatically trim, combine, and narrate scenes, edit the result with an in-browser video editor, and download the final video locally.",
    technologies: ["Video Editing", "AI", "Web Development"],
    imageUrl: "https://picsum.photos/400/250?random=22"
  }
];

export const EXPERIENCE_RELATED_PROJECT_NAMES = [
  "Pujiverse Creation Spark",
  "Pujiverse Recipe Video Generator",
  "Pujiverse YouTube Video Creator",
  "Pujiverse Presentation Generator",
  "Pujiverse Text-to-Video Generator",
  "PujiVerse Storyteller & Live AI",
  "PujiVerse PPT Voiceover",
  "Pujiverse Guessing Game",
  "VidPrompt Studio"
];

const experienceRelatedProjectNamesSet = new Set(EXPERIENCE_RELATED_PROJECT_NAMES);

export const AI_ML_AND_EXPERIENCE_DRIVEN_PROJECTS = PROJECTS.filter(project =>
  experienceRelatedProjectNamesSet.has(project.name)
);

export const WEBSITES_AND_WEB_APPS_PROJECTS = PROJECTS.filter(project =>
  !experienceRelatedProjectNamesSet.has(project.name)
);

// No specific separate GitHub repositories were provided, so this section is kept empty.
export const GITHUB_REPOS: Project[] = [];

export const CONTACT_EMAIL = "your.email@example.com"; // Placeholder
export const PHONE_NUMBER = "+1234567890"; // Placeholder
export const LINKEDIN_PROFILE = "https://linkedin.com/in/pujith-sakhamuri"; // Placeholder

// Categorized Social Media Links
// Moving CATEGORIZED_SOCIAL_MEDIA_LINKS declaration before its usage in SOCIAL_MEDIA_LINKS
export const CATEGORIZED_SOCIAL_MEDIA_LINKS: { [key: string]: SocialMedia[] } = {
  YouTube: [
    { platform: "YouTube", name: "PujiVerse Wisdom", url: "https://youtube.com/@PujiVerseWisdom", description: "Channel for wisdom and insights.", icon: "M10 15l5.19-3.21L10 8.59v6.41zm11.56-7.81c.21-.69.31-1.42.34-2.17h.01a3.06 3.06 0 00-3.06-3.06h-.01c-.75.03-1.48.14-2.17.34C16.89 2.22 16.03 2 15 2H9c-1.03 0-1.89.22-2.71.53-.69-.2-1.42-.31-2.17-.34h-.01C3.06 1.94 2 2.94 2 4v16c0 1.06.94 2 2 2h16c1.06 0 2-1.06 2-2V8.75c-.03-.75-.14-1.48-.34-2.17zM9 4h6v2H9V4zm11 14H4V8h16v10z" },
    { platform: "YouTube", name: "PujiVerse Tech", url: "https://youtube.com/@PujiVerseTech", description: "Technology tutorials and reviews.", icon: "M10 15l5.19-3.21L10 8.59v6.41zm11.56-7.81c.21-.69.31-1.42.34-2.17h.01a3.06 3.06 0 00-3.06-3.06h-.01c-.75.03-1.48.14-2.17.34C16.89 2.22 16.03 2 15 2H9c-1.03 0-1.89.22-2.71.53-.69-.2-1.42-.31-2.17-.34h-.01C3.06 1.94 2 2.94 2 4v16c0 1.06.94 2 2 2h16c1.06 0 2-1.06 2-2V8.75c-.03-.75-.14-1.48-.34-2.17zM9 4h6v2H9V4zm11 14H4V8h16v10z" },
    { platform: "YouTube", name: "PujiVerse Kids", url: "https://youtube.com/@PujiVerseKids", description: "Educational and entertaining content for children.", icon: "M10 15l5.19-3.21L10 8.59v6.41zm11.56-7.81c.21-.69.31-1.42.34-2.17h.01a3.06 3.06 0 00-3.06-3.06h-.01c-.75.03-1.48.14-2.17.34C16.89 2.22 16.03 2 15 2H9c-1.03 0-1.89.22-2.71.53-.69-.2-1.42-.31-2.17-.34h-.01C3.06 1.94 2 2.94 2 4v16c0 1.06.94 2 2 2h16c1.06 0 2-1.06 2-2V8.75c-.03-.75-.14-1.48-.34-2.17zM9 4h6v2H9V4zm11 14H4V8h16v10z" },
    { platform: "YouTube", name: "PujiVerse Beatz", url: "https://youtube.com/@PujiVerseBeatz", description: "Music and beat production.", icon: "M10 15l5.19-3.21L10 8.59v6.41zm11.56-7.81c.21-.69.31-1.42.34-2.17h.01a3.06 3.06 0 00-3.06-3.06h-.01c-.75.03-1.48.14-2.17.34C16.89 2.22 16.03 2 15 2H9c-1.03 0-1.89.22-2.71.53-.69-.2-1.42-.31-2.17-.34h-.01C3.06 1.94 2 2.94 2 4v16c0 1.06.94 2 2 2h16c1.06 0 2-1.06 2-2V8.75c-.03-.75-.14-1.48-.34-2.17zM9 4h6v2H9V4zm11 14H4V8h16v10z" },
    { platform: "YouTube", name: "PujiVerse Cine", url: "https://youtube.com/@PujiVerseCine", description: "Movie reviews, analysis, and cinematic content.", icon: "M10 15l5.19-3.21L10 8.59v6.41zm11.56-7.81c.21-.69.31-1.42.34-2.17h.01a3.06 3.06 0 00-3.06-3.06h-.01c-.75.03-1.48.14-2.17.34C16.89 2.22 16.03 2 15 2H9c-1.03 0-1.89.22-2.71.53-.69-.2-1.42-.31-2.17-.34h-.01C3.06 1.94 2 2.94 2 4v16c0 1.06.94 2 2 2h16c1.06 0 2-1.06 2-2V8.75c-.03-.75-.14-1.48-.34-2.17zM9 4h6v2H9V4zm11 14H4V8h16v10z" },
    { platform: "YouTube", name: "PujiVerse World", url: "https://youtube.com/@PujiVerseWorld", description: "Exploring global cultures and events.", icon: "M10 15l5.19-3.21L10 8.59v6.41zm11.56-7.81c.21-.69.31-1.42.34-2.17h.01a3.06 3.06 0 00-3.06-3.06h-.01c-.75.03-1.48.14-2.17.34C16.89 2.22 16.03 2 15 2H9c-1.03 0-1.89.22-2.71.53-.69-.2-1.42-.31-2.17-.34h-.01C3.06 1.94 2 2.94 2 4v16c0 1.06.94 2 2 2h16c1.06 0 2-1.06 2-2V8.75c-.03-.75-.14-1.48-.34-2.17zM9 4h6v2H9V4zm11 14H4V8h16v10z" },
    { platform: "YouTube", name: "PujiVerse Mythos", url: "https://youtube.com/@PujiVerseMythos", description: "Delving into mythology and folklore.", icon: "M10 15l5.19-3.21L10 8.59v6.41zm11.56-7.81c.21-.69.31-1.42.34-2.17h.01a3.06 3.06 0 00-3.06-3.06h-.01c-.75.03-1.48.14-2.17.34C16.89 2.22 16.03 2 15 2H9c-1.03 0-1.89.22-2.71.53-.69-.2-1.42-.31-2.17-.34h-.01C3.06 1.94 2 2.94 2 4v16c0 1.06.94 2 2 2h16c1.06 0 2-1.06 2-2V8.75c-.03-.75-.14-1.48-.34-2.17zM9 4h6v2H9V4zm11 14H4V8h16v10z" },
    { platform: "YouTube", name: "PujiVerse History", url: "https://youtube.com/@PujiVerseHistory", description: "Historical facts and documentaries.", icon: "M10 15l5.19-3.21L10 8.59v6.41zm11.56-7.81c.21-.69.31-1.42.34-2.17h.01a3.06 3.06 0 00-3.06-3.06h-.01c-.75.03-1.48.14-2.17.34C16.89 2.22 16.03 2 15 2H9c-1.03 0-1.89.22-2.71.53-.69-.2-1.42-.31-2.17-.34h-.01C3.06 1.94 2 2.94 2 4v16c0 1.06.94 2 2 2h16c1.06 0 2-1.06 2-2V8.75c-.03-.75-.14-1.48-.34-2.17zM9 4h6v2H9V4zm11 14H4V8h16v10z" },
    { platform: "YouTube", name: "PujiVerse Calm", url: "https://youtube.com/@PujiVerseCalm", description: "Relaxation, meditation, and ambient sounds.", icon: "M10 15l5.19-3.21L10 8.59v6.41zm11.56-7.81c.21-.69.31-1.42.34-2.17h.01a3.06 3.06 0 00-3.06-3.06h-.01c-.75.03-1.48.14-2.17.34C16.89 2.22 16.03 2 15 2H9c-1.03 0-1.89.22-2.71.53-.69-.2-1.42-.31-2.17-.34h-.01C3.06 1.94 2 2.94 2 4v16c0 1.06.94 2 2 2h16c1.06 0 2-1.06 2-2V8.75c-.03-.75-.14-1.48-.34-2.17zM9 4h6v2H9V4zm11 14H4V8h16v10z" },
    { platform: "YouTube", name: "PujiVerse Wealth", url: "https://youtube.com/@PujiVerseWealth", description: "Financial advice and wealth management.", icon: "M10 15l5.19-3.21L10 8.59v6.41zm11.56-7.81c.21-.69.31-1.42.34-2.17h.01a3.06 3.06 0 00-3.06-3.06h-.01c-.75.03-1.48.14-2.17.34C16.89 2.22 16.03 2 15 2H9c-1.03 0-1.89.22-2.71.53-.69-.2-1.42-.31-2.17-.34h-.01C3.06 1.94 2 2.94 2 4v16c0 1.06.94 2 2 2h16c1.06 0 2-1.06 2-2V8.75c-.03-.75-.14-1.48-.34-2.17zM9 4h6v2H9V4zm11 14H4V8h16v10z" },
    { platform: "YouTube", name: "PujiVerse Fit", url: "https://youtube.com/@PujiVerseFit", description: "Fitness, workouts, and healthy living.", icon: "M10 15l5.19-3.21L10 8.59v6.41zm11.56-7.81c.21-.69.31-1.42.34-2.17h.01a3.06 3.06 0 00-3.06-3.06h-.01c-.75.03-1.48.14-2.17.34C16.89 2.22 16.03 2 15 2H9c-1.03 0-1.89.22-2.71.53-.69-.2-1.42-.31-2.17-.34h-.01C3.06 1.94 2 2.94 2 4v16c0 1.06.94 2 2 2h16c1.06 0 2-1.06 2-2V8.75c-.03-.75-.14-1.48-.34-2.17zM9 4h6v2H9V4zm11 14H4V8h16v10z" },
    { platform: "YouTube", name: "PujiVerse Lingo", url: "https://youtube.com/@PujiVerseLingo", description: "Language learning and linguistic explorations.", icon: "M10 15l5.19-3.21L10 8.59v6.41zm11.56-7.81c.21-.69.31-1.42.34-2.17h.01a3.06 3.06 0 00-3.06-3.06h-.01c-.75.03-1.48.14-2.17.34C16.89 2.22 16.03 2 15 2H9c-1.03 0-1.89.22-2.71.53-.69-.2-1.42-.31-2.17-.34h-.01C3.06 1.94 2 2.94 2 4v16c0 1.06.94 2 2 2h16c1.06 0 2-1.06 2-2V8.75c-.03-.75-.14-1.48-.34-2.17zM9 4h6v2H9V4zm11 14H4V8h16v10z" },
    { platform: "YouTube", name: "PujiVerse Talks", url: "https://youtube.com/@PujiVerseTalks", description: "Discussions, interviews, and conversational content.", icon: "M10 15l5.19-3.21L10 8.59v6.41zm11.56-7.81c.21-.69.31-1.42.34-2.17h.01a3.06 3.06 0 00-3.06-3.06h-.01c-.75.03-1.48.14-2.17.34C16.89 2.22 16.03 2 15 2H9c-1.03 0-1.89.22-2.71.53-.69-.2-1.42-.31-2.17-.34h-.01C3.06 1.94 2 2.94 2 4v16c0 1.06.94 2 2 2h16c1.06 0 2-1.06 2-2V8.75c-.03-.75-.14-1.48-.34-2.17zM9 4h6v2H9V4zm11 14H4V8h16v10z" },
    { platform: "YouTube", name: "PujiVerse Shorts", url: "https://youtube.com/@PujiVerseShorts", description: "Short-form video content.", icon: "M10 15l5.19-3.21L10 8.59v6.41zm11.56-7.81c.21-.69.31-1.42.34-2.17h.01a3.06 3.06 0 00-3.06-3.06h-.01c-.75.03-1.48.14-2.17.34C16.89 2.22 16.03 2 15 2H9c-1.03 0-1.89.22-2.71.53-.69-.2-1.42-.31-2.17-.34h-.01C3.06 1.94 2 2.94 2 4v16c0 1.06.94 2 2 2h16c1.06 0 2-1.06 2-2V8.75c-.03-.75-.14-1.48-.34-2.17zM9 4h6v2H9V4zm11 14H4V8h16v10z" },
    { platform: "YouTube", name: "Pujiverse Official", url: "https://youtube.com/@pujiverseoffical", description: "The official PujiVerse hub.", icon: "M10 15l5.19-3.21L10 8.59v6.41zm11.56-7.81c.21-.69.31-1.42.34-2.17h.01a3.06 3.06 0 00-3.06-3.06h-.01c-.75.03-1.48.14-2.17.34C16.89 2.22 16.03 2 15 2H9c-1.03 0-1.89.22-2.71.53-.69-.2-1.42-.31-2.17-.34h-.01C3.06 1.94 2 2.94 2 4v16c0 1.06.94 2 2 2h16c1.06 0 2-1.06 2-2V8.75c-.03-.75-.14-1.48-.34-2.17zM9 4h6v2H9V4zm11 14H4V8h16v10z" },
  ],
  Facebook: [
    { platform: "Facebook", name: "Pujith's Facebook", url: "https://facebook.com/pujith.sakhamuri", description: "Connect on Facebook.", icon: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.15 6 14 6c1.06 0 1.94.09 2.23.13V8h-1.25c-1.16 0-1.39.58-1.39 1.43V12h3.5l-.55 3H14v6.95c5.05-.5 9-4.76 9-9.95z" },
  ],
  Instagram: [
    { platform: "Instagram", name: "Pujith's Instagram", url: "https://instagram.com/pujith_sakhamuri", description: "Follow on Instagram.", icon: "M12 2c-2.71 0-5.11 1.05-6.97 2.76A9.97 9.97 0 002 12c0 2.71 1.05 5.11 2.76 6.97A9.97 9.97 0 0012 22c2.71 0 5.11-1.05 6.97-2.76A9.97 9.97 0 0022 12c0-2.71-1.05-5.11-2.76-6.97A9.97 9.97 0 0012 2zm0 3c2.08 0 3.8 1.44 4.19 3.4H7.81c.39-1.96 2.11-3.4 4.19-3.4zm0 14c-2.08 0-3.8-1.44-4.19-3.4h8.38c-.39 1.96-2.11 3.4-4.19 3.4zM4.6 13h2.64c.14.77.46 1.47.88 2.08l-1.97 1.97C4.7 15.6 4 13.9 4 12c0-1.12.22-2.2.6-3.17l1.97 1.97c-.42.61-.74 1.31-.88 2.08zm14.8 0c-.14-.77-.46-1.47-.88-2.08l1.97-1.97c.42.97.64 2.05.64 3.17 0 1.9-.7 3.6-1.83 4.93l-1.97-1.97c.42-.61.74-1.31.88-2.08z" },
  ],
  X: [
    { platform: "X", name: "Pujith on X", url: "https://x.com/pujith_sakhamuri", description: "Follow on X (Twitter).", icon: "M22.46 6c-.77.34-1.6.56-2.46.68.87-.52 1.54-1.35 1.85-2.31-.81.48-1.71.83-2.66 1.02C18.23 3.6 16.96 3 15.5 3c-2.3 0-4.18 1.87-4.18 4.18 0 .33.03.65.1.96-3.48-.17-6.55-1.84-8.61-4.36-.36.62-.56 1.35-.56 2.14 0 1.45.74 2.73 1.87 3.48-.69-.02-1.34-.21-1.91-.53v.05c0 2.03 1.44 3.72 3.35 4.1-.35.1-.72.15-1.1.15-.27 0-.53-.03-.79-.08.53 1.66 2.07 2.87 3.91 2.9A8.35 8.35 0 013 18.5c-.68 0-1.35-.05-2-.13C2.5 19.8 4.38 21 6.46 21c7.75 0 11.99-6.4 11.99-11.99 0-.18 0-.36-.01-.54.82-.59 1.52-1.3 2.09-2.14z" },
  ],
  // Removed Telegram section
};

// SOCIAL_MEDIA_LINKS is now a derived property if needed,
// but CATEGORIZED_SOCIAL_MEDIA_LINKS is the primary source.
// This is kept for backward compatibility with geminiService.ts for now.
// Ensure CATEGORIZED_SOCIAL_MEDIA_LINKS is declared before this block.
export const SOCIAL_MEDIA_LINKS: SocialMedia[] = [];
for (const category in CATEGORIZED_SOCIAL_MEDIA_LINKS) {
  SOCIAL_MEDIA_LINKS.push(...CATEGORIZED_SOCIAL_MEDIA_LINKS[category]);
}
