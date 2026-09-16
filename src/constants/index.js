export const clientProjects = [
  {
    name: "AI InterConnect",
    slug: "ai-interconnect",
    contribution:
      "Converted an existing GoHighLevel drag-and-drop website into a standalone HTML website and deployed it on LeadEngine.",
    url: "https://www.aiinterconnect.com/",
    domain: "aiinterconnect.com",
    category: "AI / B2B growth",
    description:
      "A business website presenting AI-powered outreach, sales workflows, and go-to-market services for B2B companies.",
  },
  {
    name: "SusuKonnect",
    slug: "susukonnect",
    contribution:
      "Built the platform from scratch, including product logic, UI implementation, development, QA, and KYC-related workflow implementation.",
    url: "https://susukonnect.com/",
    domain: "susukonnect.com",
    category: "Fintech / Community savings",
    description:
      "A website for a group savings platform serving communities across Africa, the Caribbean, and the diaspora.",
  },
  {
    name: "8K AI Films",
    slug: "8k-ai-films",
    contribution:
      "Built a cinematic pitching website for the client, including generated visual/video content and a scroll-driven animated experience designed for presentation and pitching.",
    url: "https://8kaifilms.com/",
    domain: "8kaifilms.com",
    category: "AI / Digital media",
    description:
      "An editorial website presenting film series, characters, and story timelines for an AI film brand.",
  },
];

const hydroponicsProject = {
  name: "AI-Powered IoT Hydroponics System",
  category: "AI · IoT · Embedded Systems · Cloud",
  featured: true,
  image: "hydroponics/prototype",
  imageWidth: 800,
  imageHeight: 1067,
  alt: "Hydroponics prototype exhibited with lettuce, nutrient reservoirs, Raspberry Pi control hardware, and monitoring dashboards",
  description:
    "A smart hydroponics farming system built around Raspberry Pi, real-time sensors, automated nutrient and water control, plant health monitoring, and cloud-connected dashboards.",
  role: "Computer Engineer · AI & Embedded Systems Developer",
  tags: [
    "Raspberry Pi",
    "Python",
    "IoT Sensors",
    "Relay Control",
    "Machine Learning",
    "Azure IoT",
    "Dashboard",
  ],
  url: null,
  details: {
    overview:
      "An AI-powered hydroponics system that monitors environmental and water conditions in real time, automates actuation through pumps and relays, and uses machine learning for plant disease detection and nutrient-status prediction. A live dashboard and physical prototype bring the sensing, control, and monitoring workflow together.",
    capabilities: [
      "Monitors pH, EC/TDS, water level, temperature, and humidity.",
      "Uses Raspberry Pi as the edge controller, with relays and pumps for nutrient and water control.",
      "Includes plant disease detection and nutrient-status / deficiency prediction.",
      "Connects sensor data to a live dashboard and a cloud-connected monitoring workflow.",
    ],
    sections: [
      {
        title: "Physical Prototype",
        description:
          "The working prototype demonstrated physically, with plants, reservoirs, sensing hardware, and actuation connected on the exhibition bench.",
        images: [
          {
            src: "hydroponics/exhibition",
            width: 1139,
            height: 1600,
            alt: "Exhibited hydroponics prototype with lettuce, grow lights, reservoirs, tubing, and control electronics",
            caption: "Physical prototype at the exhibition.",
          },
        ],
      },
      {
        title: "System Architecture",
        description:
          "Raspberry Pi connects sensing, actuation, and machine-learning workflows. The diagram outlines an Azure-connected, digital-twin-oriented monitoring architecture; it is not a claim that every depicted cloud or mobile component was fully deployed.",
        images: [
          {
            src: "hydroponics/architecture",
            width: 1100,
            height: 560,
            alt: "HydroGrow architecture linking real-time sensors, Raspberry Pi, nutrient pumps, machine learning, and Azure-oriented monitoring",
            caption: "System overview and cloud monitoring architecture.",
          },
        ],
      },
      {
        title: "Hardware and Sensors",
        description:
          "The annotated hardware identifies the Raspberry Pi 4B, relay module, ADS1115 ADC, pH probe, TDS/EC sensing, DHT22 temperature/humidity sensor, and nutrient and water reservoirs.",
        images: [
          {
            src: "hydroponics/hardware",
            width: 528,
            height: 632,
            alt: "Annotated Raspberry Pi controller, relay board, pH and TDS sensor modules, reservoirs, and DHT22 sensor",
            caption: "Labeled sensing and control hardware.",
          },
        ],
      },
      {
        title: "Dashboard / Monitoring",
        description:
          "Dashboard views from the physical demonstration show water and environmental readings, system alerts, and plant disease and nutrient-status outputs.",
        images: [
          {
            src: "hydroponics/dashboard",
            width: 1200,
            height: 900,
            alt: "HydroGrow dashboard on a laptop showing pH, EC, water level, temperature, humidity, and alerts",
            caption: "Live dashboard photographed during the demonstration.",
          },
          {
            src: "hydroponics/analytics",
            width: 1200,
            height: 900,
            alt: "Plant analytics monitoring view showing disease and nutrient-status outputs",
            caption:
              "Plant analytics and digital-twin-oriented monitoring view.",
          },
        ],
      },
    ],
  },
};

