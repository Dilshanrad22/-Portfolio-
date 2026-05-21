
'use client';

import Header from '../components/sections/Header';
import ServicesSection from '../components/sections/ServicesSection';
import ProjectsPage from '../components/sections/Projects';
import Resume from '../components/sections/Resume';
import Myselfy from '../components/sections/Myselfy';
import Contact from '../components/sections/Contact';


export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Holographic Display Background */}
      <div className="fixed inset-0 z-0">
        {/* Base Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-950 to-black">
          
          {/* Floating Holo Panels */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="holo-panels-container">
              <div className="holo-panel panel-1"></div>
              <div className="holo-panel panel-2"></div>
              <div className="holo-panel panel-3"></div>
              <div className="holo-panel panel-4"></div>
              <div className="holo-panel panel-5"></div>
              <div className="holo-panel panel-6"></div>
            </div>
          </div>
          
          {/* Holographic Particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="holo-particles-container">
              <div className="holo-particle particle-1"></div>
              <div className="holo-particle particle-2"></div>
              <div className="holo-particle particle-3"></div>
              <div className="holo-particle particle-4"></div>
              <div className="holo-particle particle-5"></div>
            </div>
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/15 via-transparent to-indigo-900/15"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-800/10 to-transparent"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <section id="home">
          <Header />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="projects">
          <ProjectsPage />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="myselfy">
          <Myselfy />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>

    </main>
  )
}