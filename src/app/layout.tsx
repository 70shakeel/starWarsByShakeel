import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Star Wars Directory',
  description: 'Search and browse Star Wars characters',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
