'use client'
import React, { useState, useEffect } from 'react';
import { Globe, Smartphone, Palette } from 'lucide-react';

interface Technology {
  name: string;
  icon: string;
}

interface Service {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  technologies: Technology[];
}

const ServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    // Delay the entrance animation slightly
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const services: Service[] = [
    {
      id: 1,
      number: "01",
      title: "Web Development",
      description: "I excel in creating dynamic web applications using HTML, CSS, MySQL, JavaScript, React, Node.js, Next.js, and Python, delivering seamless and responsive user experiences",
      icon: Globe,
      technologies: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
      ]
    },
    {
      id: 2,
      number: "02", 
      title: "App Development",
      description: "I specialize in crafting robust and user-friendly mobile applications using Flutter and Node.js. From design to deployment, I ensure seamless performance and a great user experience across all platforms.",
      icon: Smartphone,
      technologies: [
        { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" }
      ]
    },
    {
      id: 3,
      number: "03",
      title: "UI/UX Design", 
      description: "I create dynamic web and mobile app designs using Figma, ensuring visually appealing and user-friendly interfaces across multiple platforms. This highlights your design expertise with Figma.",
      icon: Palette,
      technologies: [
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section with slide-in from top */}
        <div className={`text-center mb-20 transform transition-all duration-1200 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'
        }`}>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 animate-text-shimmer">
            My <span className="text-transparent bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text">Services</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-800 mx-auto rounded-full transform transition-all duration-1000 delay-300 ${
            isVisible ? 'scale-x-100' : 'scale-x-0'
          }`}></div>
        </div>

        {/* Services Grid with staggered slide-in from different directions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const slideDirection = index === 0 ? '-translate-x-20' : index === 1 ? 'translate-y-20' : 'translate-x-20';
            
            return (
              <div
                key={service.id}
                className={`group relative transform transition-all duration-1000 ease-out ${
                  isVisible ? 'translate-x-0 translate-y-0 opacity-100' : `${slideDirection} opacity-0`
                }`}
                style={{ transitionDelay: `${400 + index * 300}ms` }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Container with subtle lift animation */}
                <div className="relative h-full bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8 transition-all duration-500 overflow-hidden min-h-[500px] flex flex-col group-hover:transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-purple-500/20 group-hover:border-purple-500/40">
                  
                  {/* Subtle animated gradient background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-purple-700/3 to-transparent animate-gradient-shift rounded-2xl"></div>
                  </div>
                  
                  {/* Soft glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/10 via-purple-600/15 to-purple-800/10 blur-2xl rounded-2xl animate-pulse-soft"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Service Number & Icon with rotation effect */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-6xl font-bold text-white/30 group-hover:text-white/60 transition-all duration-500 transform group-hover:scale-105">
                        {service.number}
                      </span>
                      <div className="p-4 rounded-full bg-purple-600/10 group-hover:bg-purple-600/20 transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                        <IconComponent size={32} className="text-purple-400 group-hover:text-purple-300 transition-colors duration-500" />
                      </div>
                    </div>

                    {/* Service Title with slide effect */}
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-all duration-500 transform group-hover:translate-x-2">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-gray-300 leading-relaxed mb-8 group-hover:text-gray-200 transition-colors duration-500 flex-grow">
                      {service.description}
                    </p>

                    {/* Technology Stack Section */}
                    <div className="mt-auto">
                      <h4 className="text-sm font-semibold text-purple-400 mb-4 uppercase tracking-wider transform group-hover:translate-x-1 transition-transform duration-500">
                        Tech Stack
                      </h4>
                      
                      {/* Technology Grid - simple hover effect */}
                      <div className="grid grid-cols-4 gap-4 mb-6">
                        {service.technologies.map((tech, techIndex) => (
                          <div
                            key={techIndex}
                            className={`group/tech flex flex-col items-center p-3 rounded-xl bg-gray-800/40 border border-gray-600/30 hover:bg-gray-700/50 hover:border-gray-500/50 transition-all duration-300 ${service.id === 3 ? 'col-span-4 max-w-xs mx-auto' : ''}`}
                          >
                            <div className="w-8 h-8 mb-2 flex items-center justify-center">
                              <img 
                                src={tech.icon} 
                                alt={tech.name}
                                className="w-full h-full object-contain transition-all duration-300"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  const parent = target.parentElement;
                                  if (parent) {
                                    parent.innerHTML = `<div class="w-6 h-6 bg-purple-500 rounded"></div>`;
                                  }
                                }}
                              />
                            </div>
                            <span className="text-xs text-gray-400 group-hover/tech:text-white transition-colors duration-300 text-center leading-tight">
                              {tech.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Smooth slide-in arrow */}
                    <div className="absolute bottom-6 right-6 transform translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-600/30 transform group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-5 h-5 text-white transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Subtle border highlight */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/20 via-purple-600/30 to-purple-400/20 p-[1px] animate-border-flow">
                      <div className="w-full h-full rounded-2xl bg-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action with fade-in from bottom */}
        <div className={`text-center transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`} style={{ transitionDelay: '1200ms' }}>
          
        </div>
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { 
            background-position: 0% 50%; 
          }
          50% { 
            background-position: 100% 50%; 
          }
        }
        
        @keyframes pulse-soft {
          0%, 100% { 
            opacity: 0.1;
            transform: scale(1);
          }
          50% { 
            opacity: 0.2;
            transform: scale(1.02);
          }
        }
        
        @keyframes wave-up {
          0% { 
            transform: translateY(0) rotate(0deg); 
          }
          50% { 
            transform: translateY(-8px) rotate(2deg); 
          }
          100% { 
            transform: translateY(0) rotate(0deg); 
          }
        }
        
        @keyframes border-flow {
          0% { 
            background-position: 0% 50%; 
          }
          50% { 
            background-position: 100% 50%; 
          }
          100% { 
            background-position: 0% 50%; 
          }
        }
        
        @keyframes text-shimmer {
          0%, 100% { 
            background-position: 0% 50%; 
          }
          50% { 
            background-position: 100% 50%; 
          }
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        
        .animate-pulse-soft {
          animation: pulse-soft 4s ease-in-out infinite;
        }
        
        .animate-border-flow {
          background-size: 200% 200%;
          animation: border-flow 3s linear infinite;
        }
        
        .animate-text-shimmer {
          background-size: 200% 200%;
          animation: text-shimmer 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;