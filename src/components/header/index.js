import React from 'react';
import { Link } from 'react-router-dom';
import LangSwitcher from '../langSwitcher';

const Header = (props) => {

  return (
    <div className="header">
      <h1>Formation React</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/article/123456789">Article</Link>
        <LangSwitcher />
      </nav>
    </div>
  );
};

export default Header;
