import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Travelwish",
    description: "A full-stack travel platform with both a mobile app and a web application. The mobile app helps travelers plan trips, create itineraries, track bookings, and manage budgets. The web app enables travel service providers to showcase packages, handle bookings, and interact with customers — all in one seamless ecosystem.",
    image: "/images/projects/travel_wish.png",
    technologies: [
      { name: "Flutter",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",       color: "#02569B" },
      { name: "Next.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",         color: "#ffffff" },
      { name: "Node.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",         color: "#339933" },
      { name: "MongoDB",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",       color: "#47A248" },
      { name: "TypeScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" }
    ],
    liveLink: "",
    githubLink: "",
    category: "Mobile & Web Platform"
  },
  {
    id: 2,
    title: "Baby Drive",
    description: "An interactive educational game for children built with IoT sensors and an ESP32 microcontroller. The game uses real physical controls to teach children basic driving concepts in a safe, engaging way.",
    image: "/images/projects/babydrive.jpg",
    technologies: [
      { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",     color: "#00979D" },
      { name: "C++",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "#00599C" },
      { name: "IoT",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",      color: "#FF9900" }
    ],
    liveLink: "",
    githubLink: "https://lnkd.in/gBKMRVZz",
    category: "Hardware / IoT"
  }
];
