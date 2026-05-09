import React from 'react';
import Link from 'next/link';
import { Rocket, ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden rounded-3xl">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg-violet opacity-90" />
      <div className="absolute inset-0 mesh-bg opacity-20" />
      <div className="absolute top-0 right-0 w-64 h-64 blob-cyan opacity-30 pointer-events-none" />

      {/* Content */}
      
    </section>
  );
}