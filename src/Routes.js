import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/HomePage'; 
import About from './Pages/About';
import Projects from './Pages/Projects';
import ProjectDetails1 from './Pages/ProjectDetails1';
import ProjectDetails2 from './Pages/ProjectDetails2';
import ProjectDetails3 from './Pages/ProjectDetails3';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';

import Footer from './Components/Footer';
const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/project-details-1' element={<ProjectDetails1 />} />
        <Route path='/project-details-2' element={<ProjectDetails2 />} />
        <Route path='/project-details-3' element={<ProjectDetails3 /> } />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />



      </Routes>
      <Footer/>
    </Router>
  );
}

export default AppRoutes;
