import React, { useState, useEffect } from 'react';
import './CSS/HomePage.css';
//import DancingRobot from './DancingRobot'; 
import 'react-social-icons/github'
import 'react-social-icons/youtube'
import 'react-social-icons/linkedin'
import Lottie from 'lottie-react';
import animationData from '../Assets/coder-animation.json';

const HomePage = () => {
  
  const [roles] = useState([
    'Software Engineer.',
    'Web Developer.',
    'Data Scientist.'
  ]);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 70; // Adjust the typing speed (in milliseconds)
  const delayBeforeDeleting = 1000; // Delay before starting deletion (in milliseconds)
 
  const [animationKey, setAnimationKey] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      if (isDeleting) {
        setDisplayedText((prevText) => prevText.slice(0, -1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      } else {
        setDisplayedText((prevText) =>
          prevText === roles[currentRoleIndex]
            ? prevText
            : roles[currentRoleIndex].slice(0, prevText.length + 1)
        );

        if (displayedText === roles[currentRoleIndex]) {
          setTimeout(() => {
            setIsDeleting(true);
          }, delayBeforeDeleting);
        }
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [roles, currentRoleIndex, displayedText, isDeleting, typingSpeed, delayBeforeDeleting]);

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });

  useEffect(() => {
    if (!isVisible) {
      setTimeout(() => {
        setIsVisible(true); 
        setAnimationKey(prevKey => prevKey + 1);
      }, 5000); // Delay 
    }
  }, [isVisible]);


  





  return (
    <div className="home">
    <div className="home-page">
      
      <div className="header-container">
      <div>
  </div>
</div>
      
      <div className="content-container">
      <h1>Hey! My name is</h1>
      <h2>Isaac Stumps</h2>
      <div className="role-line">
        <p className="white-text">I'm a </p>
        <p >
          <span className="accent-text">{displayedText}</span>
          <span className="typing-cursor"></span>
        </p>
      </div>
      <div className="about-me">
      <p1>
        As of now, I am studying 
        <br />
        Computer Science at
        <br />
        California State University, Fullerton.
        <br />
        This is my website where I will showcase my 
        <br />
        projects and contact information.
        <br />
        Thanks for reading!
      </p1>
      </div>
      <div className="animation-container">
        <Lottie  animationData={animationData} />
        {/*<DancingRobot />*/} 
        </div>
        </div>
          
         
      </div>
      </div>
  );
};

export default HomePage;