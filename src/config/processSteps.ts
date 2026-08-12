import type { LucideIcon } from 'lucide-react';
import { Lightbulb, PenTool, Code2, Rocket } from 'lucide-react';

export type Step = { num: string; icon: LucideIcon; title: string; desc: string };

export const processSteps: Step[] = [
  {
    num: '01',
    icon: Lightbulb,
    title: 'Share Your Idea',
    desc: 'We listen, ask the right questions, and shape your vision into a clear product brief with defined goals and scope.',
  },
  {
    num: '02',
    icon: PenTool,
    title: 'Plan & Design',
    desc: 'Architecture, wireframes, and polished UI — a blueprint engineered for scale before a single line of production code.',
  },
  {
    num: '03',
    icon: Code2,
    title: 'Develop & Build',
    desc: 'Senior engineers build in agile sprints with continuous integration, testing, and transparent progress updates.',
  },
  {
    num: '04',
    icon: Rocket,
    title: 'Launch & Grow',
    desc: 'We deploy, monitor, and iterate — shipping to production with zero downtime and ongoing support as you scale.',
  },
];

export default processSteps;
