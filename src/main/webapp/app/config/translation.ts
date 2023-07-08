import { TranslatorContext, Storage } from 'react-jhipster';

import { setLocale } from 'app/shared/reducers/locale';

TranslatorContext.setDefaultLocale('en');
TranslatorContext.setRenderInnerTextForMissingKeys(false);

export const languages: any = {
  en: { name: 'English' },
  bn: { name: 'বাংলা' },
  'zh-cn': { name: '中文（简体）' },
  fa: { name: 'فارسی', rtl: true },
  fr: { name: 'Français' },
  hi: { name: 'हिंदी' },
  ja: { name: '日本語' },
  mr: { name: 'मराठी' },
  ta: { name: 'தமிழ்' },
  te: { name: 'తెలుగు' },
  // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
};

export const locales = Object.keys(languages).sort();

export const isRTL = (lang: string): boolean => languages[lang] && languages[lang].rtl;

export const registerLocale = store => {
  store.dispatch(setLocale(Storage.session.get('locale', 'en')));
};
