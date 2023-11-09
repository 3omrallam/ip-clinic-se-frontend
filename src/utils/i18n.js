import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import locales from "../locales";

import { isDevelopment } from "../configs";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: isDevelopment,
    supportedLngs: ["en", "ar"],
    fallbackLng: "ar",
    ns: ["fallback"],
    lng: localStorage.getItem("i18nextLng") || "ar",
    fallbackNS: "fallback",
    keySeparator: ".",
    resources: {
      ar: {
        app: locales.ar,
      },
      en: {
        app: locales.en,
      },
    },
  });
