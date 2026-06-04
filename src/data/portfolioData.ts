// ================================================================
// src/data/portfolioData.ts
// ================================================================
// ✅ THIS IS THE MAIN FILE TO EDIT FOR ALL YOUR CONTENT.
// All sections of the website pull data from here.
// You do NOT need to touch individual component files
// unless you want to change layout/design.
// ================================================================

export const personalInfo = {
  // ---- YOUR NAME ------------------------------------------------
  name: "Mohammad Wasifullah Nasim",
  shortName: "Wasif Nasim",
  initials: "WN.",

  // ---- YOUR TAGLINE (shown under name in hero) ------------------
  tagline: "Data Analyst · AI/ML Enthusiast",

  // ---- TYPEWRITER ROLES — shown in rotating typewriter effect ---
  // Add or remove roles as you like
  roles: [
    "Data Analyst",
    "AI & ML Enthusiast",
    "Python Developer",
    "Power BI Developer",
    "AI Tools Trainer",
  ],

  // ---- SHORT BIO (hero section) ---------------------------------
  heroBio:
    "AI & Data Science student turning raw data into meaningful insights. Skilled in Python, SQL, Power BI, and Machine Learning — passionate about building data-driven solutions that make an impact.",

  // ---- ABOUT SECTION PARAGRAPHS (up to 3 paras) ----------------
  // Wrap key words in **double asterisks** — they render as highlighted text
  aboutParagraphs: [
    "I'm an **AI & Data Science** undergraduate, **Co-Founder of Codeflux**, and a passionate advocate for **technology-driven innovation**. Having conducted **17+ nationwide workshops** in **AI and Machine Learning**, I've had the opportunity to train students, non-IT professionals, and industry professionals across online and offline platforms.",
    "From **data analytics** and **machine learning** to **computer vision** and **AI applications**, I thrive on transforming ideas into **impactful solutions**. Beyond building projects, I believe in making **technology accessible**, helping others learn, and using **data and AI** to create **meaningful change**.",
  ],

  // ---- CONTACT DETAILS ------------------------------------------
  email: "iwasifnasim@gmail.com",
  phone: "+91 8669149671",
  location: "Nagpur, Maharashtra, India",

  // ---- SOCIAL LINKS --------------------------------------------
  github: "https://github.com/Wasifnasim",
  linkedin: "https://www.linkedin.com/in/wasifnasim",

  // ---- PROFILE PHOTO -------------------------------------------
  // CHANGE: Replace this path with your actual photo.
  // Steps:
  //   1. Add your photo to the /public/img/ folder (e.g. wasif.jpg)
  //   2. Change the value below to "/img/wasif.jpg"
  //   3. Set usePhoto to true
  profilePhoto: "/img/profile.png",
  usePhoto: true,

  // ---- RESUME --------------------------------------------------
  // CHANGE: Add your resume PDF to /public/documents/resume.pdf
  // then set hasResume to true to enable the download button
  resumePath: "/documents/resume.pdf",
  hasResume: true, // CHANGE: set to true once you add your resume

  // ---- HERO STATS (floating badges on avatar) ------------------
  heroStats: [
    { value: "8.13", label: "SGPA · Rank 1" },
    { value: "Data Analyst", label: "Fresher" }
  ],

  // ---- ABOUT PAGE STATS (big numbers) --------------------------
  aboutStats: [
    { value: "8+", label: "Projects" },
    { value: "17+", label: "Workshops" },
    { value: "4+", label: "Certificates" },
  ],

  // ---- INTERESTS -----------------------------------------------
  interests: ["Poetry", "Gaming", "Fitness"],
};

// ================================================================
// SKILLS
// ================================================================
export const skillCategories = [
  {
    icon: "🗄️",
    title: "Data & Databases",
    skills: [
      "MySQL", "Data Cleaning", "Data Entry",
      "Data Analysis", "Microsoft Excel", "Data Preprocessing",
    ],
  },
  {
    icon: "📊",
    title: "Visualization & BI",
    skills: [
      "Power BI", "Data Visualization",
      "Dashboard Design", "Business Growth Analysis",
    ],
  },
  {
    icon: "🐍",
    title: "Programming",
    skills: [
      "Python", "SQL", "Pandas",
      "NumPy", "Matplotlib", "Seaborn",
    ],
  },
  {
    icon: "🤖",
    title: "Machine Learning & AI",
    skills: [
      "Machine Learning", "Supervised Learning", "Unsupervised Learning",
      "YoloV8 Model Training", "Scikit-learn", "Model Building",
    ],
  },
  {
    icon: "🛠️",
    title: "Tools & Soft Skills",
    skills: [
      "Git & GitHub", "Jupyter Notebook", "AI Tools Trainer",
      "Workshop Facilitation", "Mentorship", "Tech Branding",
    ],
  },
];

// ================================================================
// EXPERIENCE
// ================================================================
export const experiences = [
  {
    period: "Apr 2025 – Dec 2025",
    role: "Co-Founder / Data Analyst",
    company: "Codeflux Company",
    location: "Nagpur",
    bullets: [
      "Managed analytics, growth strategies, and technology branding for the startup.",
      "Designed and conducted 17+ workshops for students, professionals, and non-professionals on AI/ML tools.",
      "Mentored peers in technical projects and promoted a culture of collaborative learning.",
    ],
  },
  {
    period: "Jan 2025 – Feb 2025",
    role: "Machine Learning Intern",
    company: "NU Intelligence",
    location: "Nagpur",
    bullets: [
      "Gained hands-on training in Python for machine learning applications.",
      "Implemented algorithms for supervised and unsupervised learning models.",
      "Worked on data preprocessing, cleaning, and visualization pipelines for model building.",
      "Strengthened skills in applying ML techniques to real-world datasets.",
    ],
  },
];

