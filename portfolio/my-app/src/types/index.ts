import type { ComponentType } from 'react';

export interface Technology {
  name: string;
  icon: string;
  color?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  liveLink: string;
  githubLink: string;
  category: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  logo: string;
  description: string;
  gpa?: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  type: string;
  description: string;
  technologies: string[];
}

export interface Activity {
  id: number;
  title: string;
  organization: string;
  description: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  color: string;
}

export interface Service {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  technologies: Technology[];
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  phone?: string;
  message?: string;
}

export interface Photo {
  id: number;
  src: string;
  title: string;
  description: string;
  category: string;
}
