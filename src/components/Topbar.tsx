'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { Search, Bell, Menu, X, GraduationCap, BookOpen, Home, FlaskConical, Trophy } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


interface TopbarProps {
  onMenuToggle: () => void;
  sidebarOpen?: boolean;
}

export default function Topbar({ onMenuToggle, sidebarOpen }: TopbarProps) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-16 glass-card border-b border-border flex items-center px-4 gap-4">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors duration-150"
          aria-label="Toggle menu"
        >
          {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile logo */}
        <div className="lg:hidden flex items-center gap-2">
          <AppLogo size={28} />
          <span className="font-extrabold text-sm text-foreground">CollegeMCQ</span>
        </div>

        {/* Search Bar */}
        <div
          className={`
            hidden md:flex items-center gap-2 flex-1 max-w-md px-3 py-2 rounded-xl
            border transition-all duration-200
            ${searchFocused
              ? 'border-primary bg-muted/80 shadow-lg shadow-primary/10'
              : 'border-border bg-muted/40 hover:border-border/80'
            }
          `}
        >
          <Search size={15} className="text-muted-foreground flex-shrink-0" />
          <input
            type="text"
            placeholder="Search subjects, tests..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="flex-1 bg-transparent text-sm text-foreground placeholder-muted-foreground outline-none"
          />
        </div>

        <div className="flex-1 hidden md:block" />

        {/* Right actions */}
        <div className="flex items-center gap-2 ml-auto">
    

          {/* Profile chip */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl glass-card border border-border cursor-pointer hover:border-primary/50 transition-all duration-200">
            <div className="w-6 h-6 rounded-full gradient-bg-violet flex items-center justify-center">
              <GraduationCap size={13} className="text-white" />
            </div>
           <a
  href="https://drive.google.com/drive/folders/16XqIQcK69pmoRbIjSQNhk-Qj3nfuKh4s?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="text-xs font-medium text-blue-400 hover:text-blue-300 hidden sm:block"
>
  Syllabus
</a>
          </div>
        </div>
      </header>

      {/* Mobile nav drawer */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileNavOpen(false)}
          />
          <nav className="absolute left-0 top-16 bottom-0 w-64 glass-card border-r border-border p-4 space-y-2 overflow-y-auto">
            {[
              { href: '/', label: 'Home', icon: Home },
              { href: '/subject-selection', label: 'Subjects', icon: BookOpen },
              // { href: '/subject-test-page', label: 'Tests', icon: FlaskConical },
              // { href: '#', label: 'Leaderboard', icon: Trophy },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={`mobile-nav-${item.label}`}
                  href={item.href}
                  onClick={() => setMobileNavOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-200"
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}