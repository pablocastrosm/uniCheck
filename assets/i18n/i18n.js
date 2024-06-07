import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';
import en from './en.json';
import es from './es.json';
import ca from './ca.json';

i18n.use(initReactI18next)
  .use(RNLanguageDetector)
  .init({
    compatibilityJSON: 'v3',
    supportedLngs: ['es', 'en', 'ca'],
    fallbackLng: 'es',
    resources: {
      en: en,
      es: es,
      ca: ca
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;