// ================================================================
// PROJECTS
// ================================================================
export const projects = [
  {
    icon: "🛒",
    year: "2025",
    name: "E-Commerce Sales Performance Dashboard",
    description:
      "Analyzed sales data to uncover revenue trends, product performance and customer behavior. Created a compelling Power BI dashboard highlighting top-selling categories, profit contributors and seasonal patterns.",
    tech: ["MySQL", "Power BI", "Data Analysis"],
    // CHANGE: Replace '#' with your actual GitHub repo link
    link: "https://github.com/Wasifnasim/SQL-POWERBI-PROJECT.git",
    ongoing: false,
  },
  {
    icon: "🌿",
    year: "2025",
    name: "Decision Tree-Based Reflection Agent",
    description:
      "Developed a deterministic decision tree-based behavioral reflection system with structured branching logic and signal-based state tracking.",
    tech: ["Python", "JSON", "Decision Trees"],
    link: "https://github.com/Wasifnasim/DeepThought-Assignment-.git",
    ongoing: false,
  },
  {
    icon: "₿",
    year: "2026",
    name: "Crypto SIP User Behavior & Retention Dashboard",
    description:
      "Simulated a dataset of 500 users for crypto SIP investments. Analyzed user retention, drop-off patterns, and investment behavior. Built a Power BI dashboard to track engagement and growth metrics.",
    tech: ["Python", "Power BI", "Data Simulation"],
    link: "https://github.com/Wasifnasim/crypto-sip-user-behavior-dashboard.git",
    ongoing: false,
  },
  {
    icon: "🎓",
    year: "2026",
    name: "CareerAI: ML-Powered Career Counseling Platform",
    description:
      "Hybrid ML recommendation system that analyzes academic performance, aptitude, and interests to predict suitable technical career paths for PCM students and generate personalized roadmaps via conversational AI.",
    tech: ["Python", "Machine Learning", "Conversational AI", "Recommendation System"],
    link: "https://github.com/Wasifnasim",
    ongoing: false,
  },
  {
    icon: "🛍️",
    year: "2026",
    name: "Quick-Commerce Data Scraping & Analysis",
    description:
      "Collected haircare product data from Blinkit, Zepto, and Swiggy Instamart across 5 Bangalore pin codes. Cleaned and structured raw data to compare pricing, discounts, stock status, and brand availability.",
    tech: ["Web Scraping", "Python", "Data Cleaning", "Pandas"],
    link: "https://github.com/Wasifnasim/Quick-Commerce-Data-Scraping-Analysis.git",
    ongoing: false,
  },
  {
    icon: "📈",
    year: "2026",
    name: "AI Financial Market Data Analysis",
    description:
      "Performed exploratory data analysis on financial datasets to uncover stock trends, event impacts, and AI-driven market insights using Python and visualization tools.",
    tech: ["Python", "EDA", "Matplotlib", "Seaborn"],
    link: "https://github.com/Wasifnasim/AI-Financial-Market-Data-Analysis-.git",
    ongoing: false,
  },
  {
    icon: "🛡️",
    year: "2026",
    name: "Women Safety Project",
    description:
      "Built a machine learning-based real-time threat detection system to enhance women's safety by detecting risks and enabling quick alerts.",
    tech: ["Machine Learning", "Real-time Detection", "Python"],
    link: "https://github.com/Wasifnasim/Women_Safety_Aalytical-_System.git",
    ongoing: true, // CHANGE: set to false when project is complete
  },
  {
    icon: "🧬",
    year: "2026",
    name: "Synthetic Data Generation",
    description:
      "Created a Python-based system to generate realistic synthetic datasets for machine learning experiments, testing, and privacy-preserving analytics.",
    tech: ["Python", "Synthetic Data", "Privacy Analytics"],
    link: "https://github.com/Wasifnasim",
    ongoing: false,
  },
];

// ================================================================
// EDUCATION
// ================================================================
export const education = [
  {
    icon: "🎓",
    degree: "B.Tech in Artificial Intelligence & Data Science",
    school: "Anjuman College of Engineering and Technology, Nagpur",
    period: "2023 – 2027",
    status: "Ongoing",
    badge: "SGPA: 8.13 · University Rank 1",
    description:
      "Pursuing undergraduate studies with a focus on AI, machine learning, data science, and intelligent systems. Achieved University Rank 1 with 8.13 SGPA.",
    tags: ["AI & Data Science", "Machine Learning", "Python", "Data Analytics"],
  },
  {
    icon: "📖",
    degree: "Higher Secondary Education (Class XII)",
    school: "Taywade Junior College",
    period: "2023",
    status: "Completed",
    badge: "Percentage: 65.75%",
    description: "",
    tags: [],
  },
];

// ================================================================
// CERTIFICATIONS
// ================================================================
export const certifications = [
  {
    icon: "📊",
    name: "Data Visualisation: Empowering Business with Effective Insights",
    issuer: "Tata (Job Simulation)",
    // CHANGE: Add certificate URL if you have a shareable link
    link: "#",
  },
  {
    icon: "🔍",
    name: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia",
    link: "#",
  },
  {
    icon: "🗄️",
    name: "SQL Skill Up",
    issuer: "GeeksforGeeks",
    link: "#",
  },
  {
    icon: "🐍",
    name: "Python for Data Science",
    issuer: "Skill Up",
    link: "#",
  },
];

// ================================================================
// AWARD BANNER (shown in About section)
// ================================================================
export const award = {
  icon: "🏆",
  title: "University Ranker #1 — 2025",
  subtitle: "Rashtrasant Tukadoji Maharaj Nagpur University · 8.13 SGPA",
};
