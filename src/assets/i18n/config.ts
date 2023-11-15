// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations
import translationEN from "../i18n/Translations/en.json";
import translationFR from "../i18n/Translations/fra.json";
import translationCH from "../i18n/Translations/chn.json";
import translationKR from "../i18n/Translations/kor.json";
import translationNL from "../i18n/Translations/nld.json";
import translationRU from "../i18n/Translations/rus.json";
import translationJP from "../i18n/Translations/jpn.json";
import translationPR from "../i18n/Translations/prt.json";
import translationES from "../i18n/Translations/esp.json";

const resources = {
  ENG: {
    translation: translationEN,
  },
  FRA: {
    translation: translationFR,
  },
  CHN: {
    translation: translationCH,
  },
  KOR: {
    translation: translationKR,
  },
  NLD: {
    translation: translationNL,
  },
  RUS: {
    translation: translationRU,
  },
  JPN: {
    translation: translationJP,
  },
  PRT: {
    translation: translationPR,
  },
  ESP: {
    translation: translationES,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ENG", // default language
    keySeparator: ".", // separates translation keys
    interpolation: {
      escapeValue: false, // react already safe from xss
    },
  });

export default i18n;
