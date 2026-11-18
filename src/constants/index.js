// ---------------------------------------------------------------------------
// 01 / AI Systems & Products. Source of truth: docs-private/ (local only).
// Never publish placeholder text. A missing link, stack, or image is left as
// a TODO comment here and the field is omitted, so the card renders without it.
// ---------------------------------------------------------------------------

// Flagship case study. Delivered for a paying client under NDA:
// no client name, no performance numbers, no screenshots of the live system.
export const fxTradingAgent = {
  name: "News-Driven FX Trading Agent",
  slug: "fx-trading-agent",
  category: "Agentic AI · Financial systems",
  summary:
    "An autonomous FX trading system that reads live financial news, has an LLM judge each opportunity, and sends orders through Interactive Brokers only after they clear a dedicated safety layer.",
  engagement: "Delivered for a paying client. Details under NDA.",
  role: "AI Agent Developer & System Architect",
  tags: ["Python", "OpenAI API", "Interactive Brokers API", "LSEG Eikon"],
  stages: [
    {
      name: "News Agent",
      detail: "Reads live financial news from LSEG Eikon.",
    },
    {
      name: "LLM Judge",
      detail: "An LLM evaluates each item as a possible trade.",
    },
    {
      name: "Safety Layer",
      detail:
        "Validation and safety checks gate every proposed order before it can reach the broker.",
      gate: true,
    },
    {
      name: "Execution",
      detail: "Orders that pass are sent through the Interactive Brokers API.",
    },
    {
      name: "Post-Trade Review",
      detail: "Every executed trade is reviewed after the fact.",
    },
  ],
  safetyNote:
    "The LLM proposes. It never places an order directly: every trade has to clear the safety layer first.",
};

// ---------------------------------------------------------------------------
// 01 / Flagship case study: Black Rock Electric (in-page, #black-rock-electric).
// Facts only from docs-private/ (local only); content rules in
// docs-private/client-rules.md. Never name the end client's building or its
// owner; never link the private portal.
// ---------------------------------------------------------------------------
export const blackRockCaseStudy = {
  name: "Black Rock Electric",
  slug: "black-rock-electric",
  category: "Website · Crew portal · Building monitoring",
  status: "In active development",
  summary:
    "A website, a custom crew portal, and building monitoring for an electrical contractor in Colorado, built as connected pieces.",
  role: "Developer for the full project, in a phased engagement.",
  url: "https://blackrockelectric.pro/",
  domain: "blackrockelectric.pro",
  problem:
    "The contractor’s crews ran on off-the-shelf software. This project replaces it with a custom crew portal, alongside a new website and building monitoring for a mountain resort property in Colorado.",
  // The launch section's piece map, in display order. Each piece has a short
  // `line` for the map and a `stack` shown as chips under the stage; screens are owner-approved redacted copies (provenance in
  // docs-private/). Laptop screens: public/images/<src>-{640,800,1280}.webp at
  // 16:10. Phone screen: <src>-{348,696}.webp.
  pieces: [
    {
      key: "portal",
      name: "Crew portal",
      detail:
        "A custom crew portal replacing the client’s previous off-the-shelf software. Installable as a PWA.",
      line: "Scheduling, estimates, time clock",
      stack: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind",
        "Installable PWA",
        "Supabase (Postgres, Auth, row-level security, Realtime, Storage, Edge Functions)",
        "Resend email",
      ],
      hosted: true,
      screens: [
        {
          key: "schedule",
          label: "Schedule",
          frame: "laptop",
          src: "black-rock/2-schedule",
          caption: "Crew portal schedule, week view. Customer details blurred.",
          alt: "Crew portal schedule in week view with job cards on each day; customer names and notes are blurred",
        },
        {
          key: "estimate",
          label: "Estimate",
          frame: "laptop",
          src: "black-rock/3-estimate",
          caption:
            "Crew portal estimate with line items and a total. Customer details blurred.",
          alt: "Crew portal estimate builder showing services, prices, and a total; the customer name and address are blurred",
        },
      ],
    },
    {
      key: "monitoring",
      name: "Building monitoring",
      detail:
        "Live sensor status, alerts, and device tags for a mountain resort property in Colorado.",
      line: "Live sensor status, alerts, device tags",
      stack: ["FastAPI", "Postgres with TimescaleDB", "Redis"],
      hosted: true,
      screens: [
        {
          key: "dashboard",
          frame: "laptop",
          src: "black-rock/4-monitoring",
          caption:
            "Monitoring dashboard: live sensor status and alerts (sample building).",
          alt: "Building monitoring dashboard for a sample site, with a water-detected alert, a heat-tape warning, and sensor tiles grouped by room",
        },
        {
          key: "mobile",
          frame: "phone",
          src: "black-rock/5-mobile-phone",
          caption: "Building monitoring on mobile.",
          alt: "Phone screen showing a building’s sensors, with a flood sensor alert at the top",
        },
      ],
    },
    {
      key: "website",
      name: "Website",
      detail: "The public website, live at blackrockelectric.pro.",
      line: "The public site, blackrockelectric.pro",
      stack: ["Astro", "Tailwind CSS v4", "Netlify", "GitHub Actions"],
      screens: [
        {
          key: "website",
          frame: "laptop",
          src: "black-rock/1-website",
          caption: "The public website, blackrockelectric.pro.",
          alt: "Black Rock Electric website homepage with the headline “Your Reliable Electrician in Summit County” and a contact form",
        },
      ],
    },
    {
      key: "rooms",
      name: "3D rooms",
      detail: "Scoped, early work only.",
      line: "Scoped, early work only",
      status: "Planned",
      screens: [],
    },
  ],
  // Short label beside the hosted pieces in the map; the full sentence is in
  // the full case study.
  hostingLabel: "Hosted on DigitalOcean, behind Caddy",
  hosting:
    "The portal and monitoring run on a DigitalOcean server behind Caddy, in the client’s name.",
  features: [
    {
      group: "Crew portal",
      items: [
        "Scheduling with day, week, and month views",
        "Drag to reschedule",
        "Double-booking warnings",
        "Time clock",
        "Estimates",
        "Invoicing",
      ],
    },
    {
      group: "Building monitoring",
      items: ["Live sensor status", "Alerts", "Device tags"],
    },
  ],
};

