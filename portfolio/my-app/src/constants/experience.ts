import { Users, Award, Trophy, Star } from 'lucide-react';
import type { Education, Experience, Activity } from '../types';

export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Science Honours in Information Technology",
    institution: "University of Moratuwa",
    duration: "2023 - 2027",
    logo: "/images/education/uom.png",
    description: "Specialized in Software Engineering and Web Development"
  },
  {
    id: 2,
    degree: "Advanced Level in Physical Science",
    institution: "Rahula College Matara",
    duration: "2019 - 2022",
    logo: "/images/education/rcm.png",
    description: "Mathematics, Physics, Chemistry - A & 2B passes"
  },
  {
    id: 3,
    degree: "Ordinary Level",
    institution: "Kokawala Central College",
    duration: "2007 - 2019",
    logo: "/images/education/kcc.jpg",
    description: "8A & 1B passes including Mathematics, Science, and English"
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Scienter Technologies (Pvt) Ltd",
    duration: "2025 - Present",
    type: "Internship · Mobile Development",
    description: "Developing cross-platform mobile applications using React Native. Working with Redux Toolkit for state management and collaborating with the engineering team to build scalable, production-ready mobile solutions.",
    technologies: ["React Native", "Redux", "Redux Toolkit", "JavaScript", "TypeScript"]
  }
];

export const activities: Activity[] = [
  {
    id: 1,
    title: "Director of Youth Empowerment",
    organization: "Leo Club University of Moratuwa 2024/2025",
    description: "Leading youth empowerment initiatives and community development programs",
    icon: Users,
    color: "from-purple-600 to-purple-800"
  },
  {
    id: 2,
    title: "Chief Activity Coordinator",
    organization: "Leo Club University of Moratuwa",
    description: "Coordinating and managing club activities and community service projects",
    icon: Award,
    color: "from-purple-500 to-purple-700"
  },
  {
    id: 3,
    title: "Member of Athletic Club",
    organization: "University of Moratuwa",
    description: "Active participant in university athletic programs and sports activities",
    icon: Trophy,
    color: "from-purple-400 to-purple-600"
  },
  {
    id: 4,
    title: "Player of the Weight Lifting Team",
    organization: "University of Moratuwa Weight Lifting Club",
    description: "I am playing Right Winger position of the Weight Lifting Team",
    icon: Trophy,
    color: "from-purple-400 to-purple-600"
  },
  {
    id: 5,
    title: "Member of the Wrestling Team",
    organization: "University Sports Club",
    description: "Active member in training and competitions",
    icon: Star,
    color: "from-purple-500 to-purple-700"
  },
  {
    id: 6,
    title: "Tech Community Volunteer",
    organization: "Developer Students Club",
    description: "Organizing workshops and mentoring junior students",
    icon: Users,
    color: "from-purple-300 to-purple-500"
  },
  {
    id: 7,
    title: "Hackathon Participant",
    organization: "Various Tech Events",
    description: "Participated in multiple hackathons and coding competitions",
    icon: Star,
    color: "from-purple-600 to-purple-800"
  }
];
