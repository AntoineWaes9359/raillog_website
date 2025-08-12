import { useState, useEffect } from 'react';
import { translations, Language } from '../i18n/translations';

export const useTranslation = () => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage first
    const saved = localStorage.getItem('raillog-language');
    if (saved && (saved === 'en' || saved === 'fr')) {
      return saved as Language;
    }
    
    // Check browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('fr')) {
      return 'fr';
    }
    
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('raillog-language', language);
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  return { t, language, setLanguage, toggleLanguage };
};