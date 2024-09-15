import type { Metadata } from 'next';

import './globals.css';
import Navbar from '@/components/layout/Navbar';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased grid place-items-center min-h-screen`}>
        <main className="w-[90vw] shrink-0 flex flex-col h-[90vh] xl:w-[85vw] xl:h-[85vh] backdrop-blur-3xl bg-white/10 rounded-lg shadow-lg p-8 lg:p-12">
          <Navbar />
          <div className="flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
