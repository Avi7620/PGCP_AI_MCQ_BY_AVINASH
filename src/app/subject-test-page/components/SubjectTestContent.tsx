'use client';

import React, { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  Code2,
  Coffee,
  BarChart3,
  Brain,
  ArrowLeft,
  ExternalLink,
  Clock,
  FileText,
  Zap,
  Target,
  Trophy,
  BookOpen,
  AlertCircle,
  CheckCircle2,
  Star,
} from 'lucide-react';

const subjectMap: Record<
  string,
  {
    id: string;
    name: string;
    fullName: string;
    tagline: string;
    icon: React.ElementType;
    gradient: string;
    accentColor: string;
    tests: TestItem[];
  }
> = {
  python: {
    id: 'python',
    name: 'Python',
    fullName: 'Python Programming',
    tagline: 'Core programming, scripting & automation',
    icon: Code2,
    gradient: 'gradient-bg-violet',
    accentColor: 'text-primary',
    tests: [
      {
        key: 'test-python-1',
        id: 'test1',
        label: 'Test 1',
        title: 'Basics & Syntax',
        description: 'Variables, data types, operators, input/output, and basic string operations.',
        topics: ['Variables', 'Data Types', 'Operators', 'String Methods'],
        questions: 20,
        duration: 20,
        difficulty: 'Easy',
        difficultyColor: 'text-green-400 bg-green-400/10 border-green-400/30',
        icon: BookOpen,
        iconGradient: 'gradient-bg-green',
        status: 'available',
        filename: 'unit1.html',
      },
      {
        key: 'test-python-2',
        id: 'test2',
        label: 'Test 2',
        title: 'Control Flow & Functions',
        description: 'If-else statements, loops, function definitions, arguments, and return values.',
        topics: ['if-else', 'for/while loops', 'Functions', 'Recursion'],
        questions: 25,
        duration: 25,
        difficulty: 'Easy–Medium',
        difficultyColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30',
        icon: Zap,
        iconGradient: 'gradient-bg-cyan',
        status: 'available',
        filename: 'unit2.html',
      },
      {
        key: 'test-python-3',
        id: 'test3',
        label: 'Test 3',
        title: 'OOP & File Handling',
        description: 'Classes, objects, inheritance, polymorphism, file I/O, and exception handling.',
        topics: ['Classes', 'Inheritance', 'File I/O', 'Exceptions'],
        questions: 25,
        duration: 60,
        difficulty: 'Medium',
        difficultyColor: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
        icon: Target,
        iconGradient: 'gradient-bg-amber',
        status: 'available',
        filename: 'unit3.html',
      },
      // {
      //   key: 'test-python-mock',
      //   id: 'mock',
      //   label: 'Mock Test',
      //   title: 'Full Syllabus Mock',
      //   description: 'A comprehensive mock exam covering all topics with university-pattern questions.',
      //   topics: ['All Topics', 'Mixed Difficulty', 'Timed'],
      //   questions: 50,
      //   duration: 45,
      //   difficulty: 'Mixed',
      //   difficultyColor: 'text-primary bg-primary/10 border-primary/30',
      //   icon: FileText,
      //   iconGradient: 'gradient-bg-violet',
      //   status: 'available',
      //   filename: 'mock.html',
      //   isFeatured: true,
      // },
      {
        key: 'test-python-final1',
        id: 'final1',
        label: 'Final Test - 1',
        title: 'Final Exam Practice',
        description: 'Simulates the actual university final exam format — difficulty, pattern, and time limit.',
        topics: ['Exam Pattern', 'Full Syllabus', 'University Standard'],
        questions: 60,
        duration: 60,
        difficulty: 'Hard',
        difficultyColor: 'text-pink-400 bg-pink-400/10 border-pink-400/30',
        icon: Trophy,
        iconGradient: 'gradient-bg-pink',
        status: 'available',
        filename: 'final1.html',
        isFeatured: true,
      },
            {
        key: 'test-python-final2',
        id: 'final2',
        label: 'Final Test - 2',
        title: 'Final Exam Practice',
        description: 'Simulates the actual university final exam format — difficulty, pattern, and time limit.',
        topics: ['Exam Pattern', 'Full Syllabus', 'University Standard'],
        questions: 60,
        duration: 60,
        difficulty: 'Hard',
        difficultyColor: 'text-pink-400 bg-pink-400/10 border-pink-400/30',
        icon: Trophy,
        iconGradient: 'gradient-bg-pink',
        status: 'available',
        filename: 'final2.html',
        isFeatured: true,
      },
            {
        key: 'test-python-final3',
        id: 'final3',
        label: 'Final Test - 3',
        title: 'Final Exam Practice',
        description: 'Simulates the actual university final exam format — difficulty, pattern, and time limit.',
        topics: ['Exam Pattern', 'Full Syllabus', 'University Standard'],
        questions: 60,
        duration: 60,
        difficulty: 'Hard',
        difficultyColor: 'text-pink-400 bg-pink-400/10 border-pink-400/30',
        icon: Trophy,
        iconGradient: 'gradient-bg-pink',
        status: 'available',
        filename: 'final3.html',
        isFeatured: true,
      },
            {
        key: 'test-python-final4',
        id: 'final4',
        label: 'Final Test - 4',
        title: 'Final Exam Practice',
        description: 'Simulates the actual university final exam format — difficulty, pattern, and time limit.',
        topics: ['Exam Pattern', 'Full Syllabus', 'University Standard'],
        questions: 60,
        duration: 60,
        difficulty: 'Hard',
        difficultyColor: 'text-pink-400 bg-pink-400/10 border-pink-400/30',
        icon: Trophy,
        iconGradient: 'gradient-bg-pink',
        status: 'available',
        filename: 'final4.html',
        isFeatured: true,
      },
    ],
  },
  java: {
    id: 'java',
    name: 'Java',
    fullName: 'Java Programming',
    tagline: 'OOP, collections, threads & frameworks',
    icon: Coffee,
    gradient: 'gradient-bg-amber',
    accentColor: 'text-amber-400',
    tests: [
      {
        key: 'test-java-1',
        id: 'test1',
        label: 'Test 1',
        title: 'Java Fundamentals',
        description: 'Syntax, data types, operators, control statements, and basic I/O.',
        topics: ['Syntax', 'Data Types', 'Control Flow', 'I/O'],
        questions: 20,
        duration: 20,
        difficulty: 'Easy',
        difficultyColor: 'text-green-400 bg-green-400/10 border-green-400/30',
        icon: BookOpen,
        iconGradient: 'gradient-bg-green',
        status: 'available',
        filename: 'unit1.html',
      },
      {
        key: 'test-java-2',
        id: 'test2',
        label: 'Test 2',
        title: 'OOP Concepts',
        description: 'Classes, objects, constructors, inheritance, polymorphism, and abstraction.',
        topics: ['Classes', 'Inheritance', 'Polymorphism', 'Abstraction'],
        questions: 25,
        duration: 25,
        difficulty: 'Medium',
        difficultyColor: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
        icon: Zap,
        iconGradient: 'gradient-bg-amber',
        status: 'available',
        filename: 'unit2.html',
      },
      {
        key: 'test-java-3',
        id: 'test3',
        label: 'Test 3',
        title: 'Collections & Generics',
        description: 'ArrayList, LinkedList, HashMap, TreeMap, generics, and iterators.',
        topics: ['ArrayList', 'HashMap', 'Generics', 'Iterators'],
        questions: 25,
        duration: 60,
        difficulty: 'Medium',
        difficultyColor: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
        icon: Target,
        iconGradient: 'gradient-bg-violet',
        status: 'available',
        filename: 'unit3.html',
      },

      {
        key: 'test-java-final',
        id: 'final1',
        label: 'Final Test - 1',
        title: 'Final Exam Practice',
        description: 'Mirrors the final semester Java exam — full syllabus, strict timing.',
        topics: ['Exam Pattern', 'Full Syllabus', 'University Standard'],
        questions: 60,
        duration: 60,
        difficulty: 'Hard',
        difficultyColor: 'text-pink-400 bg-pink-400/10 border-pink-400/30',
        icon: Trophy,
        iconGradient: 'gradient-bg-pink',
        status: 'available',
        filename: 'final1.html',
        isFeatured: true,
      },      {
        key: 'test-java-final',
        id: 'final2',
        label: 'Final Test - 2',
        title: 'Final Exam Practice',
        description: 'Mirrors the final semester Java exam — full syllabus, strict timing.',
        topics: ['Exam Pattern', 'Full Syllabus', 'University Standard'],
        questions: 60,
        duration: 60,
        difficulty: 'Hard',
        difficultyColor: 'text-pink-400 bg-pink-400/10 border-pink-400/30',
        icon: Trophy,
        iconGradient: 'gradient-bg-pink',
        status: 'available',
        filename: 'final2.html',
        isFeatured: true,
      },      {
        key: 'test-java-final',
        id: 'final3',
        label: 'Final Test - 3',
        title: 'Final Exam Practice',
        description: 'Mirrors the final semester Java exam — full syllabus, strict timing.',
        topics: ['Exam Pattern', 'Full Syllabus', 'University Standard'],
        questions: 60,
        duration: 60,
        difficulty: 'Hard',
        difficultyColor: 'text-pink-400 bg-pink-400/10 border-pink-400/30',
        icon: Trophy,
        iconGradient: 'gradient-bg-pink',
        status: 'available',
        filename: 'final3.html',
        isFeatured: true,
      },      {
        key: 'test-java-final',
        id: 'final4',
        label: 'Final Test - 4',
        title: 'Final Exam Practice',
        description: 'Mirrors the final semester Java exam — full syllabus, strict timing.',
        topics: ['Exam Pattern', 'Full Syllabus', 'University Standard'],
        questions: 60,
        duration: 60,
        difficulty: 'Hard',
        difficultyColor: 'text-pink-400 bg-pink-400/10 border-pink-400/30',
        icon: Trophy,
        iconGradient: 'gradient-bg-pink',
        status: 'available',
        filename: 'final4.html',
        isFeatured: true,
      },
    ],
  },
  'data-analytics': {
    id: 'data-analytics',
    name: 'Data Analytics',
    fullName: 'Data Analytics',
    tagline: 'Pandas, NumPy, visualization & statistics',
    icon: BarChart3,
    gradient: 'gradient-bg-cyan',
    accentColor: 'text-accent',
    tests: [
      {
        key: 'test-da-1',
        id: 'test1',
        label: 'Test 1',
        title: 'NumPy Fundamentals',
        description: 'Array creation, indexing, slicing, broadcasting, and mathematical operations.',
        topics: ['Arrays', 'Indexing', 'Broadcasting', 'Math Ops'],
        questions: 20,
        duration: 20,
        difficulty: 'Easy',
        difficultyColor: 'text-green-400 bg-green-400/10 border-green-400/30',
        icon: BookOpen,
        iconGradient: 'gradient-bg-green',
        status: 'available',
        filename: 'test1.html',
      },
      {
        key: 'test-da-2',
        id: 'test2',
        label: 'Test 2',
        title: 'Pandas DataFrames',
        description: 'Series, DataFrames, merging, groupby, pivot tables, and data cleaning.',
        topics: ['Series', 'DataFrames', 'groupby', 'Merge/Join'],
        questions: 25,
        duration: 25,
        difficulty: 'Medium',
        difficultyColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30',
        icon: Zap,
        iconGradient: 'gradient-bg-cyan',
        status: 'available',
        filename: 'test2.html',
      },
      {
        key: 'test-da-3',
        id: 'test3',
        label: 'Test 3',
        title: 'Visualization & Stats',
        description: 'Matplotlib plots, Seaborn charts, descriptive statistics, and correlation analysis.',
        topics: ['Matplotlib', 'Seaborn', 'Statistics', 'Correlation'],
        questions: 25,
        duration: 60,
        difficulty: 'Medium',
        difficultyColor: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
        icon: Target,
        iconGradient: 'gradient-bg-amber',
        status: 'available',
        filename: 'test3.html',
      },
      {
        key: 'test-da-mock',
        id: 'mock',
        label: 'Mock Test',
        title: 'Full Syllabus Mock',
        description: 'End-to-end analytics mock covering NumPy, Pandas, and visualization tools.',
        topics: ['All Topics', 'Mixed Difficulty', 'Timed'],
        questions: 50,
        duration: 45,
        difficulty: 'Mixed',
        difficultyColor: 'text-primary bg-primary/10 border-primary/30',
        icon: FileText,
        iconGradient: 'gradient-bg-cyan',
        status: 'available',
        filename: 'mock.html',
        isFeatured: true,
      },
      {
        key: 'test-da-final',
        id: 'final',
        label: 'Final Test',
        title: 'Final Exam Practice',
        description: 'Comprehensive final exam simulation for Data Analytics — university-level questions.',
        topics: ['Exam Pattern', 'Full Syllabus', 'University Standard'],
        questions: 60,
        duration: 60,
        difficulty: 'Hard',
        difficultyColor: 'text-pink-400 bg-pink-400/10 border-pink-400/30',
        icon: Trophy,
        iconGradient: 'gradient-bg-pink',
        status: 'available',
        filename: 'final.html',
        isFeatured: true,
      },
    ],
  },
  pml: {
    id: 'pml',
    name: 'PML',
    fullName: 'Python for Machine Learning',
    tagline: 'Scikit-learn, regression, classification & more',
    icon: Brain,
    gradient: 'gradient-bg-pink',
    accentColor: 'text-pink-400',
    tests: [
      {
        key: 'test-pml-1',
        id: 'test1',
        label: 'Test 1',
        title: 'ML Fundamentals',
        description: 'Supervised vs unsupervised learning, model lifecycle, train/test split, and overfitting.',
        topics: ['ML Types', 'Train/Test Split', 'Overfitting', 'Bias-Variance'],
        questions: 20,
        duration: 20,
        difficulty: 'Easy',
        difficultyColor: 'text-green-400 bg-green-400/10 border-green-400/30',
        icon: BookOpen,
        iconGradient: 'gradient-bg-green',
        status: 'available',
        filename: 'basic1.html',
      },
      {
        key: 'test-pml-2',
        id: 'test2',
        label: 'Test 2',
        title: 'Regression Algorithms',
        description: 'Linear regression, polynomial regression, Ridge, Lasso, and model evaluation metrics.',
        topics: ['Linear Regression', 'Ridge', 'Lasso', 'R² Score'],
        questions: 25,
        duration: 25,
        difficulty: 'Medium',
        difficultyColor: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
        icon: Zap,
        iconGradient: 'gradient-bg-amber',
        status: 'available',
        filename: 'regression.html',
      },
      {
        key: 'test-pml-3',
        id: 'test3',
        label: 'Test 3',
        title: 'Classification & Clustering',
        description: 'KNN, Decision Trees, SVM, K-Means clustering, and confusion matrix evaluation.',
        topics: ['KNN', 'Decision Trees', 'SVM', 'K-Means'],
        questions: 25,
        duration: 35,
        difficulty: 'Hard',
        difficultyColor: 'text-pink-400 bg-pink-400/10 border-pink-400/30',
        icon: Target,
        iconGradient: 'gradient-bg-pink',
        status: 'available',
        filename: 'classification&clustering.html',
      },

      {
        key: 'test-pml-final1',
        id: 'final',
        label: 'Final Test - 1',
        title: 'Final Exam Practice',
        description: 'Full-length PML final exam simulation — hardest questions, strictest timing.',
        topics: ['Exam Pattern', 'Full Syllabus', 'University Standard'],
        questions: 60,
        duration: 60,
        difficulty: 'Hard',
        difficultyColor: 'text-pink-400 bg-pink-400/10 border-pink-400/30',
        icon: Trophy,
        iconGradient: 'gradient-bg-pink',
        status: 'available',
        filename: 'final1.html',
        isFeatured: true,
      },
            {
        key: 'test-pml-final2',
        id: 'final',
        label: 'Final Test - 2',
        title: 'Final Exam Practice',
        description: 'Full-length PML final exam simulation — hardest questions, strictest timing.',
        topics: ['Exam Pattern', 'Full Syllabus', 'University Standard'],
        questions: 60,
        duration: 60,
        difficulty: 'Hard',
        difficultyColor: 'text-pink-400 bg-pink-400/10 border-pink-400/30',
        icon: Trophy,
        iconGradient: 'gradient-bg-pink',
        status: 'available',
        filename: 'final2.html',
        isFeatured: true,
      },
            {
        key: 'test-pml-final3',
        id: 'final',
        label: 'Final Test - 3',
        title: 'Final Exam Practice',
        description: 'Full-length PML final exam simulation — hardest questions, strictest timing.',
        topics: ['Exam Pattern', 'Full Syllabus', 'University Standard'],
        questions: 60,
        duration: 60,
        difficulty: 'Hard',
        difficultyColor: 'text-pink-400 bg-pink-400/10 border-pink-400/30',
        icon: Trophy,
        iconGradient: 'gradient-bg-pink',
        status: 'available',
        filename: 'final3.html',
        isFeatured: true,
      },
                 {
        key: 'test-pml-final4',
        id: 'final',
        label: 'Final Test - 4',
        title: 'Final Exam Practice',
        description: 'Full-length PML final exam simulation — hardest questions, strictest timing.',
        topics: ['Exam Pattern', 'Full Syllabus', 'University Standard'],
        questions: 60,
        duration: 60,
        difficulty: 'Hard',
        difficultyColor: 'text-pink-400 bg-pink-400/10 border-pink-400/30',
        icon: Trophy,
        iconGradient: 'gradient-bg-pink',
        status: 'available',
        filename: 'final4.html',
        isFeatured: true,
      },
    ],
    
  },
};

