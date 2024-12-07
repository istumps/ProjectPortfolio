import React from 'react';
import './CSS/ProjectDetails.css';
import { SocialIcon } from 'react-social-icons';
import project2Image from '../Assets/classifactionLogo.png'; 
import project2SS from '../Assets/class.png'; 

function ProjectDetails2() {
  return (
    <div className="project-details-page">
      <div className="project-header">
        <h1>AI Image Classifier</h1>
        <div className="project-icon">
          <img src={project2Image} alt="AI Image Classifier Logo" />
          <SocialIcon network="github" url="https://github.com/istumps/ImageClassification" />
        </div>
      </div>
      <div className="project-content">
        <div className="project-description">
          <h2>About the Project</h2>
          <p>
            This project integrates TensorFlow's MobileNetV2 model with React and Express.js to create a seamless web
            application for image classification. The application processes images in real-time, providing users with
            an interactive and engaging experience.
          </p>
        </div>
        <div className="project-images">
          <h2>Screenshots</h2>
          <img src={project2SS} alt="AI Image Classifier Screenshot" />
        </div>
        <div className="project-details">
          <h2>Technologies Used</h2>
          <p>TensorFlow, React, Express.js, Node.js</p>
          <h2>Challenges</h2>
          <p>
            Integrating a pre-trained model into a front-end application while ensuring performance and maintaining a
            responsive design for various screen sizes.
          </p>
          <h2>Outcome</h2>
          <p>
            Delivered a functional web application capable of classifying images with high accuracy, providing users
            with real-time feedback and an intuitive interface.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails2;
