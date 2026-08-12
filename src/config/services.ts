import {
  Cloud,
  Code2,
  Megaphone,
  PenTool,
  ServerCog,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  featured?: boolean;
};

const services: Service[] = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Responsive, modern websites that improve user experience and help businesses grow online.",
    featured: true,
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Clean and user-friendly mobile applications built for smooth digital experiences.",
  },
  {
    icon: ServerCog,
    title: "Backend / API Development",
    desc: "Secure backend systems, APIs, databases, and server-side logic for scalable products.",
  },
  {
    icon: PenTool,
    title: "Logo Design",
    desc: "Unique and professional brand logos that help businesses build a strong visual identity.",
  },
  {
    icon: Megaphone,
    title: "Digital Growth Consulting",
    desc: "Social media growth support through content direction, custom post ideas, strategies, and practical advice.",
    featured: true,
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    desc: "Deployment, hosting setup, performance optimization, and reliable launch support for digital products.",
  },
];

export default services;