# Formation React - Code pour les exercices

La branche **upgrade-content** propose une "correction" des exercices réalisés pendant la formation, avec quelques améliorations, et des exemples de bout de code réutilisable.

## Lancer l'application

- Installer les dépendances :

`npm install` ou `npm i`

- Démarrer l'application :

`npm start`

## Gestion des routes et fil d'Ariane

Sous **/src/components/breadcrumbs/** on retrouve :

- `breadcrumbs-routes.js` qui contient la déclaration de toutes les routes de l'application = la déclaration du mapping qui sera fait entre une url et un composant. Il contient également la déclaration d'un fil d'ariane pour ces routes sous la props `breadcrumb` : texte affiché pour se repérer dans la navigation entre les pages.
- `RouterBreadcrumbs.js` qui gère l'affichage du fil d'ariane selon la liste déclarée dans l'autre composant.

Comme les routes sont centralisées sous `breadcrumbs-routes.js`, on peut également s'en servir dans `App.js` pour ne plus avoir à déclarer une par une les routes de l'application. Il suffit d'utiliser le hook `useRoutes` de _react-router-dom_ :

```javascript
let renderRoutes = useRoutes(routes);

return (
  <WrapperPage>
    {/* Déclaration "centralisée" des routes */}
    {renderRoutes}
  </WrapperPage>
);
```

## Wrapper des pages de l'application
