'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Github, ExternalLink, Info } from 'lucide-react';
import { projects } from '../../constants/projects';

const ProjectsPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

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
        {/* Header */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
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
                  {project.liveLink && (
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors duration-200"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  )}
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
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-2 border border-gray-700 hover:border-purple-500 hover:text-purple-400 rounded-lg transition-colors duration-200"
                        aria-label={`View source code for ${project.title}`}
                      >
                        <Github size={16} />
                      </a>
                    )}
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
