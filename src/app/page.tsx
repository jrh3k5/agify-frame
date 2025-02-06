'use client';

import dynamic from 'next/dynamic';

const Agify = dynamic(() => import('~/app/components/Agify'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col p-4">
      <Agify />
    </main>
  );
}