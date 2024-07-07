import NavBar from '@/app/components/navbar/NavBar.tsx';
import '@/app/globals.css';
import { rubik } from '@/app/fonts.ts';
import { Metadata } from 'next';
import Footer from '@/app/components/footer/Footer';

export const metadata: Metadata = {
  title: 'GSN Innovations',
  icons: '/favicon.ico',
  description:
    'GSN Innovations is a web development group that specializes in creating modern, responsive, and user-friendly web applications.',
  authors: [{ name: 'GSN Innovations', url: 'https://www.gsninnovations.com' }],
  keywords: [
    'GSN Innovations',
    'web development Argentina',
    'modern web applications',
    'responsive web development',
    'expert web development team',
    'web development technologies',
    'TypeScript',
    'JavaScript',
    'Google Cloud',
    'Next.js',
    'React',
    'HTML',
    'CSS',
    'Node.js',
    'MongoDB',
    'MySQL',
    'web development expertise',
    'custom web solutions',
    'user-centered web design',
    'intuitive web solutions',
    'high-quality web development',
    'exceptional customer service',
  ],
};
export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
