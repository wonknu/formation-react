import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LangSwitcher from '../langSwitcher';
import { LocalizeContext } from '../localize';

const Header = (props) => {
  const { t, getLanguage } = useContext(LocalizeContext);
  const language = getLanguage();
  const languagePath = `/${language}-${language === 'en' ? 'gb' : language}`;
  return (
    <div className="header">
      <h1>{t('FORMATION_REACT')}</h1>
      <nav>
        <Link to={`${languagePath}`}>{t('PAGE_HOME')}</Link>
        <Link to={`${languagePath}/article/123456789`}>{t('PAGE_ARTICLE')}</Link>
        <LangSwitcher />
      </nav>
    </div>
  );
};

export default Header;