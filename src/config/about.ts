import type { LucideIcon } from 'lucide-react';
import { Target, Eye, Sparkles } from 'lucide-react';

export type Pillar = { icon: LucideIcon; title: string; text: string };
export const pillars: Pillar[] = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To engineer reliable, scalable software that turns ambitious ideas into products people love to use.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'A world where every business — regardless of size — has access to world-class engineering.',
  },
  {
    icon: Sparkles,
    title: 'Why ICONIXCODE',
    text: 'We exist to bridge the gap between design and engineering, shipping products that feel as good as they look.',
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
