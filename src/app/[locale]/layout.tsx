import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import NavBar from '@/app/components/NavBar.tsx';
import '@/app/styles/globals.css';
import { rubik } from '@/app/fonts.ts';
import { Metadata } from 'next';
import Footer from '@/app/components/Footer.tsx';
import '@/app/styles/globals.css';

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
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={rubik.className}>
        <NextIntlClientProvider messages={messages}>
          <NavBar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
