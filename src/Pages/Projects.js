import React, { useState } from 'react';
import './CSS/Projects.css';

import project1 from '../Assets/verve.png';
import project2 from '../Assets/classifactionLogo.png';
import project3 from '../Assets/D.png';

function About() {


  return (
    <div className="projects-page">
      <div className="project-home">
      <h1 className="page-title">Projects</h1>
      <p className="navigation-note">Click the project cards to navigate</p>


        <div className="projects">

          <div className="project-container">
            {/* PROJECT 1 */}
            <a href="/project-details-1"  className="project-card">

              <img src={project1} alt="Project 1" className="project-img" />
              <div className="project-info">
                <h2 className="project-title">Verve</h2>
                <p className="project-desc">
                  Utilized MERN stack to create an e-commerce platform with dynamic data handling and a user-friendly
                  design. Developed an admin panel for real-time management and analytics-driven decisions.
                </p>
                <p className="project-details">
                  <strong>Technologies:</strong> MongoDB, Express.js, React, Node.js<br />
                  <strong>Challenges:</strong> Managing dynamic user interactions and ensuring responsive design.<br />
                  <strong>Outcome:</strong> A robust platform with increased customer engagement.
                </p>
                <div className="project-links">
                
                </div>
              </div>
            </a>

            {/* PROJECT 2 */}
            <a href="/project-details-2"  className="project-card">
              <img src={project2} alt="Project 2" className="project-img" />
              <div className="project-info">
                <h2 className="project-title">AI Image Classifier</h2>
                <p className="project-desc">
                  Created a seamless experience for image classification using TensorFlow's MobileNetV2, React, and
                  Express.js.
                </p>
                <p className="project-details">
                  <strong>Technologies:</strong> TensorFlow, React, Express.js, Node.js<br />
                  <strong>Challenges:</strong> Integrating real-time predictions and maintaining performance.<br />
                  <strong>Outcome:</strong> A functional and intuitive image classification web app.
                </p>
                <div className="project-links">

                </div>
              </div>
            </a>

            {/* PROJECT 3 */}
            <a href="/project-details-3"  className="project-card">
              <img src={project3} alt="Project 3" className="project-img" />
              <div className="project-info">
                <h2 className="project-title">UniMatch</h2>
                <p className="project-desc">
                  A marketplace platform with real-time chat capabilities, developed using Django and TailwindCSS.
                </p>
                <p className="project-details">
                  <strong>Technologies:</strong> Django, TailwindCSS, SQLite, HTML<br />
                  <strong>Challenges:</strong> Implementing real-time chat with scalable database design.<br />
                  <strong>Outcome:</strong> A dynamic platform for seamless user interaction.
                </p>
                <div className="project-links">

                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
