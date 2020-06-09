
`npx create-react-app formation-react`
`npm install --save react-router-dom`

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



Qu'est ce que npx = package runner != package manager
- vient avec npm 5.2+
- tester des package sans les installer
- avoir la dernière version d'un package et pas besoin de l'update lors de chaque nouvelle utilisation

`yarn start`

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