import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SubjectPreviewCards from './SubjectPreviewCards';

export default function SubjectPreview() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-700 text-foreground">Available Subjects</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Pick a subject and jump into practice tests
          </p>
        </div>
        <Link
          href="/subject-selection"
          className="
            hidden sm:inline-flex items-center gap-1.5 text-sm font-500 text-primary
            hover:text-accent transition-colors duration-200 group
          "
        >
          View all
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
      <SubjectPreviewCards />
    </section>
  );
}