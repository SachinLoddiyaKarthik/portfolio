// import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from './components/NavBar/Navbar';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Certifications from './components/Certifications/Certifications';
import './App.css';

const App = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    body.classList.toggle('menu-open', isMenuOpen);
    return () => body.classList.remove('menu-open');
  }, [isMenuOpen]);
  
  return (
    <div className="app">
    <Navbar isMenuOpen = {isMenuOpen} setIsMenuOpen = {setIsMenuOpen}/>
    <div className="content">
      <section id="home">
        <Header />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="certifications">
        <Certifications />
      </section>
    </div>
  </div>
  )
}

export default App;