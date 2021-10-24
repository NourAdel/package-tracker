import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import EN from './translations/en';
import AR from './translations/ar';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: EN,
      },
      ar: {
        translation: AR,
      },
    },
  });

export default i18n;