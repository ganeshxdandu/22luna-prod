import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { NotFoundClient } from '@/components/sections/not-found/NotFoundClient';

export const metadata: Metadata = {
  title: '404 — Page Not Found | 22luna',
  description: 'Nothing here but a little moonlight. Let us guide you back somewhere familiar.',
};

export default function NotFoundPage() {
  return (
    <main className="flex flex-col">
      <Header variant="light" />
      <NotFoundClient />
      <Footer />
    </main>
  );
}
