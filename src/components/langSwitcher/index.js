import React, { useContext } from 'react';
import { LocalizeContext } from '../localize';

const LangSwitcher = (props) => {
  const { setLanguage, getLanguage } = useContext(LocalizeContext);
  const currentLang = getLanguage() === "fr" ? "en" : "fr";

  return <a href="#" onClick={() => setLanguage(currentLang)}>{currentLang}</a>;
};

export default LangSwitcher;