export const automationProjects = [
  {
    name: "News-Driven FX Trading Agent",
    category: "Agentic AI · Financial Systems",
    description:
      "An autonomous FX trading system that processes live financial news, evaluates trading opportunities with an LLM, applies validation and safety checks, and sends orders through Interactive Brokers.",
    architecture: [
      "News Agent",
      "LLM Judge",
      "Safety Layer",
      "Execution",
      "Post-Trade Review",
    ],
    role: "AI Agent Developer & System Architect",
    tags: ["Python", "OpenAI API", "Interactive Brokers API", "LSEG Eikon"],
    image: null,
    url: null,
  },
  {
    name: "AI Lead Auto-Reply & Follow-Up",
    category: "AI Automation · Lead Management",
    description:
      "An automated lead-response workflow that captures incoming enquiries from forms or Gmail, generates context-aware replies with an AI model, sends responses automatically, and logs each interaction to Google Sheets.",
    architecture: [
      "Form / Gmail",
      "AI Reply Generation",
      "Gmail",
      "Google Sheets",
    ],
    tags: ["n8n", "LLM API", "Gmail", "Google Sheets"],
    image: "automation/lead-auto-reply",
    imageFull: "automation/lead-auto-reply-full",
    alt: "n8n lead-response workflow with form and Gmail triggers, AI models, Gmail replies, and Google Sheets logging",
    url: null,
  },
  {
    name: "AI Customer Support Agent",
    category: "AI Agent · E-commerce",
    description:
      "An automated support workflow that interprets customer enquiries, retrieves relevant WooCommerce order information, uses an AI model to generate a contextual response, and returns the answer through the workflow.",
    architecture: [
      "Customer Message",
      "WooCommerce Data",
      "AI Reasoning",
      "Response",
    ],
    tags: ["n8n", "LLM API", "WooCommerce API"],
    image: "automation/customer-support",
    imageCaption: "Workflow demo shown with mock WooCommerce order data.",
    imageFull: "automation/customer-support-full",
    alt: "n8n customer support demo connecting a customer webhook, mock WooCommerce order data, AI models, and a webhook response",
    url: null,
  },
  {
    name: "AI Job Outreach Automation",
    category: "AI Automation · Outreach",
    image: "outreach",
    alt: "n8n workflow connecting job discovery, storage, and AI email generation",
    description:
      "An n8n workflow that finds new job postings, stores them in Google Sheets, and uses Gemini to draft personalized outreach sent through Gmail.",
    architecture: ["Job Source", "Google Sheets", "Gemini", "Gmail"],
    tags: ["n8n", "Gemini", "Google Sheets", "Gmail"],
    linkLabel: "View workflow",
    url: "https://drive.google.com/file/d/1KChkhPhmar6gtm6Ptxj8foPxQDETVKM6/view?usp=drive_link",
  },
];

export const projects = [
  hydroponicsProject,
  {
    name: "Fighter Jet CNN Classifier",
    category: "Computer vision",
    image: "classifier",
    alt: "Fighter jet image classification project preview",
    description:
      "A convolutional neural network for classifying fighter jet images, with a Streamlit interface for trying the model.",
    tags: ["Python", "TensorFlow", "CNN", "Streamlit"],
    linkLabel: "View repository",
    url: "https://github.com/Mr-Engnr/fighterjet-cnn-classifier",
  },
  {
    name: "Chicago Crime ETL Pipeline",
    category: "Data engineering",
    image: "chicago",
    alt: "Chicago Crime ETL Pipeline project overview",
    description:
      "A pipeline that cleans and transforms 1.4M+ crime records, loads them into SQLite, and makes trends available through Power BI.",
    tags: ["Python", "SQLite", "ETL", "Power BI"],
    linkLabel: "View repository",
    url: "https://github.com/Mr-Engnr/chicago-crime-etl",
  },
  {
    name: "End-to-End AWS Data Solution",
    category: "Cloud infrastructure",
    image: "aws",
    alt: "AWS data solution project preview",
    description:
      "A cloud pipeline connecting multi-source data ingestion, Python transformations, and Power BI reporting with AWS storage and databases.",
    tags: ["AWS", "Python", "Lambda", "Power BI"],
    linkLabel: "View documentation",
    url: "https://drive.google.com/file/d/18jDXEx8sc_0sFcKDsXNtfu2gJ7KEzcjt/view?usp=drive_link",
  },
];

export const additionalProjects = [
  {
    name: "Game Bidding Platform",
    url: "https://github.com/Mr-Engnr/game-bidding-platform",
  },
  {
    name: "Enterprise Network Architecture",
    url: "https://drive.google.com/drive/folders/1ItlTgba5bN4Yqpol6YGLm_LpkWXPISPN?usp=sharing",
  },
];

export const experiences = [
  {
    role: "AI & Data Science Intern",
    company: "Data Pilot",
    date: "Jan 2026 – Present",
    points: [
      "Developing an AI email generation system with a focus on personalization.",
      "Implemented prompt optimization and backend integration for scalable AI deployment.",
    ],
  },
  {
    role: "Campus Ambassador",
    company: "Manafa Technologies",
    date: "Dec 2025 – Present",
    points: [
      "Representing Manafa Technologies on campus through student outreach and community engagement.",
    ],
  },
  {
    role: "Campus Ambassador",
    company: "Exarta Labs",
    date: "Feb 2025 – Jun 2025",
    points: [
      "Promoted AI and 3D e-commerce applications through campus and online campaigns.",
      "Contributed to PODS beta testing with UI and UX feedback ahead of launch.",
    ],
  },
  {
    role: "Cloud Engineer Trainee",
    company: "ACM UET Lahore",
    date: "Jul 2024 – Sep 2024",
    points: [
      "Built an end-to-end AWS data pipeline with EC2, S3, Lambda, and RDS, integrating multiple sources and automating ETL workflows.",
    ],
  },
];
