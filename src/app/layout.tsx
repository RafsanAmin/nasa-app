import type { Metadata } from 'next';

import './globals.css';
import NextTopLoader from 'nextjs-toploader';

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
      <NextTopLoader color="#ffffff50" />
      <body className={``}>{children}</body>
    </html>
  );
}
