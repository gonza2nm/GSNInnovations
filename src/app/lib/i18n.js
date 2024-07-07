import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from '../../../public/locales/en.json';
import spanish from '../../../public/locales/es.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'es',
  debug: false,
  resources: {
    en: {
      translation: english,
    },
    es: {
      translation: spanish,
    },
  },
});
export default i18n;
