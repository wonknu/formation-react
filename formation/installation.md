## Installation

```javascript
/* npx pour avoir toujours la dernière version de create-react-app sans avoir à l'update a chaque fois */
npx create-react-app formation-react

npm install --save react-router-dom

yarn start
```

Clean up [App.js](https://github.com/wonknu/formation-react/blob/2f0f8e3dda96e0726902de33b78654dccc3d818b/src/App.js)

Ajout des fichiers de cages et de composants dans le projet

```
src
|_ pages
  |_ Home.js
  |_ Article.js
  |_ Error404.js
  |_ index.js
|_ components
  |_ header
    |_ index.js
  |_ langSwitcher
    |_ index.js
```

Contenu d'une page 

```
import React from 'react';

const Home = (props) => {
  return <div>Home</div>;
};

export default Home;
```

Dans [App.js](https://github.com/wonknu/formation-react/blob/a154837728255236996ca6784fc65c70f41ba272/src/App.js) importer le [header](https://github.com/wonknu/formation-react/blob/a154837728255236996ca6784fc65c70f41ba272/src/components/header/index.js) qui lui même importe le [lang switcher](https://github.com/wonknu/formation-react/blob/a154837728255236996ca6784fc65c70f41ba272/src/components/langSwitcher/index.js)