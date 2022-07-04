import { Breadcrumbs, Link } from '@mui/material';
import React from 'react';
// Renommage de l'import Link de react-router-dom en tant que RouterLink 
// (car on a déjà un import de Link provenant de MUI)
import { Link as RouterLink } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { routes } from './breadcrumbs-routes';

// Déclaration du lien qui va entourer un élément du fil d'ariane
const LinkRouter = (props) => (
    <Link
        color="textPrimary"
        className="link"
        {...props}
        component={RouterLink}
    />
);

const RouterBreadcrumbs = () => {

    // Utilisation du hook useBreacrumbs pour créer le fil d'ariane à partir des routes définies
    const breadcrumbs = useBreadcrumbs(routes, {
        disableDefaults: true,
        excludePaths: ['/'],
    });

    // Affichage du fil d'ariane : un lien vers l'url correspondante autour du texte "breadcrumb" défini dans routes
    const secondePartieBC = breadcrumbs.map(({ match, breadcrumb }) => (
        <LinkRouter key={breadcrumb} to={match.pathname}>
            {breadcrumb}
        </LinkRouter>
    ));

    /* S'il n'y a rien après accueil, on n'affiche pas le fil d'arianne */
    return secondePartieBC.length === 0 ? null : (
        <Breadcrumbs aria-label="breadcrumb" separator="›" sx={{ fil: { margin: '1em 4em' } }}>
            <LinkRouter to="/">Accueil</LinkRouter>
            {secondePartieBC}
        </Breadcrumbs>
    );
};
export default RouterBreadcrumbs;
