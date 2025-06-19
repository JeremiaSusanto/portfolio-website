# 🌟 Portfolio Website - Jeremia Susanto

<div align="center">

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![Google Sheets](https://img.shields.io/badge/Google%20Sheets-34A853?style=for-the-badge&logo=google-sheets&logoColor=white)](https://sheets.google.com)

**A modern, minimalist portfolio website showcasing Data Science projects and web development skills.**

[🚀 Live Demo](https://your-portfolio-url.vercel.app) | [📁 GitHub Repository](https://github.com/JeremiaSusanto/portfolio-website) | [📧 Contact](mailto:your-email@example.com)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📱 Project Structure](#-project-structure)
- [🔧 Configuration](#-configuration)
- [🎨 Customization](#-customization)
- [📧 Contact Form Setup](#-contact-form-setup)
- [🚀 Deployment](#-deployment)
- [📸 Screenshots](#-screenshots)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

### 🎯 **Core Features**
- **Responsive Design** - Perfect viewing experience across all devices
- **Modern UI/UX** - Clean, minimalist design with smooth animations
- **Interactive Portfolio** - Showcase of 6+ featured projects
- **Working Contact Form** - Integrated with Google Sheets backend
- **SEO Optimized** - Meta tags and Open Graph for better visibility
- **Fast Loading** - Optimized performance and lightweight assets

### 🏗️ **Sections**
- 🏠 **Home** - Hero section with introduction
- 👨‍💻 **About** - Personal background and skills
- 💼 **Services** - Technical expertise and offerings
- 📋 **Resume** - Professional experience and education
- 🎨 **Portfolio** - Featured projects with live demos
- 📧 **Contact** - Working contact form with validation

### 🎨 **Design Highlights**
- **Custom Typography** - Inter & JetBrains Mono fonts
- **Smooth Animations** - CSS transitions and hover effects
- **Mobile-First** - Responsive design principles
- **Dark Theme** - Professional dark color scheme
- **Interactive Elements** - Hover states and visual feedback

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 19.1.0, CSS3, HTML5 |
| **Styling** | Custom CSS, Flexbox, Grid |
| **Icons** | Custom Icon Font |
| **Backend** | Google Apps Script |
| **Database** | Google Sheets |
| **Deployment** | Vercel |
| **Version Control** | Git, GitHub |

</div>

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git**

### Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/JeremiaSusanto/portfolio-website.git
cd portfolio-website

# 2️⃣ Install dependencies
npm install

# 3️⃣ Start development server
npm start

# 4️⃣ Open browser
# Navigate to http://localhost:3000
```

### Available Scripts

```bash
# 🔥 Development
npm start          # Start dev server (http://localhost:3000)

# 🏗️ Production
npm run build      # Build for production
npm run test       # Run test suite
npm run eject      # Eject from Create React App (⚠️ one-way operation)
```

---

## 📱 Project Structure

```
portfolio-website/
├── 📁 public/
│   ├── 🌐 index.html          # Main HTML template
│   ├── 🎨 favicon.ico         # Website favicon
│   ├── 📋 manifest.json       # PWA manifest
│   ├── 🖼️ logo.svg           # Logo file
│   └── 📁 documents/
│       └── 📄 CV_Jeremia_Susanto.pdf
├── 📁 src/
│   ├── 📁 components/         # React components
│   │   ├── 🏠 home/           # Home section
│   │   ├── 👨‍💻 about/          # About section
│   │   ├── 💼 services/       # Services section
│   │   ├── 📋 resume/         # Resume section
│   │   ├── 🎨 portfolio/      # Portfolio section
│   │   ├── 📧 contact/        # Contact section
│   │   └── 🎛️ sidebar/        # Navigation sidebar
│   ├── 📁 assets/            # Images and icons
│   ├── 🎨 App.css            # Global styles
│   ├── ⚛️ App.js             # Main App component
│   ├── 🎨 index.css          # Base styles
│   └── ⚛️ index.js           # App entry point
├── 📋 package.json           # Dependencies & scripts
├── 📝 README.md              # Project documentation
├── 🔧 google-apps-script.js  # Contact form backend
└── 📖 GOOGLE_SHEETS_SETUP.md # Setup instructions
```

---

## 🔧 Configuration

### Environment Setup

The portfolio is configured to work out-of-the-box, but you can customize:

#### 🎨 **Styling Variables**
```css
/* src/index.css */
:root {
  --color-primary: #7d2ae8;
  --color-primary-variant: #6c1ce8;
  --color-white: #fff;
  --color-light: rgba(255, 255, 255, 0.6);
  /* ... more variables */
}
```

#### 📝 **Content Customization**
```javascript
// Update personal information in components:
// - src/components/home/Home.jsx
// - src/components/about/About.jsx
// - src/components/resume/Resume.jsx
// - src/components/portfolio/Portfolio.jsx
```

---

## 🎨 Customization

### 🖼️ **Adding Your Projects**

Edit `src/components/portfolio/Portfolio.jsx`:

```javascript
const Menu = [
  {
    id: 1,
    image: Work1,
    title: "Your Project Name",
    category: "Project Category",
    description: "Project description...",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/username/repo",
    demo: "https://your-demo-url.com",
    video: "https://your-video-url.com" // Optional
  },
  // ... more projects
];
```

### 📋 **Updating Resume**

Edit `src/components/resume/Resume.jsx`:

```javascript
const resumeData = [
  {
    id: 1,
    category: "experience",
    icon: "icon-briefcase",
    year: "2023 - Present",
    title: "Your Job Title",
    desc: "Your job description..."
  },
  // ... more experiences
];
```

### 👨‍💻 **Personal Information**

Update these files with your information:
- `src/components/home/Home.jsx` - Hero section
- `src/components/about/About.jsx` - About content
- `src/components/sidebar/Sidebar.jsx` - Navigation and avatar
- `public/index.html` - Meta tags and title

---

## 📧 Contact Form Setup

### 🔗 **Google Sheets Integration**

The contact form uses Google Sheets as a backend. Follow these steps:

#### 1️⃣ **Create Google Spreadsheet**
```
📊 Create new sheet with headers:
- Name | Email | Subject | Message | Timestamp
```

#### 2️⃣ **Deploy Google Apps Script**
1. Open **Extensions** → **Apps Script**
2. Paste code from `google-apps-script.js`
3. **Deploy** → **New Deployment** → **Web App**
4. Set access to **"Anyone"**
5. Copy the deployment URL

#### 3️⃣ **Update React Component**
```javascript
// src/components/contact/Contact.jsx
const GOOGLE_SCRIPT_URL = 'YOUR_DEPLOYMENT_URL_HERE';
```

📖 **Detailed instructions:** See `GOOGLE_SHEETS_SETUP.md`

---

## 🚀 Deployment

### 🔷 **Vercel (Recommended)**

```bash
# 1️⃣ Install Vercel CLI
npm i -g vercel

# 2️⃣ Login to Vercel
vercel login

# 3️⃣ Deploy
vercel

# 4️⃣ Follow prompts and get your live URL! 🎉
```

### 🐙 **GitHub Pages**

```bash
# 1️⃣ Install gh-pages
npm install --save-dev gh-pages

# 2️⃣ Add to package.json
"homepage": "https://username.github.io/portfolio-website",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

# 3️⃣ Deploy
npm run deploy
```

### 🌐 **Netlify**

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy! 🚀

---

## 📸 Screenshots

<div align="center">

### 🖥️ Desktop View
![Desktop View](screenshots/desktop-home.png)

### 📱 Mobile View
![Mobile View](screenshots/mobile-view.png)

### 🎨 Portfolio Section
![Portfolio](screenshots/portfolio-section.png)

</div>

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **🍴 Fork** the repository
2. **🌿 Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **💾 Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **📤 Push** to the branch (`git push origin feature/AmazingFeature`)
5. **🔄 Open** a Pull Request

### 🐛 **Bug Reports**
Found a bug? Please open an issue with:
- Bug description
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Create React App** - For the excellent boilerplate
- **Vercel** - For seamless deployment
- **Google** - For Apps Script and Sheets integration
- **Community** - For inspiration and support

---

<div align="center">

### 🌟 **Star this repo if you found it helpful!** 

**Made with ❤️ by [Jeremia Susanto](https://github.com/JeremiaSusanto)**

[⬆️ Back to Top](#-portfolio-website---jeremia-susanto)

</div>
