## React router

Importer dans App.js le BrowserRouter, Switch, Route

```
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
```

Ensuite toujours dans App.js déclarer un composant Switch dans le BrowserRouter qui a pour objectif de rediriger vers un composant en fonction d'un path

```
<BrowserRouter>
  <div className="App">
    <Header />
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/article/:id" component={Article} />
        <Route path="*" component={Error404} />
      </Switch>
    </div>
  </div>
</BrowserRouter>
```

La page article contient un paramètre d'url, on peut y accèder avec useParams de react-router comme [ceci](https://github.com/wonknu/formation-react/blob/1085c3102814e97785d6a9345b18fd5af585451c/src/pages/Article.js)

On va ajouter les liens dans le [Header](https://github.com/wonknu/formation-react/blob/1085c3102814e97785d6a9345b18fd5af585451c/src/components/header/index.js) avec le composant Link

Remarques:
- La route / qui redirige vers la home a le paramètre `exact` sinon se serait toujours vers cette route qu'on serait redirigé
- On verra plutard dans la formation d'autre caractéristique de react router