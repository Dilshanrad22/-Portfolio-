'use client'
import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Award, Users, Trophy, Star } from 'lucide-react';

interface Skill {
  name: string;
  icon: string;
  level: number;
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  logo: string;
  description: string;
  gpa?: string;
}

interface Activity {
  id: number;
  title: string;
  organization: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
}

const ResumePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const skills: Skill[] = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 95 },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 90 },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 88 },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 85 },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 82 },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 80 },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 85 },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", level: 78 },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 75 },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", level: 70 },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", level: 88 },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", level: 92 }
  ];

  const education: Education[] = [
    {
      id: 1,
      degree: "Bachelor of Science Honours in Information Technology",
      institution: "University of Moratuwa",
      duration: "2023 - 2027",
      logo: "/images/uom.png",
      description: "Specialized in Software Engineering and Web Development"
    },
    {
      id: 2,
      degree: "Advanced Level in Physical Science",
      institution: "Rahula College Matara",
      duration: "2019 - 2022",
      logo: "/images/rcm.png",
      description: "Mathematics, Physics, Chemistry - A & 2B passes"
    },
    {
      id: 3,
      degree: "Ordinary Level",
      institution: "Kokawala Central Collage ",
      duration: "2007 - 2089",
      logo: "/images/kcc.jpg",
      description: "8A  & 1B passes including Mathematics, Science, and English"
    }
  ];

  const activities: Activity[] = [
    {
      id: 1,
      title: "Player of the Weight Lifting  Team at the UoM",
      organization: "University of Moratuwa Weight Lifting Club",
      description: "I am playing Right Winger position of theWeight Lifting Team at the University of Moratuwa",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 2,
      title: "Member of the Wresling  Team",
      organization: "University Sports Club",
      description: "i am active member",
      icon: Award,
      color: "from-green-400 to-emerald-500"
    },
    {
      id: 3,
      title: "Tech Community Volunteer",
      organization: "Developer Students Club",
      description: "Organizing workshops and mentoring junior students in web development and programming",
      icon: Users,
      color: "from-blue-400 to-cyan-500"
    },
    {
      id: 4,
      title: "Hackathon Participant",
      organization: "Various Tech Events",
      description: "Participated in multiple hackathons and coding competitions, winning several awards",
      icon: Star,
      color: "from-purple-400 to-pink-500"
    },

      {
      id: 4,
      title: "Hackathon Participant",
      organization: "Various Tech Events",
      description: "Participated in multiple hackathons and coding competitions, winning several awards",
      icon: Star,
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 transform transition-all duration-1200 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'
        }`}>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            My <span className="text-transparent bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text">Resume</span>
          </h1>
          <div className={`w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-800 mx-auto rounded-full transform transition-all duration-1000 delay-300 ${
            isVisible ? 'scale-x-100' : 'scale-x-0'
          }`}></div>
        </div>

        {/* Skills Section */}
        <div className={`mb-20 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`} style={{ transitionDelay: '400ms' }}>
          <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
          
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col items-center p-4 rounded-xl bg-gray-800/40 border border-gray-600/30 hover:bg-gray-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Skill Icon */}
                  <div className="w-12 h-12 mb-3 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-10 h-10 bg-purple-500 rounded-lg"></div>`;
                        }
                      }}
                    />
                  </div>
                  
                  {/* Skill Name */}
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 text-center font-medium">
                    {skill.name}
                  </span>

                  {/* Skill Level Progress Bar */}
                  <div className="w-full mt-2 bg-gray-700 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: hoveredSkill === index ? `${skill.level}%` : '0%',
                        transitionDelay: hoveredSkill === index ? '200ms' : '0ms'
                      }}
                    ></div>
                  </div>
                  
                  {/* Skill Percentage */}
                  <span className={`text-xs text-purple-400 mt-1 transition-all duration-300 ${
                    hoveredSkill === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {skill.level}%
                  </span>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-xl blur-xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className={`mb-20 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          <h2 className="text-3xl font-bold text-center mb-12">My Education</h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`group bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center gap-6">
                  {/* University Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gray-800/50 border border-gray-600/30 flex items-center justify-center overflow-hidden group-hover:border-purple-500/50 transition-all duration-300">
                      <img
                        src={edu.logo}
                        alt={edu.institution}
                        className="w-16 h-16 object-contain rounded-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://via.placeholder.com/80/4f46e5/ffffff?text=${edu.institution.charAt(0)}`;
                        }}
                      />
                    </div>
                  </div>

                  {/* Education Details */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-purple-400">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{edu.duration}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin size={16} className="text-gray-400" />
                      <span className="text-gray-300 font-medium">{edu.institution}</span>
                    </div>
                    
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {edu.description}
                    </p>
                    
                    {edu.gpa && (
                      <div className="mt-2">
                        <span className="inline-flex items-center px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-purple-600/5 rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extracurricular Activities */}
        <div className={`transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <h2 className="text-3xl font-bold text-center mb-12">Extracurricular Activities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <div
                  key={activity.id}
                  className="group bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Icon with Gradient Background */}
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${activity.color} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={24} className="text-white" />
                  </div>

                  {/* Activity Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300 mb-2">
                    {activity.title}
                  </h3>

                  {/* Organization */}
                  <p className="text-purple-400 font-medium mb-3">
                    {activity.organization}
                  </p>

                  {/* Description */}
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm leading-relaxed">
                    {activity.description}
                  </p>

                  {/* Hover Glow */}
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