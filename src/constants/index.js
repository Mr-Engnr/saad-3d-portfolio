// Project images as public URLs with base URL support
const cnnFighter = import.meta.env.BASE_URL + 'assets/cnn-fighter.png';
const gameBidding = import.meta.env.BASE_URL + 'assets/game-bidding.jpeg';
const chicago = import.meta.env.BASE_URL + 'assets/chicago.png';
const cisco = import.meta.env.BASE_URL + 'assets/cisco.png';
const awsDataSolution = import.meta.env.BASE_URL + 'assets/aws-data-solution.png';
const n8nProject = import.meta.env.BASE_URL + 'assets/n8n.png';

// Company logos as public URLs with base URL support
const acmUet = import.meta.env.BASE_URL + 'assets/company/acm-uet.png';
const exarta = import.meta.env.BASE_URL + 'assets/company/exarta.png';
const dataPilot = import.meta.env.BASE_URL + 'assets/company/data-pilot.png';
const manafa = import.meta.env.BASE_URL + 'assets/company/manafa.png';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI Agents & Automation",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    title: "Data Analyst",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
  },
  {
    title: "ML Engineer",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  },
  {
    title: "Cloud Engineer",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
];

const technologies = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "React JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Redux Toolkit",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "Pandas",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
  },
  {
    name: "Anaconda",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg",
  },
  {
    name: "TensorFlow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
];

const experiences = [
  {
    title: "AI & Data Science Intern",
    company_name: "Data Pilot",
    icon: dataPilot,
    iconBg: "#E6DEDD",
    date: "Jan 2026 - Present",
    points: [
      "Developing a production-grade AI email generation system, improving personalization quality at scale.",
      "Implemented prompt optimization strategies and backend integration for scalable AI deployment.",
    ],
  },
  {
    title: "Campus Ambassador",
    company_name: "Manafa Technologies",
    icon: manafa,
    iconBg: "#383E56",
    date: "Dec 2025 - Present",
    points: [
      "Representing Manafa Technologies on campus, driving student outreach and community engagement.",
      "Leveraging leadership and networking skills to expand brand presence and connect students with tech opportunities.",
    ],
  },
  {
    title: "Campus Ambassador",
    company_name: "Exarta Labs",
    icon: exarta,
    iconBg: "#E6DEDD",
    date: "Feb 2025 - Jun 2025",
    points: [
      "Promoted Exarta's AI and 3D e-commerce apps (Zeniva AI, Odyssey3D) to 200+ students via online and on-campus campaigns, driving a 15% increase in early sign-ups.",
      "Contributed to PODS beta testing, delivering UI/UX feedback that shaped the product ahead of launch.",
    ],
  },
  {
    title: "Cloud Engineer Trainee",
    company_name: "ACM UET Lahore",
    icon: acmUet,
    iconBg: "#383E56",
    date: "Jul 2024 - Sep 2024",
    points: [
      "Built an end-to-end data pipeline on AWS (EC2, S3, Lambda, RDS), integrating multiple sources and automating ETL workflows.",
      "Gained experience in cloud infrastructure, data engineering, and AWS architecture.",
    ],
  },
];



const projects = [
  {
    name: "Fighter Jet CNN Classifier",
    description:
      "Deep learning classifier that detects fighter jets using Convolutional Neural Networks. Built using TensorFlow and deployed with Streamlit.",
    tags: [
      {
        name: "cnn",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: cnnFighter,
    source_code_link: "https://github.com/Mr-Engnr/fighterjet-cnn-classifier",
  },
  {
    name: "Game Bidding Platform",
    description:
      "A full-stack web application that blends online gaming with real-time bidding. Built with React and SQL Server, the platform supports multiple game listings, user authentication, live bidding rooms, and optimized transaction handling for seamless performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "sqlserver",
        color: "pink-text-gradient",
      },
    ],
    image: gameBidding,
    source_code_link: "https://github.com/Mr-Engnr/game-bidding-platform",
  },
  {
    name: "Chicago Crime ETL Pipeline",
    description:
      "A data engineering project focused on transforming 1.4M+ crime records from Chicago into actionable insights. The pipeline, built in Python, performs data cleaning and feature engineering, loads the data into SQLite, and visualizes crime trends using Power BI dashboards.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "etl",
        color: "green-text-gradient",
      },
      {
        name: "powerbi",
        color: "pink-text-gradient",
      },
    ],
    image: chicago,
    source_code_link: "https://github.com/Mr-Engnr/chicago-crime-etl",
  },
  {
    name: "Enterprise Network Architecture",
    description:
      "Built and configured a secure, multi-VLAN, multi-area OSPF network with 10+ advanced constraints, ensuring least IP wastage, traffic filtering, access control, and dynamic addressing across 5+ departments.",
    tags: [
      {
        name: "cisco",
        color: "blue-text-gradient",
      },
      {
        name: "networking",
        color: "green-text-gradient",
      },
      {
        name: "ospf",
        color: "pink-text-gradient",
      },
    ],
    image: cisco,
    source_code_link: "https://drive.google.com/drive/folders/1ItlTgba5bN4Yqpol6YGLm_LpkWXPISPN?usp=sharing",
  },
  {
    name: "End-to-End Data Solution (AWS)",
    description:
      "Designed and implemented a complete data pipeline using AWS services to process, store, and visualize data from multiple sources (JSON, CSV, SQL). Leveraged AWS S3 for storage, Python scripts on AWS Lambda for ETL and ELT, and integrated the results into a Power BI dashboard connected to Amazon Redshift and RDS.",
    tags: [
      {
        name: "aws",
        color: "blue-text-gradient",
      },
      {
        name: "lambda",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: awsDataSolution,
    source_code_link: "https://drive.google.com/file/d/18jDXEx8sc_0sFcKDsXNtfu2gJ7KEzcjt/view?usp=drive_link",
  },
  {
    name: "AI Job Outreach Automation",
    description:
      "n8n workflow that fetches fresh job postings via API, stores only new entries in Google Sheets, uses Gemini AI to draft a personalized outreach email, and automatically sends it via Gmail — click once, let automation do the rest.",
    tags: [
      {
        name: "n8n",
        color: "blue-text-gradient",
      },
      {
        name: "gemini-ai",
        color: "green-text-gradient",
      },
      {
        name: "automation",
        color: "pink-text-gradient",
      },
    ],
    image: n8nProject,
    source_code_link: "https://drive.google.com/file/d/1KChkhPhmar6gtm6Ptxj8foPxQDETVKM6/view?usp=drive_link",
  },
];

export { services, technologies, experiences, projects };
