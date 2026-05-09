import React, { Suspense } from 'react';
import AppLayout from '@/components/AppLayout';
import SubjectTestContent from './components/SubjectTestContent';

export default function SubjectTestPage() {
  return (
    <AppLayout>
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
        <SubjectTestContent />
      </Suspense>
    </AppLayout>
  );
}