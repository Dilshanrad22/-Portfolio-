import { Globe, Smartphone, Palette } from 'lucide-react';
import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 1,
    number: "01",
    title: "Web Development",
    description: "I excel in creating dynamic web applications using HTML, CSS, MySQL, JavaScript, React, Node.js, Next.js, and Python, delivering seamless and responsive user experiences",
    icon: Globe,
    technologies: [
      { name: "HTML",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Node.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Python",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "MySQL",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
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
      { name: "Dart",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
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
