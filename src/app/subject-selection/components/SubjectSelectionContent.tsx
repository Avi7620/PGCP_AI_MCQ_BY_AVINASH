'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  Code2,
  Coffee,
  BarChart3,
  Brain,
  ArrowRight,
  BookOpen,
  Clock,
  Star,
  ChevronRight,
  X,
  Filter,
  BrainCircuit
} from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const subjects = [
  
{
  key: 'subj-ai-math',
  id: 'ai-math',
  name: 'FAI & Math',
  fullName: 'Fundamentals of AI & Mathematics for AI',
  tagline: 'Linear Algebra, Calculus & AI concepts',
  description:
    'Strong foundation in Artificial Intelligence and Mathematics including search algorithms, logic, probability, linear algebra, and optimization techniques used in machine learning and deep learning.',
  icon: BrainCircuit,
  gradient: 'gradient-bg-indigo',
  cardBorder: 'border-indigo-500/20 hover:border-indigo-500/60',
  glowClass: 'glow-indigo',
  badgeColor: 'bg-indigo-400/20 text-indigo-400 border-indigo-400/30',
  topics: [
    'AI History & Ethics',
    'Search Algorithms (BFS, DFS, A*)',
    'Logic & Knowledge Representation',
    'Probability & Bayes Theorem',
    'Vectors & Matrix Operations',
    'Eigenvalues & Eigenvectors',
    'Gradient & Derivatives',
    'Optimization Techniques (Gradient Descent)',
  ],
  questions: 40,
  tests: 4,
  duration: '60 min',
  difficulty: 'Intermediate–Advanced',
  difficultyColor: 'text-indigo-400 bg-indigo-400/10',
},
  {
    key: 'subj-python',
    id: 'python',
    name: 'Python',
    fullName: 'Python Programming',
    tagline: 'Core programming, scripting & automation',
    description:
      'Master Python fundamentals — variables, loops, functions, OOP, file handling, and modules. Covers Python 3.x syntax tested in university exams.',
    icon: Code2,
    gradient: 'gradient-bg-violet',
    cardBorder: 'border-primary/20 hover:border-primary/60',
    glowClass: 'glow-violet',
    badgeColor: 'bg-primary/20 text-primary border-primary/30',
    topics: [
      'Variables & Data Types',
      'Control Flow',
      'Functions',
      'OOP',
      'File I/O',
      'Modules',
      'Exception Handling',
      'List Comprehensions',
    ],
    questions: 40,
    tests: 4,
    duration: '60 min',
    difficulty: 'Beginner–Advanced',
    difficultyColor: 'text-green-400 bg-green-400/10',
  
  },
  {
    key: 'subj-java',
    id: 'java',
    name: 'Java',
    fullName: 'Java Programming',
    tagline: 'OOP, collections, threads & frameworks',
    description:
      'Deep dive into Java — classes, interfaces, inheritance, collections framework, multithreading, JDBC, and exception handling. Aligned with university syllabus.',
    icon: Coffee,
    gradient: 'gradient-bg-amber',
    cardBorder: 'border-amber-500/20 hover:border-amber-500/60',
    glowClass: 'glow-amber',
    badgeColor: 'bg-amber-400/20 text-amber-400 border-amber-400/30',
    topics: [
      'Classes & Objects',
      'Inheritance',
      'Interfaces',
      'Collections',
      'Generics',
      'Multithreading',
      'JDBC',
      'Exception Handling',
    ],
    questions: 40,
    tests: 4,
    duration: '35 min avg',
    difficulty: 'Intermediate',
    difficultyColor: 'text-amber-400 bg-amber-400/10',
 
  },
  {
    key: 'subj-da',
    id: 'data-analytics',
    name: 'Data Analytics',
    fullName: 'Data Analytics',
    tagline: 'Pandas, NumPy, visualization & statistics',
    description:
      'Learn data wrangling with Pandas, numerical computing with NumPy, and visualization using Matplotlib and Seaborn. Covers real-world analytics workflows.',
    icon: BarChart3,
    gradient: 'gradient-bg-cyan',
    cardBorder: 'border-accent/20 hover:border-accent/60',
    glowClass: 'glow-cyan',
    badgeColor: 'bg-accent/20 text-accent border-accent/30',
    topics: [
      'NumPy Arrays',
      'Pandas DataFrames',
      'Data Cleaning',
      'Matplotlib',
      'Seaborn',
      'Statistical Analysis',
      'Data Aggregation',
      'EDA',
    ],
    questions: 40,
    tests: 4,
    duration: '60 min',
    difficulty: 'Intermediate',
    difficultyColor: 'text-cyan-400 bg-cyan-400/10',
 
   
  },
  {
    key: 'subj-pml',
    id: 'pml',
    name: 'PML',
    fullName: 'Practical Machine Learning',
    tagline: 'Scikit-learn, regression, classification & more',
    description:
      'Understand ML concepts and their Python implementations — linear regression, decision trees, clustering, neural networks, and model evaluation using Scikit-learn.',
    icon: Brain,
    gradient: 'gradient-bg-pink',
    cardBorder: 'border-pink-500/20 hover:border-pink-500/60',
    glowClass: '',
    badgeColor: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
    topics: [
      'Linear Regression',
      'Logistic Regression',
      'Decision Trees',
      'KNN',
      'Clustering',
      'SVM',
      'Neural Networks',
      'Model Evaluation',
    ],
    questions: 40,
    tests: 4,
    duration: '60 min',
    difficulty: 'Advanced',
    difficultyColor: 'text-pink-400 bg-pink-400/10',
 
  },
];

