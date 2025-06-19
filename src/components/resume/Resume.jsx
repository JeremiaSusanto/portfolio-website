import React from 'react'
import './resume.css';

const Resume = () => {
  return (    <section className="resume container section" id="resume">
      <h2 className="section__title">Projects</h2>
        <div className="resume__container grid">
        <div className="timeline grid">
          
          <div className="timeline__item">
            <div className="circle__dot"></div>
            <h3 className="timeline__title">Agricultural Infrastructure and Facilities Staff</h3>
            <p className="timeline__text">Department of Food Security, Food Crops, and Horticulture, Lampung Province</p>
            <span className="timeline__date">Jun 2025 - Present</span>
            <p className="timeline__description">
              Conducting internship focused on implementing Data Science knowledge to support agricultural data analysis 
              and data-driven decision making. Working with agricultural datasets and developing analytical solutions 
              for government agricultural programs.
            </p>
          </div>

          <div className="timeline__item">
            <div className="circle__dot"></div>
            <h3 className="timeline__title">Chairman of Legislative</h3>
            <p className="timeline__text">HMSD Adyatama - Data Science Student Association</p>
            <span className="timeline__date">Feb 2025 - Present</span>
            <p className="timeline__description">
              Leading the legislative process and coordinating members to ensure policies support the goals of 
              the Data Science Student Association. Managing organizational governance and policy development 
              for academic and professional advancement of data science students.
            </p>
          </div>

          <div className="timeline__item">
            <div className="circle__dot"></div>
            <h3 className="timeline__title">Data Science Statistics Practicum Assistant</h3>
            <p className="timeline__text">Sumatera Institute of Technology (ITERA)</p>
            <span className="timeline__date">Jan 2025 - Jun 2025</span>
            <p className="timeline__description">
              Guide students in understanding and applying statistical models, and assist in data analysis processes 
              using practical approaches relevant to Data Science. Utilize RStudio for data analysis and visualization, 
              teaching machine learning algorithms and statistical methodologies.
            </p>
          </div>

          <div className="timeline__item">
            <div className="circle__dot"></div>
            <h3 className="timeline__title">Programming Algorithm Practicum Assistant</h3>
            <p className="timeline__text">Sumatera Institute of Technology (ITERA)</p>
            <span className="timeline__date">Jul 2024 - Dec 2024</span>
            <p className="timeline__description">
              Guide students in understanding basic programming concepts using Python. Assist in practicum sessions 
              and help students solve logical problems and debug code. Focus on algorithm fundamentals including 
              branching, looping, and functions.
            </p>
          </div>

        </div>

        <div className="timeline grid">

          <div className="timeline__item">
            <div className="circle__dot"></div>
            <h3 className="timeline__title">Introduction to Computer Software I Practicum Assistant</h3>
            <p className="timeline__text">Sumatera Institute of Technology (ITERA)</p>
            <span className="timeline__date">Sep 2023 - Dec 2023</span>
            <p className="timeline__description">
              Guide students in basic Microsoft Excel usage for data processing. Focus on introducing Excel features 
              and their application in academic tasks. Teach data management fundamentals and spreadsheet operations 
              for analytical purposes.
            </p>
          </div>

          <div className="timeline__item">
            <div className="circle__dot"></div>
            <h3 className="timeline__title">Introduction to Computer Software II Practicum Assistant</h3>
            <p className="timeline__text">Sumatera Institute of Technology (ITERA)</p>
            <span className="timeline__date">Jan 2024 - Jun 2024</span>
            <p className="timeline__description">
              Assist students in understanding programming fundamentals using C++ language. Focus on applying 
              programming logic through structured problem-solving exercises. Guide students through debugging 
              processes and algorithm implementation.
            </p>
          </div>

          <div className="timeline__item">
            <div className="circle__dot"></div>
            <h3 className="timeline__title">Contributor</h3>
            <p className="timeline__text">PT. KREASI KARYA BANGSA - West Jakarta, Indonesia</p>
            <span className="timeline__date">Jul 2021 - Sep 2022</span>
            <p className="timeline__description">
              Host podcasts, guide discussions and interview sources for content creation. Serve as Discord admin, 
              managing community engagement and ensuring effective communication. Manage WhatsApp groups, 
              disseminate information and maintain smooth communication flow.
            </p>
          </div>

          <div className="timeline__item">
            <div className="circle__dot"></div>
            <h3 className="timeline__title">Bachelor in Data Science</h3>
            <p className="timeline__text">Sumatera Institute of Technology (ITERA)</p>
            <span className="timeline__date">2022 - Present</span>
            <p className="timeline__description">
              Currently pursuing Bachelor's degree in Data Science with focus on machine learning, statistical analysis, 
              and programming. Active in practicum assistant roles, student organization leadership, and academic projects. 
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Resume