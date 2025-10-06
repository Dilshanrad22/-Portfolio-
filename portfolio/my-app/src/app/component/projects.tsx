'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Github, ExternalLink, Info } from 'lucide-react';

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
      title: "Travelwish Mobile app",
      description: "Travelwish is a trip management app designed to help travelers easily plan, organize, and manage their journeys. It allows users to create itineraries, track bookings, monitor budgets, and get timely reminders, making travel more convenient and stress-free..",
      image: "/images/travel wish.png",
      technologies: [
        { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", color: "#02569B" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" }
      ],
      liveLink: "https://mergex-demo.com",
      githubLink: "https://github.com/yourusername/mergex",
      category: "Mobile Application"
    },
    {
      id: 2,
      title: "Travelwish Web App",
      description: "A web application built to help travel service providers manage and offer their services online. It enables providers to showcase travel packages, handle bookings, interact with customers, and streamline trip management in one platform, improving efficiency and customer experience.",
      image: "/images/travel_wish.png",
      technologies: [
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#000000" },
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" }

      ],
      liveLink: "https://vertex-games.com",
      githubLink: "https://github.com/yourusername/vertex",
      category: "Web Application"
    },
        {
      id: 3,
      title: "Mind Haven ",
      description: "Developed a full-stack web application aimed at connecting users with certified counselors and volunteer doctors for accessible mental health support. The platform includes user registration, service booking, and appointment management, along with a dedicated counselor dashboard to manage availability and sessions.",
      image: "/images/mind_haven.png",
      technologies: [
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#000000" },
        { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg", color: "#512BD4" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", color: "#06B6D4" }

      ],
      liveLink: "https://vertex-games.com",
      githubLink: "https://github.com/yourusername/vertex",
      category: "Health care web Application"
    },
    {
      id: 4,
      title: "Bobalicious",
      description: "An online store developed for a bubble tea shop, enabling customers to explore flavors, customize drinks, and place orders with ease. The app features product browsing, a shopping cart, secure checkout, and order tracking. It also provides shop owners with tools to manage products, prices, and orders efficiently, boosting sales and customer engagement..",
      image: "/images/bobalicious.jpg",
      technologies: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", color: "#777BB4" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" }
      ],
      liveLink: "https://pramuka-store.com",
      githubLink: "https://github.com/yourusername/pramuka",
      category: "Web Application"
    },
    {
      id: 4,
      title: "Baby Drive",
      description: "Educational game for children using IoT sensors and ESP32 microcontroller.",
      image: "/images/babydrive.jpg",
      technologies: [
        { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", color: "#00979D" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "#00599C" },
        { name: "IoT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "#FF9900" }
      ],
      liveLink: "https://revoclean-demo.com",
      githubLink: "https://lnkd.in/gBKMRVZz",
      category: "Hardware/IoT"
    }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = `https://via.placeholder.com/400x200/1f2937/9ca3af?text=${encodeURIComponent('Project Image')}`;
  };

  const handleTechIconError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
  };

  return (
    <div className="min-h-screen text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Simple Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            My <span className="text-transparent bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest work in web development and technology
          </p>
        </div>

        {/* Clean Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Simple Card Design */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 group h-full flex flex-col">
                
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-purple-600 text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Live Link Overlay */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors duration-200"
                      title="View Live Project"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-300 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center gap-1 px-2 py-1 bg-gray-800 rounded-md">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={14}
                          height={14}
                          className="object-contain"
                          onError={handleTechIconError}
                        />
                        <span className="text-xs text-gray-300">{tech.name}</span>
                      </div>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-gray-500 px-2 py-1">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-colors duration-200">
                      <Info size={16} />
                      <span className="text-sm">Learn More</span>
                    </button>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-2 border border-gray-700 hover:border-purple-500 hover:text-purple-400 rounded-lg transition-colors duration-200"
                      title="View Source Code"
                    >
                      <Github size={16} />
                    </a>
                  </div>
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