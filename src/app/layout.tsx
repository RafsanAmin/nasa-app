import type { Metadata } from 'next';

import './globals.css';
import Navbar from '@/components/layout/Navbar';

export const metadata: Metadata = {
  title: 'KugelBlitz',
  description: 'PACE in the classroom',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased grid justify-center min-h-screen`}>
        <main className="cont">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
