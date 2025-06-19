import React from 'react';
import './services.css';
import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.svg';
import Image3 from '../../assets/service-3.svg';

const data = [
  {
    id: 1,
    image: Image1,
    title: "Web Development",
    description: "Creating responsive and interactive websites using HTML, CSS, JavaScript, and modern web frameworks for academic and personal projects.",
  },
  {
    id: 2,
    image: Image2,
    title: "Python Programming",
    description: "Developing applications and data analysis solutions using Python, including academic projects, algorithms, and data science implementations.",
  },
  {
    id: 3,
    image: Image3,
    title: "Data Analysis",
    description: "Analyzing data using Python libraries and Jupyter Notebooks for academic research and practical applications in data science coursework.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt={title} className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;