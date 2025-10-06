
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
      {/* Animated Wave Background */}
      <div className="fixed inset-0 z-0">
        {/* Base Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-950 to-black">
          
          {/* Animated Waves */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="wave-container">
              <div className="wave wave-1"></div>
              <div className="wave wave-2"></div>
              <div className="wave wave-3"></div>
              <div className="wave wave-4"></div>
            </div>
          </div>
          
          {/* Floating Bubbles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="bubbles-container">
              <div className="bubble bubble-1"></div>
              <div className="bubble bubble-2"></div>
              <div className="bubble bubble-3"></div>
              <div className="bubble bubble-4"></div>
              <div className="bubble bubble-5"></div>
              <div className="bubble bubble-6"></div>
              <div className="bubble bubble-7"></div>
              <div className="bubble bubble-8"></div>
            </div>
          </div>
          
          {/* Glowing Orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="orbs-container">
              <div className="orb orb-1"></div>
              <div className="orb orb-2"></div>
              <div className="orb orb-3"></div>
              <div className="orb orb-4"></div>
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
        /* Wave Animations */
        .wave-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .wave {
          position: absolute;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, 
            rgba(139, 92, 246, 0.06), 
            rgba(168, 85, 247, 0.03), 
            rgba(139, 92, 246, 0.06)
          );
          border-radius: 50%;
          opacity: 0.4;
          filter: blur(2px);
        }

        .wave-1 {
          top: -50%;
          left: -50%;
          animation: wave-rotate-1 25s linear infinite;
        }

        .wave-2 {
          top: -75%;
          right: -50%;
          animation: wave-rotate-2 30s linear infinite reverse;
        }

        .wave-3 {
          bottom: -50%;
          left: -25%;
          animation: wave-rotate-3 35s linear infinite;
        }

        .wave-4 {
          bottom: -75%;
          right: -25%;
          animation: wave-rotate-4 28s linear infinite reverse;
        }

        /* Floating Bubbles */
        .bubbles-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .bubble {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle at 30% 30%, 
            rgba(139, 92, 246, 0.25), 
            rgba(139, 92, 246, 0.06), 
            transparent
          );
          backdrop-filter: blur(10px);
          border: 1px solid rgba(139, 92, 246, 0.12);
          box-shadow: 
            inset 0 0 20px rgba(139, 92, 246, 0.06),
            0 0 20px rgba(139, 92, 246, 0.12);
        }

        .bubble-1 {
          width: 60px;
          height: 60px;
          top: 80%;
          left: 10%;
          animation: bubble-float-1 12s ease-in-out infinite;
        }

        .bubble-2 {
          width: 40px;
          height: 40px;
          top: 70%;
          left: 85%;
          animation: bubble-float-2 15s ease-in-out infinite;
        }

        .bubble-3 {
          width: 80px;
          height: 80px;
          top: 60%;
          left: 60%;
          animation: bubble-float-3 18s ease-in-out infinite;
        }

        .bubble-4 {
          width: 25px;
          height: 25px;
          top: 40%;
          left: 20%;
          animation: bubble-float-4 10s ease-in-out infinite;
        }

        .bubble-5 {
          width: 50px;
          height: 50px;
          top: 30%;
          left: 75%;
          animation: bubble-float-5 14s ease-in-out infinite;
        }

        .bubble-6 {
          width: 35px;
          height: 35px;
          top: 20%;
          left: 40%;
          animation: bubble-float-6 16s ease-in-out infinite;
        }

        .bubble-7 {
          width: 70px;
          height: 70px;
          top: 85%;
          left: 50%;
          animation: bubble-float-7 13s ease-in-out infinite;
        }

        .bubble-8 {
          width: 45px;
          height: 45px;
          top: 50%;
          left: 90%;
          animation: bubble-float-8 11s ease-in-out infinite;
        }

        /* Glowing Orbs */
        .orbs-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle at center, 
            rgba(139, 92, 246, 0.35), 
            rgba(139, 92, 246, 0.12), 
            transparent
          );
          filter: blur(1px);
          box-shadow: 0 0 40px rgba(139, 92, 246, 0.25);
        }

        .orb-1 {
          width: 120px;
          height: 120px;
          top: 15%;
          left: 15%;
          animation: orb-pulse-1 8s ease-in-out infinite;
        }

        .orb-2 {
          width: 90px;
          height: 90px;
          top: 25%;
          right: 20%;
          animation: orb-pulse-2 10s ease-in-out infinite;
        }

        .orb-3 {
          width: 150px;
          height: 150px;
          bottom: 20%;
          left: 25%;
          animation: orb-pulse-3 12s ease-in-out infinite;
        }

        .orb-4 {
          width: 100px;
          height: 100px;
          bottom: 15%;
          right: 15%;
          animation: orb-pulse-4 9s ease-in-out infinite;
        }

        /* Wave Rotation Animations */
        @keyframes wave-rotate-1 {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }

        @keyframes wave-rotate-2 {
          0% { transform: rotate(0deg) scale(1.1); }
          50% { transform: rotate(180deg) scale(0.9); }
          100% { transform: rotate(360deg) scale(1.1); }
        }

        @keyframes wave-rotate-3 {
          0% { transform: rotate(0deg) scale(0.9); }
          50% { transform: rotate(180deg) scale(1.2); }
          100% { transform: rotate(360deg) scale(0.9); }
        }

        @keyframes wave-rotate-4 {
          0% { transform: rotate(0deg) scale(1.2); }
          50% { transform: rotate(180deg) scale(1); }
          100% { transform: rotate(360deg) scale(1.2); }
        }

        /* Bubble Float Animations */
        @keyframes bubble-float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          25% { transform: translateY(-40px) translateX(20px) scale(1.1); }
          50% { transform: translateY(-80px) translateX(-15px) scale(0.9); }
          75% { transform: translateY(-40px) translateX(25px) scale(1.05); }
        }

        @keyframes bubble-float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          33% { transform: translateY(-60px) translateX(-30px) scale(1.2); }
          66% { transform: translateY(-120px) translateX(10px) scale(0.8); }
        }

        @keyframes bubble-float-3 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          20% { transform: translateY(-30px) translateX(-20px) scale(1.1); }
          40% { transform: translateY(-60px) translateX(30px) scale(0.9); }
          60% { transform: translateY(-90px) translateX(-10px) scale(1.05); }
          80% { transform: translateY(-60px) translateX(25px) scale(0.95); }
        }

        @keyframes bubble-float-4 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-100px) translateX(40px) scale(1.3); }
        }

        @keyframes bubble-float-5 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          25% { transform: translateY(-50px) translateX(-25px) scale(1.15); }
          50% { transform: translateY(-100px) translateX(20px) scale(0.85); }
          75% { transform: translateY(-50px) translateX(35px) scale(1.1); }
        }

        @keyframes bubble-float-6 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          16% { transform: translateY(-25px) translateX(15px) scale(1.05); }
          33% { transform: translateY(-50px) translateX(-20px) scale(0.95); }
          50% { transform: translateY(-75px) translateX(30px) scale(1.1); }
          66% { transform: translateY(-50px) translateX(-15px) scale(0.9); }
          83% { transform: translateY(-25px) translateX(20px) scale(1.05); }
        }

        @keyframes bubble-float-7 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          33% { transform: translateY(-70px) translateX(25px) scale(1.2); }
          66% { transform: translateY(-140px) translateX(-30px) scale(0.8); }
        }

        @keyframes bubble-float-8 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          40% { transform: translateY(-80px) translateX(-35px) scale(1.25); }
          80% { transform: translateY(-160px) translateX(15px) scale(0.75); }
        }

        /* Orb Pulse Animations */
        @keyframes orb-pulse-1 {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }

        @keyframes orb-pulse-2 {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.3); opacity: 0.9; }
        }

        @keyframes orb-pulse-3 {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.1); opacity: 0.7; }
        }

        @keyframes orb-pulse-4 {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.25); opacity: 0.85; }
        }
      `}</style>
    </main>
  )
}