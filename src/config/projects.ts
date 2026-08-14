export type Project = {
  title: string;
  category: string;
  desc: string;
  tags: string[];
  accent: string;
  link?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Ruhunu Fireworks",
    category: "Business Dashboard",
    desc: "A custom dashboard for managing fireworks inventory, sales records, and business operations in one place.",
    tags: ["Next.js"],
    accent: "from-cyan-500/20 to-navy-500/20",
    link: "https://ruhunu-fireworks.com",
    image: "/ruhunufireworks.png",
  },
  {
    title: "BNP Photography",
    category: "Studio Management",
    desc: "A digital platform for managing photography sessions, bookings, client details, and studio workflows.",
    tags: ["Next.js", "Mapbox", "AWS"],
    accent: "from-navy-500/20 to-cyan-500/20",
    link: "https://bnpphotography.vercel.app/",
    image: "/bnpphotography.png",
  },
  {
    title: "Rahal & Lalisha Wedding Website",
    category: "Digital Invitation",
    desc: "An elegant wedding invitation website with event details, location, countdown, RSVP, and guest-friendly interactions.",
    tags: ["Next.js"],
    accent: "from-cyan-500/20 to-navy-500/20",
    link: "https://digital-wed-invitation.vercel.app/wedding",
    image: "/r&lwedding.png",
  },
  {
    title: "Rahal & Lalisha Homecoming Website",
    category: "Digital Invitation",
    desc: "A personalized homecoming invitation website with modern visuals, event information, RSVP, countdown, and location details.",
    tags: ["Next.js"],
    accent: "from-navy-500/20 to-cyan-500/20",
    link: "https://digital-wed-invitation.vercel.app/homecoming",
    image: "/r&lhomecoming.png",
  },
];

export default projects;