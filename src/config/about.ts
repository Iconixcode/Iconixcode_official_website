import type { LucideIcon } from 'lucide-react';
import { Target, Eye, Sparkles } from 'lucide-react';

export type Pillar = { icon: LucideIcon; title: string; text: string };
export const pillars: Pillar[] = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To build reliable, scalable digital products that help businesses move from idea to launch with confidence.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To become a trusted software engineering partner for businesses that want to grow through well-built digital solutions.',
  },
  {
    icon: Sparkles,
    title: 'Why ICONIXCODE',
    text: 'We combine clean design, strong engineering, and practical business thinking to build products that look good, work well, and scale.',
  },
];

export const stats = [
  { n: '5+', l: 'Successfull Projects' },
  { n: '99.9%', l: 'Uptime delivered' },
  { n: '100%', l: 'Customer Feedback' },
];

const aboutConfig = {
  pillars,
  stats,
};

export default aboutConfig;
