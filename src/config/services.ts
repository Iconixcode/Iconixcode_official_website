import type { LucideIcon } from 'lucide-react';
import { Code2, Smartphone, PenTool, Boxes, Server, Cloud } from 'lucide-react';

export type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
  pos: string;
  line: string;
};

export const services: Service[] = [
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Fast, accessible web apps built with modern frameworks and clean architecture.',
    tags: ['React', 'Next.js', 'TypeScript'],
    pos: 'lg:left-[4%] lg:top-[-5%]',
    line: 'M 120 80 L 420 260',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Native-quality iOS and Android apps from a single, maintainable codebase.',
    tags: ['React Native', 'Flutter', 'Swift'],
    pos: 'lg:right-[-4%] lg:top-[-5%]',
    line: 'M 680 80 L 480 260',
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    desc: 'Research-driven interfaces that convert — beautiful, usable, and on-brand.',
    tags: ['Figma', 'Design Systems', 'Prototyping'],
    pos: 'lg:left-[-4%] lg:top-[34%]',
    line: 'M 110 300 L 420 300',
  },
  {
    icon: Boxes,
    title: 'Custom Software',
    desc: 'Tailored systems for unique workflows — built to fit, not to compromise.',
    tags: ['Node.js', 'Python', 'PostgreSQL'],
    pos: 'lg:right-[-4%] lg:top-[34%]',
    line: 'M 690 300 L 480 300',
  },
  {
    icon: Server,
    title: 'Backend / API',
    desc: 'Robust APIs and services engineered for scale, security, and reliability.',
    tags: ['REST', 'GraphQL', 'Microservices'],
    pos: 'lg:left-[-4%] lg:bottom-[-8%]',
    line: 'M 125 520 L 420 340',
  },
  {
    icon: Cloud,
    title: 'Cloud & Deployment',
    desc: 'CI/CD, infrastructure as code, and zero-downtime deploys on modern cloud.',
    tags: ['AWS', 'Docker', 'Kubernetes'],
    pos: 'lg:right-[-4%] lg:bottom-[-8%]',
    line: 'M 675 520 L 480 340',
  },
];

export default services;
