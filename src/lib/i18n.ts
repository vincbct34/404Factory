import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import en from '@/translations/en/common.json';
import fr from '@/translations/fr/common.json';

const resources = {
  en: { translation: en },
  fr: { translation: fr },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
