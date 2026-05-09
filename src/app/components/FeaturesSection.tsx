import React from 'react';
import { Timer, CheckCircle, BarChart2, FileText, Repeat, Shield } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const features = [
  {
    key: 'feat-timed',
    icon: Timer,
    title: 'Timed Tests',
    description: 'Practice under real exam conditions with countdown timers on every test.',
    gradient: 'gradient-bg-violet',
  },
  {
    key: 'feat-instant',
    icon: CheckCircle,
    title: 'Instant Scoring',
    description: 'Get your score immediately after submission — no waiting, no guessing.',
    gradient: 'gradient-bg-green',
  },
  {
    key: 'feat-variety',
    icon: BarChart2,
    title: 'Multiple Test Types',
    description: 'Unit tests, mock exams, and final practice — all structured by difficulty.',
    gradient: 'gradient-bg-cyan',
  },

  {
    key: 'feat-repeat',
    icon: Repeat,
    title: 'Retake Anytime',
    description: 'No limits — retake any test as many times as needed before your exam.',
    gradient: 'gradient-bg-pink',
  },
  {
    key: 'feat-access',
    icon: Shield,
    title: 'Open Access',
    description: 'No login required. Open for all enrolled students — just visit and start.',
    gradient: 'gradient-bg-indigo',
  },
];

export default function FeaturesSection() {
  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-700 text-foreground">Why Use CollegeMCQ?</h2>
        <p className="text-sm text-muted-foreground mt-2">
          Built for focused exam preparation — everything you need, nothing you don&apos;t.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features?.map((feature) => {
          const Icon = feature?.icon;
          return (
            <div
              key={feature?.key}
              className="glass-card glass-card-hover rounded-2xl p-5 border border-border flex items-start gap-4"
            >
              <div className={`w-10 h-10 rounded-xl ${feature?.gradient} flex items-center justify-center flex-shrink-0 shadow-md`}>
                <Icon size={18} className="text-white" />
              </div>
              <div>
                <h3 className="text-sm font-700 text-foreground mb-1">{feature?.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{feature?.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}