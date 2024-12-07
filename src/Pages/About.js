import React from 'react';
import './CSS/About.css';

function About() {
  return (
    <div className="about-body">
      
      <div className="about-title">
        <h1>About Page</h1>
      </div>
      <div className="resume-download">
          <a href="/webresume.pdf" download className="download-button">
            Download Resume
          </a>
        </div>
      <div className="about">
        <h2>Background</h2>
        <p>
          I am a full stack developer with a passion for creating and learning new things. 
          I have a background in computer science and have experience working with a variety of technologies. 
          I am always looking for new opportunities to grow and expand my skill set.
        </p>
        <h2>Education</h2>
        <p>
          I am currently pursuing Bachelor's degree in Computer Science from California State University, Fullerton. 
          I have taken a variety of courses in computer science, including data structures, algorithms, and software engineering.
        </p>
        <h2>Skills</h2>
        <p>
          I have experience working with a variety of technologies, including HTML, CSS, JavaScript, React, Node.js, and MongoDB.
           I am always looking to learn new technologies and expand my skill set.
        </p>
        <h2>Interests</h2>
        <p>
          In my free time, I enjoy working on personal projects, cooking, and spending time with friends and family. I am always looking for new opportunities to
          learn and grow as a developer.
        </p>
        
      </div>
    </div>
  );
}

export default About;
