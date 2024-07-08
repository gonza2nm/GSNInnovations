import NavBar from '@/app/components/navbar/NavBar.tsx';
import '@/app/globals.css';
import { rubik } from '@/app/fonts.ts';
import { Metadata } from 'next';
import Footer from '@/app/components/footer/Footer';

export const metadata: Metadata = {
  title: 'GSN Innovations: Desarrollo Web Apps Argentina',
  openGraph: {
    locale: 'es-AR',
    alternateLocale: ['es-ES', 'en-US', 'en-GB'],
    title: 'GSN Innovations: Desarrollo Web Apps',
    siteName: 'GSN Innovations: Desarrollo Web Apps',
    description:
      'GSN Innovations es un grupo especializado en crear aplicaciones web modernas y fáciles de usar en Argentina. Escuchamos, entendemos y solucionamos tus desafíos de software.',
    url: 'https://www.gsninnovations.com',
    images: [
      {
        url: 'https://www.gsninnovations.com/logo.jpg',
        width: 500,
        height: 500,
        alt: 'GSN Innovations Logo',
      },
    ],

    type: 'website',
  },
  icons: 'https://gsninnovations.com/favicon.ico',
  description:
    'GSN Innovations es un grupo especializado en crear aplicaciones web modernas y fáciles de usar en Argentina. Escuchamos, entendemos y solucionamos tus desafíos de software.',
  authors: [{ name: 'GSN Innovations', url: 'https://www.gsninnovations.com' }],
  keywords: [
    'GSN Innovations',
    'desarrollo de aplicaciones web Argentina',
    'aplicaciones web Argentina',
    'servicios de desarrollo web en Argentina',
    'web development',
    'modern web applications',
    'custom web app solutions',
  ],
};
export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={rubik.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
