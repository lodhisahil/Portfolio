import React from 'react'

import Navbar from './components/Navbar.jsx'
import Background from './components/Background.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Education from './pages/Education.jsx'
import Contact from './pages/Contact.jsx'

const App = () => {
  return (
    <div className="relative min-h-screen">

      <Background />

      <div className="relative z-10">
        <Navbar />

        <main>
          <section id="home" >
            <Home />
          </section>

          <section id="about" >
            <About />
          </section>

          <section id="skills" >
            <Skills />
          </section>

          <section id="projects" >
            <Projects />
          </section>

          <section id="education" >
            <Education />
          </section>

          <section id="contact" >
            <Contact />
          </section>
        </main>
      </div>

    </div>
  );
};

export default App
