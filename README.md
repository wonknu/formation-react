
`npx create-react-app formation-react`
`npm install --save react-router-dom`
`yarn start`

clean up App.js

Mise en place architecture du projet

- src
  - pages
    - Home.js
    - Article.js
    - Error404.js
    - index.js
  - components
    - header
      - index.js
    - langSwitcher
      - index.js

Import dans App.js


ROUTER

dans App.js
- import BrowserRouter, Switch, Route
- Home a pour path `/` et doit donc avoir `exact` sinon on sera toujours redirigé vers la Home
- On peux utilisé des paramètres, par exemple sur `path="/article/:id"` on peut utiliser useParams de react-router pour récupérer le paramètre id
- Dans le header on va ajouter les liens de navigation vers ces pages avec le composant Link

LOCALISATION

dans src/i18n/ créer deux fichier en.js et fr.js

dans src/components/localize/index.js ajouter le fichier index.js qui serq un Context

```
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
```

- createContext
- useState
- les methodes setLanguage, getLanguage, t
- Provider

Ensuite on importe le provider dans App.js => pourra être utilisé par tous les composants de l'app

Utilisation de la methode `t()` par exemple dans le header, il faut utiliser useContext et LocalizeContext

```
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
        <Link to="/">Home</Link>
        <Link to="/article/123456789">Article</Link>
        <LangSwitcher />
      </nav>
    </div>
  );
};

export default Header;
```

Si on veut utiliser un context dans un composant de class (!= d'un composant fonctionnel) il faut l'utiliser dans le le JSX comme ceci
```
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
```

Qu'est ce que npx = package runner != package manager
- vient avec npm 5.2+
- tester des package sans les installer
- avoir la dernière version d'un package et pas besoin de l'update lors de chaque nouvelle utilisation

----------------------

Open App.js point d'entrée


- Introduction a la formation

- Mise en place architecture du projet

- React router dom 
  - BrowserRouter
  - Switch
  - Route (utilisation des path et des paramètre d'url)
  - Link
  - withRouter, Higher Order Component (HOC) pour accèder à la propriété history
  - error 404

- i18n, gestion de la localisation from scratch sans package npm
  - React context avec createContext, le Provider et les deux façon d'utiliser le Consumer (dans un component vs dans un functionnal component)
  - Les hooks useState, useEffect, useContext
  - Un utilitaire pour récupérer la locale depuit le nom de domaine et / ou le language codes ISO dans le path
  - switcher de langue