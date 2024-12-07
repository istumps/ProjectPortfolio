import React from 'react';
import './CSS/ProjectDetails.css';
import { SocialIcon } from 'react-social-icons';
import project3Image from '../Assets/D.png'; 
import project3SS from '../Assets/UniSS.png'; 

function ProjectDetails3() {
  return (
    <div className="project-details-page">
      <div className="project-header">
        <h1>UniMatch</h1>
        <div className="project-icon">
          <img src={project3Image} alt="UniMatch Logo" />
          <SocialIcon network="github" url="https://github.com/istumps/UniMatch" />
        </div>
      </div>
      <div className="project-content">
        <div className="project-description">
          <h2>About the Project</h2>
          <p>
            UniMatch is a marketplace platform designed to connect university students. It includes features like
            real-time chat, user profiles, and a streamlined interface to make peer-to-peer interactions efficient and
            enjoyable.
          </p>
        </div>
        <div className="project-images">
          <h2>Screenshots</h2>
          <img src={project3SS} alt="UniMatch Screenshot" />
        </div>
        <div className="project-details">
          <h2>Technologies Used</h2>
          <p>Django, TailwindCSS, SQLite, HTML</p>
          <h2>Challenges</h2>
          <p>
            Implementing real-time chat functionality while maintaining data consistency and creating a visually
            appealing, responsive user interface.
          </p>
          <h2>Outcome</h2>
          <p>
            Successfully delivered a platform that facilitates seamless interactions, creating a strong sense of
            community among university students.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails3;
