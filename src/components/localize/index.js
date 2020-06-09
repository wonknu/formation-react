import React from 'react';

import EN from "../../i18n/en.json";
import FR from "../../i18n/fr.json";

const translations = {
  en: EN,
  fr: FR
};

export const LocalizeContext = React.createContext({
  setLanguage: () => {},
  getLanguage: () => {},
  t: () => {},
});

const LocalizeProvider = ({children}) => {
  const [language, setLanguage] = React.useState("fr");

  const t = key => {
    return translations[language] && translations[language][key] ? translations[language][key] : key;
  };

  const getLanguage = () => language;

  return (
    <LocalizeContext.Provider value={{setLanguage, getLanguage, t}}>
      {children}
    </LocalizeContext.Provider>
  );
};

export default LocalizeProvider;