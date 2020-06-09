import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LangSwitcher from '../langSwitcher';
import { LocalizeContext } from '../localize';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>
        <LocalizeContext.Consumer>
          {({t}) => t('FORMATION_REACT')}
        </LocalizeContext.Consumer>
        </h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/article/123456789">Article</Link>
          <LangSwitcher />
        </nav>
      </div>
    );
  }
};


export default Header;