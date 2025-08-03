# Saad's 3D Portfolio

<div align="center">
  <br />
  <h3 align="center">A Modern 3D Developer Portfolio</h3>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Three_JS-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000" alt="three.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>
</div>

## 🚀 Live Demo

[View Live Portfolio](https://mr-engnr.github.io/react-3d-portfolio)

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Projects Showcased](#projects-showcased)
5. [Installation](#installation)
6. [Contact](#contact)

## 🤖 Introduction

A modern, responsive 3D portfolio website built with React, Three.js, and Tailwind CSS. This portfolio showcases my skills as a multidisciplinary engineer with expertise in web development, machine learning, data engineering, and cloud architecture.

## ⚙️ Tech Stack

### Frontend Development
- **HTML5** - Semantic markup
- **CSS3** - Styling and animations
- **JavaScript** - Core functionality
- **React JS** - Component-based architecture
- **Redux Toolkit** - State management
- **Tailwind CSS** - Utility-first CSS framework

### Backend & Data
- **Node.js** - Server-side JavaScript
- **MongoDB** - NoSQL database
- **Python** - Data processing and ML
- **Pandas** - Data manipulation
- **Anaconda** - Python environment management

### Machine Learning & Cloud
- **TensorFlow** - Deep learning framework
- **AWS** - Cloud services and infrastructure
- **Docker** - Containerization
- **Git** - Version control

## 🔋 Features

### 🎨 Interactive 3D Elements
- **3D Hero Section** - Animated typing effect with role transitions
- **3D Technology Balls** - Interactive skill visualization
- **3D Earth Model** - Contact section with floating globe
- **3D Stars Background** - Dynamic star field animation

### 📱 Responsive Design
- **Mobile-First Approach** - Optimized for all devices
- **Smooth Animations** - Framer Motion powered transitions
- **Modern UI/UX** - Clean, professional design

### 📧 Contact Integration
- **EmailJS Integration** - Direct email functionality
- **Form Validation** - User-friendly error handling
- **Real-time Feedback** - Loading states and success messages

### 🎯 Project Showcase
- **Interactive Project Cards** - Hover effects and animations
- **GitHub Integration** - Direct links to source code
- **Live Demo Links** - Working project demonstrations

## 🚀 Projects Showcased

### 1. Fighter Jet CNN Classifier
- **Description:** Deep learning classifier that detects fighter jets using Convolutional Neural Networks
- **Tech:** TensorFlow, Python, Streamlit
- **GitHub:** [View Project](https://github.com/Mr-Engnr/fighterjet-cnn-classifier)

### 2. Game Bidding Platform
- **Description:** Full-stack web application that blends online gaming with real-time bidding
- **Tech:** React, SQL Server, REST APIs
- **GitHub:** [View Project](https://github.com/Mr-Engnr/game-bidding-platform)

### 3. Chicago Crime ETL Pipeline
- **Description:** Data engineering project focused on transforming 1.4M+ crime records into actionable insights
- **Tech:** Python, ETL, Power BI
- **GitHub:** [View Project](https://github.com/Mr-Engnr/chicago-crime-etl)

### 4. Enterprise Network Architecture
- **Description:** Secure, multi-VLAN, multi-area OSPF network with advanced constraints
- **Tech:** Cisco, Networking, OSPF
- **Documentation:** [View Project](https://drive.google.com/drive/folders/1ItlTgba5bN4Yqpol6YGLm_LpkWXPISPN?usp=sharing)

### 5. End-to-End Data Solution (AWS)
- **Description:** Complete data pipeline using AWS services for processing, storing, and visualizing data
- **Tech:** AWS Lambda, S3, Redshift, Power BI
- **Documentation:** [View Project](https://drive.google.com/file/d/18jDXEx8sc_0sFcKDsXNtfu2gJ7KEzcjt/view?usp=drive_link)

## 🛠️ Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mr-Engnr/react-3d-portfolio.git
   cd react-3d-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_APP_EMAILJS_SERVICE_ID=your_service_id
   VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📧 Contact

- **Email:** ranasaad727@gmail.com

## 🚀 Deployment

This portfolio is deployed using GitHub Pages. To deploy your own version:

1. **Update package.json**
   ```json
   {
     "homepage": "https://your-username.github.io/your-repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

2. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... other config
   })
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <p>Built with ❤️ by Saad</p>
</div>
