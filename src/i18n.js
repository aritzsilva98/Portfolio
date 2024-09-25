import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { engTrans } from './translations/english'
import { spaTrans } from './translations/spanish'
import { japTrans } from './translations/japanese'
import { rusTrans } from './translations/russian'
import { freTrans } from './translations/french'
import { deuTrans } from './translations/german'

// Translations
const resources = {
  en: engTrans.en,
  es: spaTrans.es,
  ja: japTrans.ja,
  ru: rusTrans.ru,
  fr: freTrans.fr,
  de: deuTrans.de
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['navigator'],
      caches: []
    }
  })

export default i18n
