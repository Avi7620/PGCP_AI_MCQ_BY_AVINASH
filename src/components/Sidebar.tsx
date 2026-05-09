'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import { Home, BookOpen, FlaskConical, Trophy, Bell, Settings, ChevronLeft, ChevronRight, GraduationCap,  } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const navItems = [
  { key: 'nav-home', href: '/', label: 'Home', icon: Home },
  { key: 'nav-subjects', href: '/subject-selection', label: 'Subjects', icon: BookOpen, badge: 4 },
  { key: 'nav-tests', href: '/subject-test-page', label: 'Tests', icon: FlaskConical },
];

const bottomItems = [
  { key: 'nav-settings', href: '#', label: 'Settings', icon: Settings },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <aside
      className={`
        fixed left-0 top-0 h-full z-40 flex flex-col
        glass-card border-r border-border
        transition-all duration-300 ease-in-out
        ${collapsed ? 'w-16' : 'w-60'}
      `}
    >
      {/* Logo */}
      <div className="flex items-center justify-between px-3 py-4 border-b border-border min-h-[64px]">
        {!collapsed && (
          <div className="flex items-center gap-2 overflow-hidden">
            <AppLogo size={32} />
            <span className="font-extrabold text-base text-foreground whitespace-nowrap tracking-tight">
              CollegeMCQ
            </span>
          </div>
        )}
        {collapsed && (
          <div className="mx-auto">
            <AppLogo size={32} />
          </div>
        )}
        {!collapsed && (
          <button
            onClick={onToggle}
            className="p-1 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors duration-150"
            aria-label="Collapse sidebar"
          >
            <ChevronLeft size={16} />
          </button>
        )}
      </div>

      {/* Expand button when collapsed */}
      {collapsed && (
        <button
          onClick={onToggle}
          className="mx-auto mt-2 p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors duration-150"
          aria-label="Expand sidebar"
        >
          <ChevronRight size={14} />
        </button>
      )}

      {/* Nav Items */}
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto scrollbar-thin">
        {!collapsed && (
          <p className="text-[10px] font-600 uppercase tracking-widest text-muted-foreground px-3 mb-3">
            Menu
          </p>
        )}
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.key}
              href={item.href}
              className={`
                group flex items-center gap-3 px-3 py-2.5 rounded-xl
                transition-all duration-200 relative
                ${active
                  ? 'sidebar-active text-primary' :'text-muted-foreground hover:bg-muted hover:text-foreground'
                }
                ${collapsed ? 'justify-center' : ''}
              `}
              title={collapsed ? item.label : undefined}
            >
              <Icon
                size={18}
                className={`flex-shrink-0 transition-colors duration-200 ${active ? 'text-primary' : ''}`}
              />
              {!collapsed && (
                <>
                  <span className="text-sm font-medium flex-1">{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] font-700 bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
              {collapsed && item.badge && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Student Profile */}
      <div className="px-2 pb-2 border-t border-border pt-3">
        {bottomItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.key}
              href={item.href}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-xl
                text-muted-foreground hover:bg-muted hover:text-foreground
                transition-all duration-200
                ${collapsed ? 'justify-center' : ''}
              `}
              title={collapsed ? item.label : undefined}
            >
              <Icon size={18} className="flex-shrink-0" />
              {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
            </Link>
          );
        })}

        {/* Profile */}
        <div
          className={`
            mt-2 p-2 rounded-xl glass-card flex items-center gap-3
            ${collapsed ? 'justify-center' : ''}
          `}
        >
          <div className="w-8 h-8 rounded-full gradient-bg-violet flex items-center justify-center flex-shrink-0">
            <GraduationCap size={16} className="text-white" />
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-xs font-600 text-foreground truncate">Student</p>
              <p className="text-[10px] text-muted-foreground truncate">Open Access</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}