const filterOptions = [
  { key: 'filter-all', label: 'All Subjects', value: 'all' },
  { key: 'filter-beginner', label: 'Beginner', value: 'beginner' },
  { key: 'filter-intermediate', label: 'Intermediate', value: 'intermediate' },
  { key: 'filter-advanced', label: 'Advanced', value: 'advanced' },
];

export default function SubjectSelectionContent() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return subjects?.filter((s) => {
      const matchesSearch =
        s?.name?.toLowerCase()?.includes(search?.toLowerCase()) ||
        s?.tagline?.toLowerCase()?.includes(search?.toLowerCase()) ||
        s?.description?.toLowerCase()?.includes(search?.toLowerCase());

      const matchesFilter =
        activeFilter === 'all' ||
        s?.difficulty?.toLowerCase()?.includes(activeFilter);

      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <BookOpen size={20} className="text-primary" />
            <span className="text-xs font-600 text-primary uppercase tracking-wider">Subject Library</span>
          </div>
          <h1 className="text-3xl font-800 text-foreground">Choose Your Subject</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {subjects?.length} subjects available · {subjects?.reduce((a, s) => a + s?.questions, 0)}+ questions total
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search subjects..."
            value={search}
            onChange={(e) => setSearch(e?.target?.value)}
            className="
              w-full pl-9 pr-8 py-2.5 rounded-xl text-sm
              glass-card border border-border text-foreground
              placeholder-muted-foreground outline-none
              focus:border-primary/60 focus:shadow-lg focus:shadow-primary/10
              transition-all duration-200
            "
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={13} />
            </button>
          )}
        </div>
      </div>
      {/* Filter Chips */}
      <div className="flex items-center gap-2 flex-wrap">
        <Filter size={14} className="text-muted-foreground" />
        {filterOptions?.map((opt) => (
          <button
            key={opt?.key}
            onClick={() => setActiveFilter(opt?.value)}
            className={`
              px-3 py-1.5 rounded-full text-xs font-600 border transition-all duration-200
              ${activeFilter === opt?.value
                ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                : 'glass-card border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
              }
            `}
          >
            {opt?.label}
          </button>
        ))}
      </div>
      {/* Subject Cards Grid */}
      {filtered?.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <div className="w-16 h-16 rounded-2xl glass-card border border-border flex items-center justify-center">
            <BookOpen size={28} className="text-muted-foreground" />
          </div>
          <h3 className="text-lg font-600 text-foreground">No subjects found</h3>
          <p className="text-sm text-muted-foreground text-center max-w-xs">
            No subjects match &quot;{search}&quot;. Try a different keyword or clear the search.
          </p>
          <button
            onClick={() => { setSearch(''); setActiveFilter('all'); }}
            className="px-4 py-2 rounded-xl glass-card border border-primary/40 text-primary text-sm font-500 hover:bg-primary/10 transition-colors duration-200"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-6">
          {filtered?.map((subject) => {
            const Icon = subject?.icon;
            const isExpanded = expandedCard === subject?.id;

            return (
              <div
                key={subject?.key}
                className={`
                  glass-card rounded-2xl border transition-all duration-300
                  ${subject?.cardBorder}
                  flex flex-col overflow-hidden
                  ${isExpanded ? 'shadow-2xl' : ''}
                `}
              >
                {/* Card Header with gradient strip */}
                <div className={`${subject?.gradient} p-5 relative overflow-hidden`}>
                  <div className="absolute inset-0 mesh-bg opacity-20" />
                  <div className="relative z-10 flex items-start justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <Icon size={26} className="text-white" />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className={`text-[10px] font-700 px-2 py-0.5 rounded-full bg-white/20 text-white`}>
                        {subject?.difficulty}
                      </span>
                      {/* <div className="flex items-center gap-1">
                        <Star size={11} className="text-yellow-300 fill-yellow-300" />
                        <span className="text-xs font-600 text-white">{subject?.rating}</span>
                      </div> */}
                    </div>
                  </div>
                  <div className="relative z-10 mt-4">
                    <h3 className="text-xl font-800 text-white">{subject?.name}</h3>
                    <p className="text-xs text-white/80 mt-0.5">{subject?.tagline}</p>
                  </div>
                </div>
                {/* Card Body */}
                <div className="p-5 flex flex-col flex-1 gap-4">
                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {subject?.description}
                  </p>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center">
                      <p className="text-base font-700 text-foreground">{subject?.questions}</p>
                      <p className="text-[10px] text-muted-foreground">Questions</p>
                    </div>
                    <div className="text-center border-x border-border/50">
                      <p className="text-base font-700 text-foreground">{subject?.tests}</p>
                      <p className="text-[10px] text-muted-foreground">Tests</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-0.5">
                        <Clock size={11} className="text-muted-foreground" />
                        <p className="text-[11px] font-600 text-foreground">60m</p>
                      </div>
                      <p className="text-[10px] text-muted-foreground">Time</p>
                    </div>
                  </div>

                  {/* Topics toggle */}
                  <button
                    onClick={() => setExpandedCard(isExpanded ? null : subject?.id)}
                    className="flex items-center gap-1.5 text-xs font-500 text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                  >
                    <ChevronRight
                      size={13}
                      className={`transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''} group-hover:text-primary`}
                    />
                    {isExpanded ? 'Hide topics' : `${subject?.topics?.length} topics covered`}
                  </button>

                  {/* Topics list */}
                  {isExpanded && (
                    <div className="flex flex-wrap gap-1.5 animate-fade-in">
                      {subject?.topics?.map((topic) => (
                        <span
                          key={`${subject?.id}-topic-${topic}`}
                          className={`text-[10px] font-500 px-2 py-0.5 rounded-full border ${subject?.badgeColor}`}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}

                 

                  {/* CTA Button */}
                  <Link
                    href={`/subject-test-page?subject=${subject?.id}`}
                    className={`
                      w-full flex items-center justify-center gap-2
                      py-2.5 rounded-xl font-600 text-sm
                      ${subject?.gradient} text-white
                      hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]
                      transition-all duration-200 shadow-lg group
                    `}
                  >
                    Start Tests
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {/* Bottom info */}
      <div className="flex items-center justify-center gap-2 py-4">
        <div className="h-px flex-1 bg-border/50 max-w-[200px]" />
        <span className="text-xs text-muted-foreground px-3">
          Showing {filtered?.length} of {subjects?.length} subjects
        </span>
        <div className="h-px flex-1 bg-border/50 max-w-[200px]" />
      </div>
    </div>
  );
}