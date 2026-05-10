'use client';

import React, { useEffect, useState, useRef } from 'react';
import { BookOpen, FlaskConical, Users, Award } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const stats = [
  {
    key: 'stat-subjects',
    icon: BookOpen,
    value: 5,
    label: 'Subjects',
    suffix: '',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    key: 'stat-tests',
    icon: FlaskConical,
    value: 40,
    label: 'Total Tests',
    suffix: '+',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    key: 'stat-questions',
    icon: Award,
    value: 650,
    label: 'MCQ Questions',
    suffix: '+',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
  },

];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.key}
            className="glass-card glass-card-hover rounded-2xl p-5 flex items-center gap-4"
          >
            <div className={`w-11 h-11 rounded-xl ${stat.bg} flex items-center justify-center flex-shrink-0`}>
              <Icon size={20} className={stat.color} />
            </div>
            <div>
              <p className={`text-2xl font-800 ${stat.color}`}>
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs text-muted-foreground font-500 mt-0.5">{stat.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}