import { Experience, Project, SocialMedia } from './types';

export const PROFILE_NAME = "Pujith Sakhamuri";
export const ABOUT_ME_TEXT = `Hello! I'm Pujith Sakhamuri, a Data Engineer with over 6 years of experience in designing and implementing scalable machine learning models, data pipelines, and AI-driven solutions. I have a strong background in Python, R, Scala, and Java, specializing in Machine Learning, Deep Learning, Natural Language Processing (NLP), Computer Vision, Generative AI, and Big Data Engineering. My expertise spans end-to-end ML/AI workflows, MLOps, containerized deployments, and robust data management. I am passionate about leveraging technology to build innovative solutions and continuously expand my skills in the IT world.`;

// Profile image path. Please save your profile image as 'profile.jpg' and
// place it in the 'media/' folder at the root of your project on GitHub.
export const PROFILE_IMAGE_SRC = 'https://raw.githubusercontent.com/pujithchowdarys/my-protfolio/main/media/profile.jpg';

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

// Retrieve THUMIO_API_KEY from environment variables
export const THUMIO_API_KEY = process.env.THUMIO_API_KEY;
const THUMIO_BASE_URL = 'https://image.thum.io/get/width/1200/crop/800/noanimate/';

// Original project list
const originalProjects: Project[] = [
  {
    name: "My Professional Portfolio",
    description: "A comprehensive online portfolio showcasing IT career experience, projects, GitHub repositories, and social media presence, including an AI assistant.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Gemini API", "Frontend Development"],
    githubLink: "https://github.com/pujithchowdarys/my-protfolio",
    liveLink: "https://pujith-sakhamuri-portfolio.vercel.app/",
    imageUrl: "https://images.unsplash.com/photo-1549692520-cb4a05e55e76?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Pujiverse Creation Spark",
    description: "An application that takes an idea and generates creative content like songs, stories, or narrations with downloadable lyrics and voiceovers in multiple languages.",
    technologies: ["Gemini API", "AI/ML", "Content Generation", "Text-to-Speech", "Frontend Development"],
    githubLink: "https://github.com/pujithchowdarys/Creative-Spark",
    liveLink: "https://pujiverse-creative-spark.vercel.app/",
    imageUrl: "https://images.unsplash.com/photo-1620712948293-f852b7a40a6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Recipe Voice-over Generator",
    description: "Generate cooking voice-overs from recipe steps and nutritional information in multiple languages.",
    technologies: ["Gemini API", "Text-to-Speech", "NLP", "Multilingual Support", "Web Development"],
    githubLink: "https://github.com/pujithchowdarys/Recipe-Voice-over-Generator",
    liveLink: "https://pujiverse-recipe-voice-over-generat.vercel.app/",
    imageUrl: "https://images.unsplash.com/photo-1556910110-fb2354c4f93b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "YouTube Video Creator",
    description: "Generate perfect YouTube video scripts, voiceovers, and background music for any category to streamline your content creation process.",
    technologies: ["Gemini API", "Script Generation", "Text-to-Speech", "Content Creation Tools", "Web Development"],
    githubLink: "https://github.com/pujithchowdarys/PujiVerse-Video-Content-Creator",
    liveLink: "https://puji-verse-video-content-creator.vercel.app/",
    imageUrl: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Pujiverse Presentation Generator",
    description: "Generate animated PowerPoint presentations with voiceovers and video on any topic using AI. Create slide content, generate a corresponding voiceover, and download PPTX, audio, and combined video.",
    technologies: ["Gemini API", "Presentation Generation", "Text-to-Speech", "Video Generation", "AI/ML"],
    githubLink: "https://github.com/pujithchowdarys/AI-Animated-Presentation-Generator",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Text-to-Video Generator",
    description: "A sophisticated web application that transforms textual prompts into high-quality videos using the Gemini API. Users can specify aspect ratio and resolution for their creations.",
    technologies: ["Gemini API", "Video Generation", "Frontend Development", "Prompt Engineering"],
    githubLink: "https://github.com/pujithchowdarys/text-to-video",
    liveLink: "https://pujiverse-text-to-video.vercel.app/",
    imageUrl: "https://images.unsplash.com/photo-1579783902671-80a2569c766b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Movie Storyteller & Live AI",
    description: "Generate movie stories, analyze video transcripts, engage in real-time conversations, and get answers using Gemini AI with text-to-speech narration.",
    technologies: ["Gemini API", "Real-time AI", "Text-to-Speech", "NLP", "Video Analysis", "Conversational AI"],
    githubLink: "https://github.com/pujithchowdarys/movie-subtitle-to-story",
    liveLink: "https://pujiverse-subtitle-to-story.vercel.app/",
    imageUrl: "https://images.unsplash.com/photo-1485846234647-a4365de4d0fb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "PPT Voiceover Generator",
    description: "Generates voiceovers for each 'slide' of text input, allowing playback and download.",
    technologies: ["Gemini API", "Text-to-Speech", "Presentation Tools", "Audio Generation"],
    githubLink: "https://github.com/pujithchowdarys/PPT-Voiceover-Generator",
    liveLink: "https://pujiverse-ppt-voiceover-generator.vercel.app/",
    imageUrl: "https://images.unsplash.com/photo-1522204523234-87295a78f598?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "VidPrompt Studio",
    description: "A browser-based web app for video creators to upload videos, generate scripts and cut timeframes with AI, auto-trim/combine/narrate scenes, edit with an in-browser editor, and download the final video.",
    technologies: ["Gemini API", "Video Editing", "Script Generation", "Content Creation", "AI/ML"],
    githubLink: "https://github.com/pujithchowdarys/VidPrompt-Studio_new",
    liveLink: "https://pujiverse-vid-prompt-studio-new.vercel.app/",
    imageUrl: "https://images.unsplash.com/photo-1582234057038-164789b78345?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Smart Scene Cutter",
    description: "An AI-powered web application to analyze video and intelligently cut scenes based on user descriptions.",
    technologies: ["Gemini API", "Video Processing", "AI/ML", "Scene Detection"],
    githubLink: "https://github.com/pujithchowdarys/SmartSceneCutter",
    liveLink: "https://smart-scene-cutter.vercel.app/",
    imageUrl: "https://images.unsplash.com/photo-1593642702821-c770c279d501?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Pujith Connects",
    description: "A personal website centralizing Pujith Sakhamuri's online presence, including social media, projects, and contact information.",
    technologies: ["Web Development", "Portfolio", "Social Media Integration", "Frontend Development"],
    githubLink: "https://github.com/pujithchowdarys/Pujiverse",
    liveLink: "https://pujiverse.vercel.app/",
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8ed6d2187c7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Business Manager Pro",
    description: "A comprehensive web application to manage daily business, chits, household expenses, and loans with insightful summary reports for financial tracking.",
    technologies: ["Web Application", "Financial Management", "Reporting", "Dashboard", "Frontend Framework"],
    githubLink: "https://github.com/pujithchowdarys/biz-manager",
    liveLink: "https://biz-manager-eight.vercel.app/#/",
    imageUrl: "https://images.unsplash.com/photo-1551288259-cd197931398c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export const PROJECTS: Project[] = originalProjects.map(project => {
  if (project.liveLink) {
    let screenshotUrl = `https://via.placeholder.com/1200x800.png?text=Live+Link+Preview+Unavailable`;
    if (THUMIO_API_KEY && THUMIO_API_KEY !== 'YOUR_THUMIO_API_KEY_HERE') {
      screenshotUrl = `${THUMIO_BASE_URL}auth/${THUMIO_API_KEY}/${project.liveLink}`;
    } else {
      // This path already explicitly states the API key is needed.
      screenshotUrl = `https://via.placeholder.com/1200x800.png?text=Live+Link+Preview+Unavailable+(Configure+THUMIO_API_KEY)`;
    }
    return { ...project, imageUrl: screenshotUrl };
  }
  // If no liveLink, keep original imageUrl or use a generic placeholder
  return {
    ...project,
    imageUrl: project.imageUrl || "https://via.placeholder.com/1200x800.png?text=No+Live+Link+or+Image"
  };
});

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
      name: "@PujiVerseTech", // Changed to explicitly match prompt's desired channel
      url: "https://www.youtube.com/@PujiVerseTech",
      description: "Technology updates and tutorials on AI, ML, and data engineering.",
      icon: "M10 15l5.19-3L10 9v6m11.5-7.5c-.1 1.7-.1 3.3 0 5-.2 1.4-.4 2.8-.7 4.1-.3 1.3-.7 2.4-1.2 3.5-.5 1.1-1.1 2-1.9 2.8-.8.8-1.7 1.4-2.8 1.9-1.1.5-2.2.9-3.5 1.2-1.3.3-2.7.5-4.1.7-1.7.1-3.3.1-5 0-1.4-.2-2.8-.4-4.1-.7-1.3-.3-2.4-.7-3.5-1.2-1.1-.5-2-1.1-2.8-1.9-.8-.8-1.4-1.7-1.9-2.8-.5-1.1-.9-2.2-1.2-3.5-.3-1.3-.5-2.7-.7-4.1-.1-1.7-.1-3.3 0-5 .2-1.4.4-2.8.7-4.1.3-1.3.7-2.4 1.2-3.5.5-1.1 1.1-2 1.9-2.8.8-.8 1.7-1.4 2.8-1.9 1.1-.5 2.2-.9 3.5-1.2 1.3-.3 2.7-.5 4.1-.7 1.7-.1 3.3-.1 5 0 1.4.2 2.8.4 4.1.7 1.3.3 2.4.7 3.5 1.2 1.1.5 2 1.1 2.8 1.9.8.8 1.4 1.7 1.9 2.8.5 1.1.9 2.2 1.2 3.5.3 1.3.5 2.7.7 4.1z"
    },
    {
      platform: "X",
      name: "Pujith on X",
      url: "https://x.com/pujithchowdary1", // Updated X URL
      description: "Short updates and thoughts on tech and industry trends."
    },
    // New YouTube Handles
    { platform: "YouTube", name: "@PujiVerseWisdom", url: "https://www.youtube.com/@PujiVerseWisdom", description: "Wisdom and insights channel." },
    // Removed duplicate PujiVerseTech as it's now the main 'YouTube' entry above
    { platform: "YouTube", name: "@PujiVerseKids", url: "https://www.youtube.com/@PujiVerseKids", description: "Content for kids." },
    { platform: "YouTube", name: "@PujiVerseBeatz", url: "https://www.youtube.com/@PujiVerseBeatz", description: "Music and beats channel." },
    { platform: "YouTube", name: "@PujiVerseCine", url: "https://www.youtube.com/@PujiVerseCine", description: "Cinema and film related content." },
    { platform: "YouTube", name: "@PujiVerseWorld", url: "https://www.youtube.com/@PujiVerseWorld", description: "Exploring the world." },
    { platform: "YouTube", name: "@PujiVerseMythos", url: "https://www.youtube.com/@PujiVerseMythos", description: "Mythology and folklore stories." },
    { platform: "YouTube", name: "@PujiVerseHistory", url: "https://www.youtube.com/@PujiVerseHistory", description: "Historical facts and documentaries." },
    { platform: "YouTube", name: "@PujiVerseCalm", url: "https://www.youtube.com/@PujiVerseCalm", description: "Relaxation and calming content." },
    { platform: "YouTube", name: "@PujiVerseWealth", url: "https://www.youtube.com/@PujiVerseWealth", description: "Financial and wealth management tips." },
    { platform: "YouTube", name: "@PujiVerseFit", url: "https://www.youtube.com/@PujiVerseFit", description: "Fitness and health content." },
    { platform: "YouTube", name: "@PujiVerseLingo", url: "https://www.youtube.com/@PujiVerseLingo", description: "Language learning and linguistics." },
    { platform: "YouTube", name: "@PujiVerseTalks", url: "https://www.youtube.com/@PujiVerseTalks", description: "Talks and discussions on various topics." },
    { platform: "YouTube", name: "@PujiVerseShorts", url: "https://www.youtube.com/@PujiVerseShorts", description: "Short video clips." },
    { platform: "YouTube", name: "@pujiverseoffical", url: "https://www.youtube.com/@pujiverseoffical", description: "Official Pujiverse channel." }
  ],
  "Creative Outlets": [
    {
      platform: "Instagram",
      name: "Pujith's Instagram",
      url: "https://www.instagram.com/pujithchowdary_sakhamuri/", // Updated Instagram URL
      description: "Personal snapshots and occasional tech-related visual content.",
      icon: "M7.8 2h8.4C17.684 2 18 2.316 18 3.4v8.4c0 1.084-.316 1.4-1.4 1.4H7.8C6.716 13.2 6 12.884 6 11.8V3.4C6 2.316 6.316 2 7.8 2zm0 1.4a.4.4 0 00-.4.4v7.6c0 .22.18.4.4.4h7.6a.4.4 0 00.4-.4V3.8a.4.4 0 00-.4-.4H7.8zM12 5.6a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4zm0 1.4a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6zM15.4 3.8a.7.7 0 11-1.4 0 .7.7 0 011.4 0z"
    }
  ],
  // Added for footer quick links and follow me section
  "General Socials": [
    { platform: "Facebook", name: "Facebook Profile", url: "https://www.facebook.com/s.pujith369/", description: "Connect on Facebook." }, // Updated Facebook URL
    { platform: "Snapchat", name: "Snapchat Profile", url: "https://snapchat.com/add/PujithSakhamuri", description: "Follow me on Snapchat." },
  ],
};

