'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { skillCategories } from '../../constants/skills';
import { education, experiences, activities } from '../../constants/experience';

const ResumePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 transform transition-all duration-1200 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'}`}>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            My <span className="text-transparent bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text">Resume</span>
          </h1>
          <div className={`w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-800 mx-auto rounded-full transform transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
        </div>

        {/* Skills Section */}
        <div className={`mb-20 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">My Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="group relative overflow-hidden"
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="relative bg-gradient-to-br from-slate-900/90 to-gray-900/90 backdrop-blur-sm border border-slate-700/50 rounded-lg p-8 hover:border-purple-500/50 hover:bg-gradient-to-br hover:from-slate-800/90 hover:to-gray-800/90 transition-all duration-500 group-hover:transform group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-purple-500/20">

                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full group-hover:w-24 transition-all duration-500"></div>
                  </div>

                  <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="group/skill relative p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/15 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/25"
                        style={{ transitionDelay: `${skillIndex * 100}ms` }}
                      >
                        <div className="relative z-10 flex flex-col items-center">
                          <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-lg bg-gradient-to-br from-white/20 to-white/10 group-hover/skill:from-purple-500/30 group-hover/skill:to-purple-600/30 transition-all duration-400 group-hover/skill:scale-110">
                            <Image
                              src={skill.icon}
                              alt={skill.name}
                              width={32}
                              height={32}
                              className="object-contain filter group-hover/skill:brightness-125 group-hover/skill:drop-shadow-lg transition-all duration-400"
                              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                            />
                          </div>
                          <span className="text-sm font-semibold text-white/90 group-hover/skill:text-white transition-colors duration-300 text-center leading-tight">
                            {skill.name}
                          </span>
                        </div>

                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500 -z-10">
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-xl blur-lg"></div>
                        </div>

                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500">
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-purple-400/30 p-[1px]">
                            <div className="w-full h-full rounded-xl bg-transparent"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-purple-600/5 rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className={`mb-20 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <h2 className="text-3xl font-bold text-center mb-12">My Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={edu.id} className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20" style={{ transitionDelay: `${index * 200}ms` }}>
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gray-800/50 border border-gray-600/30 flex items-center justify-center overflow-hidden group-hover:border-purple-500/50 transition-all duration-300">
                      <Image src={edu.logo} alt={edu.institution} width={64} height={64} className="object-contain rounded-full" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">{edu.degree}</h3>
                      <div className="flex items-center gap-2 text-purple-400">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{edu.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin size={16} className="text-gray-400" />
                      <span className="text-gray-300 font-medium">{edu.institution}</span>
                    </div>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{edu.description}</p>
                    {edu.gpa && (
                      <div className="mt-2">
                        <span className="inline-flex items-center px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-purple-600/5 rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className={`mb-20 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: '700ms' }}>
          <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center shadow-lg shadow-purple-600/30">
                    <Briefcase size={24} className="text-white" />
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-purple-400 mt-1 md:mt-0">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{exp.duration}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} className="text-gray-400" />
                        <span className="text-gray-300 font-medium">{exp.company}</span>
                      </div>
                      <span className="px-2 py-0.5 bg-purple-600/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800/80 border border-gray-600/50 text-gray-300 text-xs rounded-full hover:border-purple-500/50 hover:text-purple-300 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-purple-600/5 rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extracurricular Activities */}
        <div className={`transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
          <h2 className="text-3xl font-bold text-center mb-12">Extracurricular Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <div key={activity.id} className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20" style={{ transitionDelay: `${index * 150}ms` }}>
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${activity.color} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300 mb-2">{activity.title}</h3>
                  <p className="text-purple-400 font-medium mb-3">{activity.organization}</p>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 text-sm leading-relaxed">{activity.description}</p>
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                    <div className={`absolute inset-0 bg-gradient-to-r ${activity.color} opacity-5 rounded-2xl blur-xl`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
