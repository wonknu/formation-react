## Récupérer la locale

**Via le domaine**

Dans le fichier /etc/hosts ajouter

127.0.0.1 formation.en
127.0.0.1 formation.fr

Pour accèder a http://formation.fr:3000 et http://formation.en:3000

Ajouter un fichier d'utilitaire [getLocale.js](https://github.com/wonknu/formation-react/blob/40fceed5fb0f34573b8c74109e90c8d8cbc3e7d1/src/utils/getLocale.js)

```
src
  |_utils
    |_getLocale.js
```

ce fichier récupère la locale dans le nom de domaine que l'on va utilisé dans le [LocalizeProvider](https://github.com/wonknu/formation-react/blob/40fceed5fb0f34573b8c74109e90c8d8cbc3e7d1/src/components/localize/index.js) pour init le useState avec la bonne valeur

On va l'importer 
```
import { getLocale } from '../../utils/getLocale';
```
et l'utiliser dans useState
```
const [language, setLanguage] = React.useState(getLocale());
```

**Via le chemin de l'url**

Maintenant si on veut récupérer la valeur dans le path de l'url il faut dabord modifier la configuration des routes dans [App.js](https://github.com/wonknu/formation-react/blob/c6e16873a20c3257862a0541ccfba12db7af68d5/src/App.js)

```
<Route exact path="/:lang([a-z]{2}-[a-z]{2})" component={Home} />
<Route path="/:lang([a-z]{2}-[a-z]{2})/article/:id" component={Article} />
```

et ajouter cette partie d'url si elle n'existe pas dans le [LocalizeProvider](https://github.com/wonknu/formation-react/blob/c6e16873a20c3257862a0541ccfba12db7af68d5/src/components/localize/index.js) à l'aide d'un hook useEffect et d'un useRef pour tester la previous valeur du code langue, pour cela on a besoin de la variable history du router qui peut être récupéré avec withRouter qui est un HOC

Une dernière chose a faire est d'ajouter dans [getLocale](https://github.com/wonknu/formation-react/blob/c6e16873a20c3257862a0541ccfba12db7af68d5/src/utils/getLocale.js) la methode pour récupérer la locale depuis le path de l'url

et de mettre les bon chemin dans les liens du [header](https://github.com/wonknu/formation-react/blob/c6e16873a20c3257862a0541ccfba12db7af68d5/src/components/header/index.js)