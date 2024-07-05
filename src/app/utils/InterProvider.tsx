import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

type Language = 'en' | 'es';
interface InterContextProps {
  locale: Language;
  switchLanguage: (language: Language) => Promise<void>;
  translations: Record<string, string>;
}
export const InterContext = createContext<InterContextProps>({
  locale: 'en',
  switchLanguage: async () => {},
  translations: {},
});

const InterProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<Language>('en');
  const [translations, setTranslations] = useState({});

  const switchLanguage = async (language: Language) => {
    const response = await axios.get(`/public/locales/${language}.json`);
    const data = response.data;
    setLocale(language);
    setTranslations(data);
  };
  useEffect(() => {
    switchLanguage('en');
  }, []);
  return (
    <InterContext.Provider value={{ locale, switchLanguage, translations }}>
      {children}
    </InterContext.Provider>
  );
};

export default InterProvider;
