import React from 'react';
import '../style/Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Personal Portfolio Website',
      tags: ['React', 'CSS', 'JavaScript'],
      description: 'A personal portfolio website showcasing my projects, skills, and experience. Built using React and styled with custom CSS.',
    },
    {
      title: 'E-Commerce Store',
      tags: ['Node.js', 'Express', 'MongoDB'],
      description: 'An online store that supports user authentication, product listings, and a shopping cart. The back-end is powered by Node.js and Express, with MongoDB for data storage.',
    },
    {
      title: 'Weather App',
      tags: ['JavaScript', 'API', 'HTML/CSS'],
      description: 'A weather application that fetches current weather data from an external API and displays it to users. Built using vanilla JavaScript, HTML, and CSS.',
    },
  ];

  return (
    <div className="container">
      <h1>Projects</h1>
      <div className="projects-list">
        {projectList.map((project, index) => (
          <div className="project-item" key={index}>
            <h2>{project.title}</h2>
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="project-tag">{tag}</span>
              ))}
            </div>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
