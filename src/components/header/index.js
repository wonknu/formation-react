import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LangSwitcher from '../langSwitcher';
import { LocalizeContext } from '../localize';

const Header = (props) => {
  const { t } = useContext(LocalizeContext);
  return (
    <div className="header">
      <h1>{t('FORMATION_REACT')}</h1>
      <nav>
        <Link to="/">{t('PAGE_HOME')}</Link>
        <Link to="/article/123456789">{t('PAGE_ARTICLE')}</Link>
        <LangSwitcher />
      </nav>
    </div>
  );
};

export default Header;