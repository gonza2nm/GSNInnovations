'use client';
import Home from './components/sections/home/Home.tsx';
import About from './components/sections/about/About.tsx';
import Services from './components/sections/services/Services.tsx';
import Contact from './components/sections/contact/Contact.tsx';

export default function Page() {
  return (
    <main>
      <Home />
      <About />
      <Services />
      <Contact />
    </main>
  );
}
