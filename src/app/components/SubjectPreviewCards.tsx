'use client';

import React from 'react';
import Link from 'next/link';
import { Code2, Coffee, BarChart3, Brain, ArrowRight ,BrainCircuit} from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const subjects = [
  {
  key: 'preview-daimath',
  id: 'ai-math',
  name: 'AI & Math',
  tagline: 'Linear Algebra, Calculus & AI foundations',
  icon: BrainCircuit,
  gradient: 'gradient-bg-indigo',
  iconBg: 'bg-indigo-500/20',
  iconColor: 'text-indigo-400',
  questions: 40,
  tests: 4,
  difficulty: 'Intermediate–Advanced',
  difficultyColor: 'text-indigo-400',
  accentBorder: 'hover:border-indigo-500/60',
},
  {
    key: 'preview-python',
    id: 'python',
    name: 'Python',
    tagline: 'Core programming & scripting',
    icon: Code2,
    gradient: 'gradient-bg-violet',
    iconBg: 'bg-primary/20',
    iconColor: 'text-primary',
    questions: 40,
    tests: 4,
    difficulty: 'Intermediate',
    difficultyColor: 'text-green-400',
    accentBorder: 'hover:border-primary/60',
  },
  {
    key: 'preview-java',
    id: 'java',
    name: 'Java',
    tagline: 'OOP, collections & frameworks',
    icon: Coffee,
    gradient: 'gradient-bg-amber',
    iconBg: 'bg-amber-400/20',
    iconColor: 'text-amber-400',
    questions: 40,
    tests: 4,
    difficulty: 'Intermediate',
    difficultyColor: 'text-amber-400',
    accentBorder: 'hover:border-amber-500/60',
  },
  {
    key: 'preview-da',
    id: 'data-analytics',
    name: 'Data Analytics',
    tagline: 'Pandas, NumPy & visualization',
    icon: BarChart3,
    gradient: 'gradient-bg-cyan',
    iconBg: 'bg-accent/20',
    iconColor: 'text-accent',
    questions: 40,
    tests: 4,
    difficulty: 'Intermediate',
    difficultyColor: 'text-cyan-400',
    accentBorder: 'hover:border-accent/60',
  },
  {
    key: 'preview-pml',
    id: 'pml',
    name: 'PML',
    tagline: 'Python for Machine Learning',
    icon: Brain,
    gradient: 'gradient-bg-pink',
    iconBg: 'bg-pink-500/20',
    iconColor: 'text-pink-400',
    questions: 40,
    tests: 5,
    difficulty: 'Intermediate',
    difficultyColor: 'text-pink-400',
    accentBorder: 'hover:border-pink-500/60',
  },
];

export default function SubjectPreviewCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {subjects?.map((subject) => {
        const Icon = subject?.icon;
        return (
          <Link
            key={subject?.key}
            href={`/subject-test-page?subject=${subject?.id}`}
            className={`
              glass-card glass-card-hover rounded-2xl p-5 border border-border
              ${subject?.accentBorder}
              flex flex-col gap-4 group cursor-pointer
            `}
          >
            {/* Icon */}
            <div className="flex items-center justify-between">
              <div className={`w-12 h-12 rounded-xl ${subject?.gradient} flex items-center justify-center shadow-lg`}>
                <Icon size={22} className="text-white" />
              </div>
              <ArrowRight
                size={16}
                className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200"
              />
            </div>
            {/* Info */}
            <div>
              <h3 className="text-base font-700 text-foreground">{subject?.name}</h3>
              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{subject?.tagline}</p>
            </div>
            {/* Meta */}
            <div className="flex items-center justify-between pt-1 border-t border-border/50">
              <span className="text-xs text-muted-foreground">
                <span className="font-600 text-foreground">{subject?.questions}</span> questions (each)
              </span>
              <span className={`text-[10px] font-600 ${subject?.difficultyColor}`}>
                {subject?.difficulty}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}