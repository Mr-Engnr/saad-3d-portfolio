import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  acmUet,
  exarta,
  carrent,
  jobit,
  tripguide,
  threejs,
  frontendEngineer,
  dataAnalyst,
  mlEngineer,
  cloudEngineer,
} from "../assets";



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
    title: "Front-End Engineer",
    icon: frontendEngineer,
  },
  {
    title: "Data Analyst",
    icon: dataAnalyst,
  },
  {
    title: "ML Engineer",
    icon: mlEngineer,
  },
  {
    title: "Cloud Engineer",
    icon: cloudEngineer,
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
    title: "Cloud Engineer Trainee",
    company_name: "ACM UET Lahore",
    icon: acmUet,
    iconBg: "#383E56",
    date: "Jul 2024 - Sep 2024",
    points: [
      "Gained hands-on experience with AWS services including EC2, S3, Lambda, and RDS.",
      "Automated an end-to-end ETL workflow using AWS Lambda to move 100+ daily records (JSON, CSV, SQL) from S3 to Redshift.",
      "Reduced manual processing time by 70% through automation.",
      "Enabled business insights by delivering clean data to Power BI dashboards via automated pipelines.",
    ],
  },
  {
    title: "Campus Ambassador",
    company_name: "Exarta Labs",
    icon: exarta,
    iconBg: "#E6DEDD",
    date: "Feb 2025 - Present",
    points: [
      "Promoted Exarta's AI and 3D e-commerce apps (Zeniva AI, Odyssey3D) to over 200+ students through online and on-campus outreach.",
      "Supported beta testing for PODS, providing actionable feedback that improved UI/UX before release.",
      "Helped increase early sign-ups and engagement by 15% via targeted awareness campaigns and product demos.",
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
    image: "/assets/cnn-fighter.png",
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
    image: "/assets/game-bidding.jpeg",
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
    image: "/assets/chicago.png",
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
    image: "/assets/cisco.png",
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
    image: "/assets/aws-data-solution.png",
    source_code_link: "https://drive.google.com/file/d/18jDXEx8sc_0sFcKDsXNtfu2gJ7KEzcjt/view?usp=drive_link",
  },
];

export { services, technologies, experiences, projects };