interface TestItem {
  key: string;
  id: string;
  label: string;
  title: string;
  description: string;
  topics: string[];
  questions: number;
  duration: number;
  difficulty: string;
  difficultyColor: string;
  icon: React.ElementType;
  iconGradient: string;
  status: string;
  filename: string;
  isFeatured?: boolean;
}

export default function SubjectTestContent() {
  const searchParams = useSearchParams();
  const subjectId = searchParams.get('subject') || 'python';

  const subject = useMemo(
    () => subjectMap[subjectId] || subjectMap['python'],
    [subjectId]
  );

  const SubjectIcon = subject.icon;

  // Build test file path — college manually places HTML files here
  // Backend integration point: replace with actual file server URL or CMS route
  const getTestUrl = (filename: string) =>
    `/tests/${subject.id}/${filename}`;

  const regularTests = subject.tests.filter((t) => !t.isFeatured);
  const featuredTests = subject.tests.filter((t) => t.isFeatured);

  return (
    <div className="space-y-8">
      {/* Back nav */}
      <Link
        href="/subject-selection"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
      >
        <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform duration-200" />
        Back to Subjects
      </Link>

      {/* Subject Hero Header */}
      <div className={`relative overflow-hidden rounded-3xl ${subject.gradient} p-8 lg:p-10`}>
        <div className="absolute inset-0 mesh-bg opacity-20" />
        <div className="absolute top-0 right-0 w-64 h-64 blob-cyan opacity-20 pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl flex-shrink-0">
            <SubjectIcon size={36} className="text-white" />
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-600 text-white/70 uppercase tracking-wider">Subject</span>
              <span className="text-white/40">·</span>
              <span className="text-xs font-600 text-white/70">{subject.tests.length} Tests Available</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-800 text-white">{subject.fullName}</h1>
            <p className="text-sm text-white/70 mt-1">{subject.tagline}</p>
          </div>

          {/* Summary stats */}
          <div className="flex gap-4 sm:gap-6">
            <div className="text-center">
              <p className="text-2xl font-800 text-white">
                {subject.tests.reduce((a, t) => a + t.questions, 0)}
              </p>
              <p className="text-xs text-white/60">Questions</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-800 text-white">{subject.tests.length}</p>
              <p className="text-xs text-white/60">Tests</p>
            </div>
          </div>
        </div>
      </div>

      

      {/* Regular Tests (Test 1, 2, 3) */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <BookOpen size={17} className="text-muted-foreground" />
          <h2 className="text-lg font-700 text-foreground">Unit Tests</h2>
          <span className="text-xs text-muted-foreground ml-1">— Topic-wise practice</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {regularTests.map((test) => {
            const TestIcon = test.icon;
            return (
              <div
                key={test.key}
                className="glass-card glass-card-hover rounded-2xl border border-border overflow-hidden flex flex-col"
              >
                {/* Top strip */}
                <div className={`${test.iconGradient} px-5 py-4 flex items-center justify-between`}>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                      <TestIcon size={17} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-700 text-white/70 uppercase tracking-wider">{test.label}</p>
                      <p className="text-sm font-700 text-white leading-tight">{test.title}</p>
                    </div>
                  </div>
                  <span className={`text-[10px] font-700 px-2 py-0.5 rounded-full border ${test.difficultyColor}`}>
                    {test.difficulty}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1 gap-4">
                  <p className="text-xs text-muted-foreground leading-relaxed">{test.description}</p>

                  {/* Meta */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <FileText size={12} className="text-muted-foreground" />
                      <span className="text-xs text-foreground font-500">{test.questions} Qs</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} className="text-muted-foreground" />
                      <span className="text-xs text-foreground font-500">{test.duration} min</span>
                    </div>
                  </div>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-1.5">
                    {test.topics.map((topic) => (
                      <span
                        key={`${test.key}-topic-${topic}`}
                        className="text-[10px] font-500 px-2 py-0.5 rounded-full bg-muted/60 border border-border text-muted-foreground"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={getTestUrl(test.filename)}
                    className={`
                      mt-auto w-full flex items-center justify-center gap-2
                      py-2.5 rounded-xl font-600 text-sm
                      ${test.iconGradient} text-white
                      hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]
                      transition-all duration-200 shadow-md group
                    `}
                  >
                    Begin Test
                    <ExternalLink size={13} className="opacity-70" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Tests (Mock + Final) */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Star size={17} className="text-amber-400" />
          <h2 className="text-lg font-700 text-foreground">Featured Tests</h2>
          <span className="text-xs text-muted-foreground ml-1">— Full-length exam simulations</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuredTests.map((test) => {
            const TestIcon = test.icon;
            return (
              <div
                key={test.key}
                className="glass-card glass-card-hover rounded-2xl border border-border overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Left gradient panel */}
                  <div className={`${test.iconGradient} p-6 sm:w-40 flex flex-col items-center justify-center gap-3`}>
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shadow-lg">
                      <TestIcon size={24} className="text-white" />
                    </div>
                    <span className="text-sm font-800 text-white text-center">{test.label}</span>
                    <span className={`text-[10px] font-700 px-2 py-0.5 rounded-full border ${test.difficultyColor}`}>
                      {test.difficulty}
                    </span>
                  </div>

                  {/* Right content */}
                  <div className="p-5 flex flex-col flex-1 gap-3">
                    <div>
                      <h3 className="text-base font-700 text-foreground">{test.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{test.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-1.5">
                        <FileText size={12} className="text-muted-foreground" />
                        <span className="text-xs font-500 text-foreground">{test.questions} Questions</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={12} className="text-muted-foreground" />
                        <span className="text-xs font-500 text-foreground">{test.duration} minutes</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 size={12} className="text-green-400" />
                        <span className="text-xs font-500 text-green-400">Available</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {test.topics.map((topic) => (
                        <span
                          key={`${test.key}-topic-${topic}`}
                          className="text-[10px] font-500 px-2 py-0.5 rounded-full bg-muted/60 border border-border text-muted-foreground"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    <a
                      href={getTestUrl(test.filename)}
                      className={`
                        w-full flex items-center justify-center gap-2
                        py-2.5 rounded-xl font-600 text-sm
                        ${test.iconGradient} text-white
                        hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]
                        transition-all duration-200 shadow-md group
                      `}
                    >
                      Begin {test.label}
                      <ExternalLink size={13} className="opacity-70" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

     </div>
  );
}