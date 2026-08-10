export type Project = {
  title: string;
  category: string;
  desc: string;
  tags: string[];
  accent: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: 'Ruhunu Fireworks',
    category: 'Fintech',
    desc: 'A dashboard for managing fireworks inventory and sales.',
    tags: ['React', 'WebSocket', 'PostgreSQL'],
    accent: 'from-cyan-500/20 to-navy-500/20',
    link: 'https://ruhunu-fireworks.com',
  },
  {
    title: 'BNP Photography',
    category: 'SaaS',
    desc: 'A dashboard for managing photography sessions and client interactions.',
    tags: ['Next.js', 'Mapbox', 'AWS'],
    accent: 'from-navy-500/20 to-cyan-500/20',
    link: 'https://bnpphotography.vercel.app/',
  },
  {
    title: 'Rahal & Lalisha Wedding',
    category: 'E-commerce',
    desc: 'An elegant digital wedding invitation designed to beautifully share the couple’s special day, event details, and RSVP experience with guests.',
    tags: ['Next.js', 'Stripe', 'Edge'],
    accent: 'from-cyan-500/20 to-navy-500/20',
    link: 'https://digital-wed-invitation.vercel.app/wedding',
  },
  {
    title: 'Rahal & Lalisha Homecoming',
    category: 'Mobile',
    desc: 'A personalized digital homecoming invitation combining a modern design with event details, countdown, location, RSVP, and other interactive features.',
    tags: ['Next.js', 'Stripe', 'Edge'],
    accent: 'from-navy-500/20 to-cyan-500/20',
    link: 'https://digital-wed-invitation.vercel.app/homecoming',
  },
];

export default projects;
