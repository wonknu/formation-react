import React, { useEffect, useRef } from 'react';
import { getLocale } from '../../utils/getLocale';

import EN from "../../i18n/en.json";
import FR from "../../i18n/fr.json";
import { withRouter } from 'react-router-dom';

const translations = {
  en: EN,
  fr: FR
};

export const LocalizeContext = React.createContext({
  setLanguage: () => {},
  getLanguage: () => {},
  t: () => {},
});

const LocalizeProvider = ({children, history}) => {
  const [language, setLanguage] = React.useState(getLocale());
  const ref = useRef(language);
  const t = key => {
    return translations[language] && translations[language][key] ? translations[language][key] : key;
  };

  const getLanguage = () => language;

  useEffect(() => {
    const path = history.location.pathname;
    const hasLocale = /[a-z]{2}-[a-z]{2}/.test(path);
    const codeLang = `${language}-${language === 'en' ? 'gb' : language}`

    if(!hasLocale) history.push(`/${codeLang}${path}`);
    else if(hasLocale && ref.current !== language) {
      history.push(path.replace(/[a-z]{2}-[a-z]{2}/, codeLang));
    }

    ref.current = language;
    return () => {};
  }, [language, history]);

  return (
    <LocalizeContext.Provider value={{setLanguage, getLanguage, t}}>
      {children}
    </LocalizeContext.Provider>
  );
};

export default withRouter(LocalizeProvider);