// Product cards, in display order. `published: false` keeps a card in the
// data but out of the rendered page. Images follow the client-preview set:
// public/images/<slug>-640|800|1280.webp at 1280×900.
export const aiProducts = [
  {
    name: "HealthPrep AI",
    slug: "healthprep-ai",
    published: true,
    category: "AI · Exam prep",
    description:
      "AI-powered board exam prep with NGN-style practice questions, instant rationales, and structured study programs.",
    contribution: "Built the whole site.",
    highlights: [
      "A 2,000+ question NCLEX RN/PN bank, with new questions generated live by Claude when needed.",
      "A server-side paywall, so only paying users get questions.",
      "Self-serve billing.",
    ],
    stack: [
      { name: "Next.js", detail: "API routes" },
      { name: "Supabase", detail: "Postgres, Auth" },
      { name: "Claude", detail: "via the Anthropic API" },
      {
        name: "Stripe",
        detail: "subscriptions, trial, webhooks, billing portal",
      },
      { name: "Vercel" },
    ],
    url: "https://www.healthprep-ai.com/",
    domain: "healthprep-ai.com",
    // TODO(owner): supply an inside-product screenshot (study dashboard or a
    // question with its rationale), then add `image` (1280×900 WebP set).
    // Content rules for this card: docs-private/client-rules.md.
  },
  {
    name: "EIDOPHOR Voice",
    slug: "eidophor-voice",
    // Hidden until it has highlights, a stack and a live link (see
    // docs-private/projects-inventory.md).
    published: false,
    category: "AI voice agent",
    description:
      "An AI receptionist that answers a business's calls. Also known as MyVoiceAgent.",
    // Renders as a typographic sheet (title + value only until these exist):
    // TODO(owner): 3 `highlights`, `stack` ([{ name, detail? }]), live `url` +
    // `domain`, optional `contribution`. Screenshot → `image` (1280×900 set).
  },
];