export const CONTACT_EMAIL = "sakhamuripujith@gmail.com";
export const PHONE_NUMBER = "+1(216)307-5432";
export const LINKEDIN_PROFILE = "https://www.linkedin.com/in/pujith-s-284a4219b/";

// SVG paths for social media icons for the footer
export const FOOTER_SOCIAL_ICONS: { [platform: string]: { path: string; color: string; hoverColor: string; } } = {
  YouTube: {
    path: "M10 15l5.19-3L10 9v6m11.5-7.5c-.1 1.7-.1 3.3 0 5-.2 1.4-.4 2.8-.7 4.1-.3 1.3-.7 2.4-1.2 3.5-.5 1.1-1.1 2-1.9 2.8-.8.8-1.7 1.4-2.8 1.9-1.1.5-2.2.9-3.5 1.2-1.3.3-2.7.5-4.1.7-1.7.1-3.3.1-5 0-1.4-.2-2.8-.4-4.1-.7-1.3-.3-2.4-.7-3.5-1.2-1.1-.5-2-1.1-2.8-1.9-.8-.8-1.4-1.7-1.9-2.8-.5-1.1-.9-2.2-1.2-3.5-.3-1.3-.5-2.7-.7-4.1-.1-1.7-.1-3.3 0-5 .2-1.4.4-2.8.7-4.1.3-1.3.7-2.4 1.2-3.5.5-1.1 1.1-2 1.9-2.8.8-.8 1.7-1.4 2.8-1.9 1.1-.5 2.2-.9 3.5-1.2 1.3-.3 2.7-.5 4.1-.7 1.7-.1 3.3-.1 5 0 1.4.2 2.8.4 4.1.7 1.3.3 2.4.7 3.5 1.2 1.1.5 2 1.1 2.8 1.9.8.8 1.4 1.7 1.9 2.8.5 1.1.9 2.2 1.2 3.5.3 1.3.5 2.7.7 4.1z",
    color: "text-red-600",
    hoverColor: "hover:text-red-400"
  },
  Instagram: {
    path: "M7.8 2h8.4C17.684 2 18 2.316 18 3.4v8.4c0 1.084-.316 1.4-1.4 1.4H7.8C6.716 13.2 6 12.884 6 11.8V3.4C6 2.316 6.316 2 7.8 2zm0 1.4a.4.4 0 00-.4.4v7.6c0 .22.18.4.4.4h7.6a.4.4 0 00.4-.4V3.8a.4.4 0 00-.4-.4H7.8zM12 5.6a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4zm0 1.4a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6zM15.4 3.8a.7.7 0 11-1.4 0 .7.7 0 011.4 0z",
    color: "text-pink-600",
    hoverColor: "hover:text-pink-400"
  },
  X: { // Twitter
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-6.597-8.717L5.337 22H1.77l7.581-8.283L1.5 2.25H8.01l4.713 6.231L18.244 2.25zm-2.885 15.404h1.407L7.032 4.2H5.507l10.352 13.454z",
    color: "text-gray-200", // White/light gray for X logo on dark background
    hoverColor: "hover:text-white"
  },
  LinkedIn: {
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    color: "text-blue-500",
    hoverColor: "hover:text-blue-300"
  },
  Facebook: {
    path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.812c-3.311 0-4.188 1.328-4.188 4v2z",
    color: "text-blue-700",
    hoverColor: "hover:text-blue-500"
  },
  Snapchat: {
    path: "M11.996 0c-6.627 0-12 4.093-12 9.141 0 3.064 1.549 5.864 4.018 7.625.326.231.597.47.818.708 1.487 1.621 3.242 3.193 4.896 4.542.441.365 1.01.534 1.734.534.722 0 1.29-.168 1.732-.533 1.654-1.35 3.409-2.922 4.896-4.543.221-.237.493-.476.818-.707 2.469-1.761 4.019-4.561 4.019-7.625 0-5.048-5.373-9.141-12-9.141zm-.004 1.579c5.235 0 9.5 3.228 9.5 7.562 0 2.536-1.312 4.858-3.696 6.551-.318.225-.572.457-.779.673-1.42 1.54-3.09 3.04-4.66 4.331-.383.315-.884.457-1.365.457-.482 0-.983-.142-1.366-.457-1.57-1.29-3.24-2.791-4.66-4.332-.207-.216-.461-.448-.779-.672-2.384-1.693-3.696-4.015-3.696-6.55 0-4.334 4.265-7.562 9.5-7.562z",
    color: "text-yellow-300",
    hoverColor: "hover:text-yellow-100"
  }
};