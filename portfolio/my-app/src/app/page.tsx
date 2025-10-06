
'use client';

import Header from './component/header';
import ServicesSection from './component/ServicesSection';
import ProjectsPage from './component/projects';
import Resume from './component/resume';
import Myselfy from './component/myselfy';
import Contact from './component/contact';


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
        <section id="my selfy">
          <Myselfy />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        /* Holographic Panels */
        .holo-panels-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .holo-panel {
          position: absolute;
          background: linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.1),
            rgba(168, 85, 247, 0.05),
            transparent
          );
          border: 1px solid rgba(139, 92, 246, 0.2);
          backdrop-filter: blur(5px);
          box-shadow: 
            inset 0 0 20px rgba(139, 92, 246, 0.1),
            0 0 30px rgba(139, 92, 246, 0.15);
        }

        .panel-1 {
          width: 200px;
          height: 120px;
          top: 15%;
          left: 10%;
          animation: panel-float-1 15s ease-in-out infinite;
          transform: rotate(-15deg);
        }

        .panel-2 {
          width: 150px;
          height: 100px;
          top: 25%;
          right: 15%;
          animation: panel-float-2 18s ease-in-out infinite;
          transform: rotate(10deg);
        }

        .panel-3 {
          width: 180px;
          height: 90px;
          bottom: 30%;
          left: 20%;
          animation: panel-float-3 12s ease-in-out infinite;
          transform: rotate(25deg);
        }

        .panel-4 {
          width: 160px;
          height: 110px;
          bottom: 20%;
          right: 25%;
          animation: panel-float-4 20s ease-in-out infinite;
          transform: rotate(-20deg);
        }

        .panel-5 {
          width: 120px;
          height: 80px;
          top: 60%;
          left: 60%;
          animation: panel-float-5 14s ease-in-out infinite;
          transform: rotate(5deg);
        }

        .panel-6 {
          width: 140px;
          height: 95px;
          top: 40%;
          left: 80%;
          animation: panel-float-6 16s ease-in-out infinite;
          transform: rotate(-30deg);
        }

        /* Holographic Particles */
        .holo-particles-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .holo-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(139, 92, 246, 0.8);
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.6);
        }

        .particle-1 {
          top: 25%;
          left: 30%;
          animation: particle-drift-1 20s linear infinite;
        }

        .particle-2 {
          top: 45%;
          left: 70%;
          animation: particle-drift-2 25s linear infinite;
        }

        .particle-3 {
          top: 65%;
          left: 15%;
          animation: particle-drift-3 18s linear infinite;
        }

        .particle-4 {
          top: 35%;
          left: 85%;
          animation: particle-drift-4 22s linear infinite;
        }

        .particle-5 {
          top: 75%;
          left: 55%;
          animation: particle-drift-5 16s linear infinite;
        }

        /* Panel Float Animations */
        @keyframes panel-float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(-15deg); opacity: 0.6; }
          25% { transform: translateY(-30px) translateX(20px) rotate(-10deg); opacity: 0.8; }
          50% { transform: translateY(-60px) translateX(-15px) rotate(-20deg); opacity: 1; }
          75% { transform: translateY(-30px) translateX(25px) rotate(-12deg); opacity: 0.7; }
        }

        @keyframes panel-float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(10deg); opacity: 0.5; }
          33% { transform: translateY(-40px) translateX(-25px) rotate(15deg); opacity: 0.9; }
          66% { transform: translateY(-80px) translateX(10px) rotate(5deg); opacity: 0.6; }
        }

        @keyframes panel-float-3 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(25deg); opacity: 0.7; }
          50% { transform: translateY(-50px) translateX(30px) rotate(30deg); opacity: 1; }
        }

        @keyframes panel-float-4 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(-20deg); opacity: 0.6; }
          25% { transform: translateY(-25px) translateX(-20px) rotate(-15deg); opacity: 0.8; }
          50% { transform: translateY(-50px) translateX(25px) rotate(-25deg); opacity: 1; }
          75% { transform: translateY(-25px) translateX(30px) rotate(-18deg); opacity: 0.9; }
        }

        @keyframes panel-float-5 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(5deg); opacity: 0.5; }
          33% { transform: translateY(-35px) translateX(15px) rotate(8deg); opacity: 0.8; }
          66% { transform: translateY(-70px) translateX(-20px) rotate(2deg); opacity: 0.6; }
        }

        @keyframes panel-float-6 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(-30deg); opacity: 0.4; }
          50% { transform: translateY(-45px) translateX(-25px) rotate(-35deg); opacity: 0.9; }
        }

        /* Particle Drift Animations */
        @keyframes particle-drift-1 {
          0% { transform: translateX(0) translateY(0); opacity: 0; }
          10% { opacity: 1; }
          25% { transform: translateX(100px) translateY(-50px); }
          50% { transform: translateX(200px) translateY(30px); }
          75% { transform: translateX(300px) translateY(-20px); }
          90% { opacity: 1; }
          100% { transform: translateX(400px) translateY(50px); opacity: 0; }
        }

        @keyframes particle-drift-2 {
          0% { transform: translateX(0) translateY(0); opacity: 0; }
          15% { opacity: 1; }
          30% { transform: translateX(-80px) translateY(40px); }
          60% { transform: translateX(-160px) translateY(-30px); }
          85% { opacity: 1; }
          100% { transform: translateX(-240px) translateY(60px); opacity: 0; }
        }

        @keyframes particle-drift-3 {
          0% { transform: translateX(0) translateY(0); opacity: 0; }
          20% { opacity: 1; }
          40% { transform: translateX(120px) translateY(-60px); }
          70% { transform: translateX(240px) translateY(20px); }
          90% { opacity: 1; }
          100% { transform: translateX(360px) translateY(-40px); opacity: 0; }
        }

        @keyframes particle-drift-4 {
          0% { transform: translateX(0) translateY(0); opacity: 0; }
          12% { opacity: 1; }
          35% { transform: translateX(-90px) translateY(-45px); }
          65% { transform: translateX(-180px) translateY(35px); }
          88% { opacity: 1; }
          100% { transform: translateX(-270px) translateY(-25px); opacity: 0; }
        }

        @keyframes particle-drift-5 {
          0% { transform: translateX(0) translateY(0); opacity: 0; }
          18% { opacity: 1; }
          45% { transform: translateX(150px) translateY(70px); }
          80% { opacity: 1; }
          100% { transform: translateX(300px) translateY(-80px); opacity: 0; }
        }
      `}</style>
    </main>
  )
}