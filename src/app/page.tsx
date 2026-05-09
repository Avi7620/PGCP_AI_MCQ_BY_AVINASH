import React from 'react';
import AppLayout from '@/components/AppLayout';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import SubjectPreview from './components/SubjectPreview';
import FeaturesSection from './components/FeaturesSection';
import CTABanner from './components/CTABanner';

export default function HomePage() {
  return (
    <AppLayout>
      <div className="space-y-10 pb-10">
        <HeroSection />
        <StatsBar />
        <SubjectPreview />
        <FeaturesSection />
        <CTABanner />
      </div>
    </AppLayout>
  );
}