import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from './langs/ko';
import en from './langs/en';

const resources = {
  en: {
    translation: en,
  },

  ko: {
    translation: ko,
  },
};
// 기본언어 설정
i18n.use(initReactI18next).init({
  resources,
  lng: 'ko',
});
