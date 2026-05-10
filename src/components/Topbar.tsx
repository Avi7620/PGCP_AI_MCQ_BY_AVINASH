import React, { useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { Search, Bell, Menu, X, GraduationCap, BookOpen, Home, FlaskConical, Trophy, Sparkles } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';
import './topbar.css';

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
<Link href="/" className="lg:hidden">
  <div className="flex items-center gap-2 cursor-pointer">
    <AppLogo size={28} />
    <span className="pgcp-brand-text">PGCP-AI</span>
  </div>
</Link>

{/* Desktop brand */}
<Link href="/" className="hidden md:block">
  <div
    className="pgcp-brand-box flex items-center gap-2.5 px-10 py-2 rounded-xl cursor-pointer"
    data-testid="pgcp-brand-box"
  >
    <span className="pgcp-brand-icon">
      <Sparkles size={18} className="text-white" />
    </span>

    <span className="pgcp-brand-text">PGCP-AI</span>
  </div>
</Link>

        <div className="flex-1 hidden md:block" />

        {/* Right actions */}
        <div className="flex items-center gap-2 ml-auto">
          {/* Profile chip / Syllabus Link */}
          <a
            href="https://drive.google.com/drive/folders/16XqIQcK69pmoRbIjSQNhk-Qj3nfuKh4s?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl glass-card border border-border cursor-pointer hover:border-primary/50 transition-all duration-200"
          >
            <div className="w-6 h-6 rounded-full gradient-bg-violet flex items-center justify-center">
              <GraduationCap size={13} className="text-white" />
            </div>
            <span className="text-xs font-medium text-blue-400 hover:text-blue-300 hidden sm:block">
              Syllabus
            </span>
          </a>
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

            {/* Mobile syllabus link */}
            <a
              href="https://drive.google.com/drive/folders/16XqIQcK69pmoRbIjSQNhk-Qj3nfuKh4s?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-blue-400 hover:bg-muted hover:text-blue-300 transition-all duration-200"
            >
              <GraduationCap size={18} />
              <span className="text-sm font-medium">Syllabus</span>
            </a>
          </nav>
        </div>
      )}
    </>
  );
}