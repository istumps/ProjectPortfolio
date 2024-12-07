import React from 'react';
import SkillBar from 'react-skillbars';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './CSS/Skills.css';

function Skills() {
  const technicalSkills = [
    { type: 'JavaScript', level: 90 },
    { type: 'Python', level: 85 },
    { type: 'C++', level: 80 },
    { type: 'React', level: 90 },
    { type: 'Node.js', level: 85 },
    { type: 'MongoDB', level: 75 },
    { type: 'TailwindCSS', level: 80 },
    { type: 'TensorFlow', level: 70 },
    { type: 'PostgreSQL', level: 80 },
  ];

  const nonTechnicalSkills = [
    { name: 'Communication', level: 85 },
    { name: 'Leadership', level: 80 },
    { name: 'Teamwork', level: 85 },
    { name: 'Adaptability', level: 85 },
    { name: 'Problem-Solving', level: 90 },
  ];

  const colors = {
    bar: '#446cdc', // Bar fill color
    title: {
      text: '#ffffff', // Title text color
      background: '#2a2a38', // Title background color
    },
  };

  const renderCircularSkills = (skills) =>
    skills.map((skill, index) => (
      <div key={index} className="skill-item">
        <CircularProgressbar
          value={skill.level}
          text={`${skill.level}%`}
          styles={buildStyles({
            textColor: '#ffffff',
            pathColor: '#446cdc',
            trailColor: '#2a2a38',
          })}
        />
        <p className="skill-name">{skill.name}</p>
      </div>
    ));

  return (
    <div className="skills-page">
      <div className="skills-header">
        <h1>Skills</h1>
      </div>
      <div className="skills-content">
        <div className="skills-category">
          <h2>Technical Skills</h2>
          <SkillBar skills={technicalSkills} colors={colors} />
        </div>
        <div className="skills-category">
          <h2>Non-Technical Skills</h2>
          <div className="skills-grid">{renderCircularSkills(nonTechnicalSkills)}</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
