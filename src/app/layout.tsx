import NavBar from '@/app/components/navbar/NavBar.tsx';
import '@/app/globals.css';
import { rubik } from '@/app/fonts.ts';
import { Metadata } from 'next';
import Footer from '@/app/components/footer/Footer';
import i18n from 'i18next';

export const metadata: Metadata = {
  title: 'GSN Innovations',
  icons: '/favicon.ico',
  description:
    'GSN Innovations is a web development group that specializes in creating modern, responsive, and user-friendly web applications.',
  authors: [{ name: 'GSN Innovations', url: '/' }],
  keywords: [
    'webapps',
    'argentina development',
    'mobile First',
    'front-end',
    'back-end',
    'responsive design',
    'html',
    'css',
    'javascript',
    'typeScript',
    'next.js',
    'react',
    'node.js',
    'mysql',
    'mongodb',
    'desarrollo web',
    'web development',
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
