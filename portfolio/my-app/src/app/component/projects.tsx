'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Github, Eye } from 'lucide-react';

interface Technology {
  name: string;
  icon: string;
  color: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  liveLink: string;
  githubLink: string;
  category: string;
}

const ProjectsPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Travelwish",
      description: "Travelwish is an innovative applicant tracking system (ATS) set to transform the recruitment landscape.",
      image: "/images/travelwish.png",
      technologies: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
        { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", color: "#06B6D4" }
      ],
      liveLink: "https://mergex-demo.com",
      githubLink: "https://github.com/yourusername/mergex",
      category: "Web Application"
    },
    {
      id: 2,
      title: "Travelwish web app",
      description: "Travelwish web app is a comprehensive web-based platform designed for selling and managing video games.",
      image: "/images/01.jpeg",
      technologies: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#000000" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#336791" },
        { name: "Stripe", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg", color: "#008CDD" }
      ],
      liveLink: "https://vertex-games.com",
      githubLink: "https://github.com/yourusername/vertex",
      category: "E-commerce"
    },
    {
      id: 3,
      title: "Bobalicious",
      description: "My first project for a bobble tea shop.",
      image: "/images/bobalicious.jpg",
      technologies: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#000000" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
        { name: "PayPal", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/paypal/paypal-original.svg", color: "#00457C" }
      ],
      liveLink: "https://pramuka-store.com",
      githubLink: "https://github.com/yourusername/pramuka",
      category: "Web Application"
    },
    {
      id: 4,
      title: "Baby Drive",
      description: "Baby Driver is a game for little children to identify objects, a hardware project using ESP32-E.",
      image: "/images/babydrive.jpg",
      technologies: [
        { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", color: "#00979D" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "#00599C" },
        { name: "IoT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "#FF9900" },
        { name: "ESP32", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", color: "#FF6B35" },
        { name: "Sensors", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg", color: "#A22846" }
      ],
      liveLink: "https://revoclean-demo.com",
      githubLink: "https://lnkd.in/gBKMRVZz",
      category: "Hardware/IoT"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 transform transition-all duration-1200 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'
        }`}>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            My <span className="text-transparent bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text">Projects</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-800 mx-auto rounded-full transform transition-all duration-1000 delay-300 ${
            isVisible ? 'scale-x-100' : 'scale-x-0'
          }`}></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Explore my latest projects showcasing modern web development, mobile applications, and innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transform transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              {/* Project Card */}
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-purple-500/20 group-hover:border-purple-500/40">
                
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      e.currentTarget.src = `https://via.placeholder.com/400x200/1f2937/9ca3af?text=${project.title}`;
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-600/80 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center gap-1 px-2 py-1 bg-gray-800/50 border border-gray-600/30 rounded-lg hover:bg-gray-700/50 hover:border-gray-500/50 transition-all duration-300">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={16}
                          height={16}
                          className="object-contain"
                        />
                        <span className="text-xs text-gray-400">{tech.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-600/50"
                    >
                      <Eye size={16} />
                      <span className="text-sm font-medium">View</span>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-2 border border-gray-600 hover:border-purple-500 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-purple-600/10"
                    >
                      <Github size={16} className="text-gray-400 hover:text-purple-400 transition-colors duration-300" />
                    </a>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/10 via-purple-600/15 to-purple-800/10 blur-2xl rounded-2xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
