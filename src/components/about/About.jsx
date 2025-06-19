import React from 'react';
import './about.css';
import Image from "../../assets/profile (2).jpg";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="About Me" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am a Data Science student at Institut Teknologi Sumatera with a passion for programming and data analysis. 
              Currently pursuing my degree in Data Science, I have hands-on experience in Python, JavaScript, and web development. 
              I enjoy working on academic projects, web programming, and exploring the intersection of technology and data-driven solutions.
            </p>
            <a 
              href="/documents/CV_Jeremia_Susanto.pdf" 
              className="btn" 
              download="CV_Jeremia_Susanto.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Python Programming</h3>
                <span className="skills__number">85%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__data1"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Web Development</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__data2"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Data Science</h3>
                <span className="skills__number">75%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__data3"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;