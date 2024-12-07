import React from 'react';
import './CSS/ProjectDetails.css';
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/github'
import project1Image from '../Assets/verve.png'; 
import verveSS from '../Assets/verveSS.png';
function ProjectDetails1() {
  return (
    <div className="project-details-page">
      <div className="project-header">
        <h1>Verve</h1>
        <div className="project-icon">
          <img src={project1Image} alt="Verve Screenshot" />
          <SocialIcon network="github" url="https://github.com/istumps/Verve" />

        </div>
      </div>
      <div className="project-content">
        <div className="project-description">
          <h2>About the Project</h2>
          <p>
            Verve is an e-commerce platform built using the MERN stack (MongoDB, Express.js, React, and Node.js). It
            focuses on dynamic data handling and responsive design for a seamless user experience across devices.
          </p>
        </div>
        <div className="project-images">
          <h2>Screenshots</h2>
          <img src={verveSS} alt="Verve Screenshot" />
        </div>
        <div className="project-details">
          <h2>Technologies Used</h2>
          <p>MongoDB, Express.js, React, Node.js</p>
          <h2>Challenges</h2>
          <p>
            Developing a real-time admin panel for managing orders and analytics while maintaining performance and
            scalability.
          </p>
          <h2>Outcome</h2>
          <p>
            Delivered a robust and user-friendly platform with features such as dynamic product management, cart
            functionality, and secure checkout.
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default ProjectDetails1;
