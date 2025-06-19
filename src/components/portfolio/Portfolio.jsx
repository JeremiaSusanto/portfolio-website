import React from 'react'
import './portfolio.css';
import Work1 from '../../assets/work-1.svg';
import Work2 from '../../assets/work-2.svg';
import Work3 from '../../assets/work-3.svg';
import Work4 from '../../assets/work-4.svg';
import Work5 from '../../assets/work-5.svg';
import Work6 from '../../assets/work-6.svg';

const Menu = [  {
    id: 1,
    image: Work1,
    title: "PlantCare 🌱 - Plant Management System",
    category: "Full-Stack Web Development",
    description: "Interactive web application for organized and enjoyable houseplant care management. Features comprehensive backend with Pyramid framework and modern React frontend interface with 59% test coverage.",
    note: "Backend not deployed - watch video for clearer information about the website.",
    technologies: ["React", "Pyramid", "Python", "JavaScript", "Full-Stack", "Testing"],
    github: "https://github.com/JeremiaSusanto/uas-pemrograman_web_122450022",
    demo: "https://uas-pemrograman-web-122450022.vercel.app",
    video: "https://drive.google.com/file/d/1V29RLA_QFL21TG8TuqQ3b971aYY8Fw8t/view?usp=sharing"
  },
  {
    id: 2,
    image: Work2,
    title: "Leaf & Co. - E-commerce Catalog",
    category: "Web Development", 
    description: "Modern e-commerce web application built with React 19 featuring product catalog, shopping cart, favorites system, and responsive design with TailwindCSS integration.",
    technologies: ["React 19", "TailwindCSS", "React Router", "Context API", "DummyJSON API"],
    github: "https://github.com/JeremiaSusanto/uts_pemrograman_web_122450022",
    demo: "https://uts-pemweb-122450022.vercel.app"
  },  {
    id: 3,
    image: Work3,
    title: "Statistical Dashboard with Tableau",
    category: "Data Visualization",
    description: "Interactive statistical dashboards and data visualizations created using Tableau Public, demonstrating data analysis skills and effective visual storytelling for business insights.",
    technologies: ["Tableau", "Data Visualization", "Statistical Analysis", "Dashboard Design", "Business Intelligence"],
    github: "https://public.tableau.com/app/profile/jeremia.susanto/vizzes",
    demo: "https://public.tableau.com/app/profile/jeremia.susanto/vizzes"
  },  {
    id: 4,
    image: Work4,
    title: "Deadline Helper - Task Management",
    category: "Web Development",
    description: "Stress-management focused web application designed to help students organize deadlines and tasks efficiently. Part of ITERA web programming coursework with practical utility.",
    technologies: ["JavaScript", "HTML", "CSS", "Task Management", "Student Tools"],
    github: "https://github.com/JeremiaSusanto/pemrograman_web_itera_122450022/tree/main/jeremia_122450022_pertemuan2",
    demo: "https://deadline-helper.vercel.app"
  },  {
    id: 5,
    image: Work5,
    title: "Perpustakaan Pribadi - Personal Library",
    category: "Web Development",
    description: "Personal library management system for organizing and tracking book collections. Features book catalog, reading progress tracking, and personal book recommendations.",
    technologies: ["JavaScript", "HTML", "CSS", "Library Management", "Personal Organization"],
    github: "https://github.com/JeremiaSusanto/pemrograman_web_itera_122450022/tree/main/jeremia_122450022_pertemuan3",
    demo: "https://perpustakaan-pribadi.vercel.app"
  },{
    id: 6,
    image: Work6,
    title: "Hand Gesture Volume Control",
    category: "Computer Vision",
    description: "Real-time hand gesture recognition system for volume control using MediaPipe and OpenCV. Features webcam-based hand tracking and system volume automation with Streamlit interface.",
    technologies: ["Python", "MediaPipe", "OpenCV", "Streamlit", "Computer Vision", "PyAutoGUI"],
    github: "https://github.com/JeremiaSusanto/tubesalpro"
  }
];

const Portfolio = () => {
  return (    <section className="portfolio container section" id="portfolio">
      <h2 className="section__title">Featured Projects</h2><div className="portfolio__container grid">        {Menu.map((element) => {
          const { id, image, title, category, description, note, technologies, github, demo, video } = element;
          return (
            <div className="portfolio__item" key={id}>
              <div className="portfolio__img-wrapper">
                <img src={image} alt="" className="portfolio__img" />
                <div className="portfolio__overlay">
                  <div className="portfolio__info">
                    <h3 className="portfolio__title">{title}</h3>
                    <span className="portfolio__category">{category}</span>
                  </div>
                </div>
              </div>
              <div className="portfolio__content">
                <h3 className="portfolio__content-title">{title}</h3>
                <p className="portfolio__description">{description}</p>
                {note && (
                  <p className="portfolio__note">
                    <strong>Note:</strong> {note}
                  </p>
                )}
                <div className="portfolio__technologies">
                  {technologies.map((tech, index) => (
                    <span key={index} className="portfolio__tech">{tech}</span>
                  ))}
                </div>                <div className="portfolio__buttons">
                  {id === 1 && video && (
                    <a href={video} className="btn btn--sm btn--video" target="_blank" rel="noopener noreferrer">
                      Watch Demo
                    </a>
                  )}
                  {id === 1 ? (
                    <a href={github} className="btn btn--sm" target="_blank" rel="noopener noreferrer">
                      View GitHub
                    </a>
                  ) : (
                    <>
                      {demo && (
                        <a href={demo} className="btn btn--sm" target="_blank" rel="noopener noreferrer">Live Demo</a>
                      )}
                      <a href={github} className="btn btn--sm" target="_blank" rel="noopener noreferrer">
                        {github.includes('tableau') ? 'View Dashboard' : 'View on GitHub'}
                      </a>
                    </>
                  )}
                  <a href={github} className="portfolio__link" target="_blank" rel="noopener noreferrer">
                    <i className="icon-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Portfolio