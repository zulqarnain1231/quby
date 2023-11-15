// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations
import translationEN from "../i18n/Translations/en.json";
import translationFR from "../i18n/Translations/fra.json";

const resources = {
  ENG: {
    translation: translationEN,
  },
  FRA: {
    translation: translationFR,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // default language
    keySeparator: ".", // separates translation keys
    interpolation: {
      escapeValue: false, // react already safe from xss
    },
  });

export default i18n;