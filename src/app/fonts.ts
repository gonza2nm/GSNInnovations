import { Poppins } from 'next/font/google';
import { Gabarito } from 'next/font/google';
import { Rubik } from 'next/font/google';

export const gabarito = Gabarito({
  subsets: ['latin'],
});
export const rubik = Rubik({
  subsets: ['latin'],
});

export const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
