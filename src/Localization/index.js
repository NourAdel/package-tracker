import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import EN from "./translations/englinsh";
import AR from "./translations/arabic";

i18n.use(initReactI18next).init({
  fallbackLng: "en",

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