// Web builds: client websites, shown as three open cards in section 03.
// Each has two screenshots under public/images/web/<slug>-<shot.key>-{640,800,1280}.webp
// (16:10). `loop` is an optional short muted video played on hover (desktop).
export const clientProjects = [
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
    loop: "video/8k-ai-films-loop.mp4",
    shots: [
      {
        key: "hero",
        label: "Hero",
        alt: "8K AI Films homepage: a film title set over footage of an aircraft above the clouds",
      },
      {
        key: "inner",
        label: "Scene",
        alt: "8K AI Films story scene: a chapter title over footage of a truck leaving a cargo facility at dusk",
      },
    ],
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
    shots: [
      {
        key: "hero",
        label: "Hero",
        alt: "SusuKonnect homepage: headline about digitized savings circles beside a sample circle dashboard",
      },
      {
        key: "inner",
        label: "Features",
        alt: "SusuKonnect platform features section with six feature cards",
      },
    ],
  },
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
    shots: [
      {
        key: "hero",
        label: "Hero",
        alt: "AI InterConnect homepage: headline about executive relationships beside a list of three growth systems",
      },
      {
        key: "inner",
        label: "Packages",
        alt: "AI InterConnect service packages section with three plan cards",
      },
    ],
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

// The FX Trading Agent moved to `flagshipSystem` (section 01).
export const automationProjects = [
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

// Client reviews quoted from the owner's public Fiverr profile. Text is
// verbatim; longer reviews are trimmed to an opening excerpt. Reviews left by
// the owner's own account are intentionally excluded.
export const reviewSummary = {
  count: 43,
  average: "4.9",
  platform: "Fiverr",
};
export const reviews = [
  {
    name: "annatambini",
    country: "United States",
    rating: 5,
    gig: "AI web application",
    quote:
      "Saad exceeded my expectations from start to finish. His expertise in AI and web development is outstanding. He helped me build a web application using Claude AI with ChatGPT API integration.",
  },
  {
    name: "violetquark",
    country: "United States",
    rating: 5,
    gig: "Job search automation",
    quote:
      "I hired Saad to set up an automated job search workflow, and it's the best investment I've made in my search.",
  },
  {
    name: "conakry224",
    country: "United States",
    rating: 5,
    gig: "Fintech startup website",
    quote:
      "Saad was very helpful in walking me through step by step by creating a website for my Fintech startup and deploying it using Claude and Render.",
  },
  {
    name: "sambadaoui",
    country: "Netherlands",
    rating: 5,
    gig: "AI coaching",
    quote:
      "Saad is amazingly knowledgeable in AI. He is also a very good communicator, which helps me to accelerate my objectives even more.",
  },
  {
    name: "georgex9",
    country: "Greece",
    rating: 5,
    gig: "Repeat client",
    quote:
      "Very good developer! Has helped me in lot of projects, I will work with him again!",
  },
  {
    name: "violetquark",
    country: "United States",
    rating: 5,
    gig: "Second brain system",
    quote:
      "He went through everything step by step with me and explained how the system works.",
  },
  {
    name: "ilange405",
    country: "Israel",
    rating: 5,
    gig: "AI integrations",
    quote: "Exceptional delivery, great experience. Thank you.",
  },
  {
    name: "lienerschnitzel",
    country: "United States",
    rating: 5,
    gig: "Claude coaching",
    quote: "Thank you for your patience and deep knowledge of Claude!",
  },
  {
    name: "juliocarrizales",
    country: "United States",
    rating: 5,
    gig: "Coding sessions",
    quote:
      "Working with Saad was great! Awesome to work and extremely knowledgeable!",
  },
  {
    name: "jonmatrix",
    country: "Poland",
    rating: 5,
    gig: "Coding sessions",
    quote: "Great teacher! Will definitely do more sessions together.",
  },
];
