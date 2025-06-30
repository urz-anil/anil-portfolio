import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Anil Rachamalla | Software Developer',
  description: 'Personal portfolio of Anil Rachamalla, a Software Developer with a strong interest in cybersecurity and web development.',
  metadataBase: new URL('https://anil-portfolio-eta.vercel.app/'),
  openGraph: {
    title: 'Anil Rachamalla | Software Developer',
    description: 'Personal portfolio of Anil Rachamalla, a Software Developer with a strong interest in cybersecurity and web development.',
    type: 'website',
    locale: 'en_US',
    url: 'https://anil-portfolio-eta.vercel.app/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} min-h-screen antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 
