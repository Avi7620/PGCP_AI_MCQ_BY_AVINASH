'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, BookOpen, Play } from 'lucide-react';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[520px] flex items-center overflow-hidden rounded-3xl">
      {/* Background blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] blob-violet opacity-60 pointer-events-none" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[350px] h-[350px] blob-cyan opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blob-violet opacity-10 pointer-events-none" />
      {/* Grid overlay */}
      <div className="absolute inset-0 mesh-bg opacity-40 rounded-3xl" />
      {/* Floating decorative elements */}
      <div className="absolute top-12 right-16 animate-float hidden xl:block">
        <div className="glass-card p-3 rounded-2xl border border-primary/30 glow-violet">
          <BookOpen size={35} className="text-primary" />
        </div>
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float-delayed hidden xl:block">
        <div className="glass-card p-2.5 rounded-xl border border-accent/30 glow-cyan">
          <Zap size={25} className="text-accent" />
        </div>
      </div>
      {/* <div className="absolute bottom-16 right-24 animate-float hidden xl:block" style={{ animationDelay: '1s' }}>
        <div className="glass-card px-3 py-2 rounded-xl border border-amber-500/30">
          <span className="text-xs font-600 text-amber-400">500+ Questions</span>
        </div>
      </div> */}
      {/* Content */}
      <div className="relative z-10 w-full px-6 py-16 lg:py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`
              inline-flex items-center gap-2 px-3 py-1.5 rounded-full
              glass-card border border-primary/40 mb-6
              ${mounted ? 'animate-slide-up' : 'opacity-0'}
            `}
          >
            <Sparkles size={13} className="text-primary" />
            <span className="text-xs font-600 text-primary">College MCQ Portal — 2025–26</span>
          </div>

          {/* Headline */}
          <h1
            className={`
              text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6
              ${mounted ? 'animate-slide-up stagger-2' : 'opacity-0'}
            `}
          >
            <span className="gradient-text-hero">Master Your Exams</span>
            <br />
            <span className="text-foreground">One MCQ at a Time</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`
              text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mb-8
              ${mounted ? 'animate-slide-up stagger-3' : 'opacity-0'}
            `}
          >
            Practice DAI & Math, Python, Java, Data Analytics, and Machine Learning with structured
            tests.
          </p>

          {/* CTA Buttons */}
          <div
            className={`
              flex flex-wrap gap-4
              ${mounted ? 'animate-slide-up stagger-4' : 'opacity-0'}
            `}
          >
            <Link
              href="/subject-selection"
              className="
                group inline-flex items-center gap-2 px-6 py-3 rounded-xl
                gradient-bg-violet text-white font-600 text-sm
                shadow-lg shadow-primary/30 hover:shadow-primary/50
                transition-all duration-200 hover:scale-105 active:scale-95
                animate-pulse-glow
              "
            >
              <Play size={16} />
              Start Practicing
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            {/* <Link
              href="/subject-selection"
              className="
                inline-flex items-center gap-2 px-6 py-3 rounded-xl
                glass-card border border-border text-foreground font-500 text-sm
                hover:border-primary/50 hover:text-primary
                transition-all duration-200 hover:scale-105 active:scale-95
              "
            >
              <BookOpen size={16} />
              Browse Subjects
            </Link> */}
          </div>

          {/* Quick tags */}
          <div
            className={`
              flex flex-wrap gap-2 mt-8
              ${mounted ? 'animate-slide-up stagger-5' : 'opacity-0'}
            `}
          >
            {['DAI & Math','PML','Python', 'Java OOPs', 'Pandas & NumPy','Final Exams']?.map((tag) => (
              <span
                key={`tag-${tag}`}
                className="text-[11px] font-500 px-2.5 py-1 rounded-full bg-muted/60 border border-border text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}