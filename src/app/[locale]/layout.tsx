import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import NavBar from '@/app/components/NavBar.tsx';
import '@/app/styles/globals.css';
import { poppins } from '../fonts.ts';

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
      <body className={poppins.className}>
        <NextIntlClientProvider messages={messages}>
          <NavBar />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
