import { createContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

const TranslationContext = createContext();

function TranslationProvider({ children }) {
  const { i18n } = useTranslation();

  const [lang, setLang] = useState('es');

  const changeLanguage = () => {
    const newLang = lang === 'es' ? 'en' : 'es';
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <TranslationContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
}

export { TranslationProvider };
export default TranslationContext;
