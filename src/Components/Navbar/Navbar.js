import React, { useState } from 'react';
import './Navbar.css'; // Assuming your styles are saved in Navbar.css

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar ${isOpen ? "responsive" : ""}`} id="myNavbar">
    
    <button onClick={toggleMenu} className="icon md:hidden text-xl p-4 focus:outline-none">
          {isOpen ? '✕' : '☰'}
        </button>
        <div className='navbar-links'>
        <a href="/">.home()</a>
        <a href="/about">.about()</a>
        <a href="/projects">.projects()</a>
        {/*<a href="https://drive.google.com/file/d/1PKqHuXBSVYOfnd6Ij7M_95mLvmA6OdLl/view?usp=sharing" target="_blank" rel="noopener noreferrer">.resume()</a>*/}
        <a href="/skills">.skills()</a>
        <a href="/contact">.contact()</a>
        
        </div>
        
    </div>
  );
};

export default Navbar;