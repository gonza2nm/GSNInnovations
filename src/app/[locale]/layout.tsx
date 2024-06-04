import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import NavBar from '@/app/components/NavBar.tsx';
import '@/app/styles/globals.css';
import { rubik } from '@/app/fonts.ts';
import { Metadata } from 'next';
import Footer from '@/app/components/Footer.tsx';
import '@/app/styles/globals.css';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'GSN Innovations',
  icons: '/favicon.ico',
  description: 'Primera descripcion con metadata',
  authors: [{ name: 'GSN Innovations', url: '/' }],
  keywords: [
    'WebApps',
    'Argentina Development',
    'Mobile First',
    'Front-end',
    'Back-end',
    'Responsive design',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Next.js',
    'Node.js',
    'MySql',
    'MongoDB',
    'Desarrollo Web',
    'Web Development',
  ],
};
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
