import { useTranslations } from 'next-intl';
import Home from '../components/sections/Home.tsx';
import About from '../components/sections/About.tsx';
import Services from '../components/sections/Services.tsx';
import Portfolio from '../components/sections/Portfolio.tsx';
import Contact from '../components/sections/Contact.tsx';

export default function Page() {
  const t = useTranslations('Main');
  return (
    <main>
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
